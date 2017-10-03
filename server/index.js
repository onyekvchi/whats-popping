// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const moment = require("moment");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Event = require("./event");

const LOCAL_MONGO_DB = "mongodb://127.0.0.1:27017/whatspopping";
const dbOptions = { promiseLibrary: require("bluebird"), useMongoClient: true };
mongoose.Promise = require("bluebird");
mongoose.connect(process.env.MONGO_DB_URI || LOCAL_MONGO_DB, dbOptions);

app.listen(process.env.PORT || 5000);
app.use(bodyParser.json({ type: "application/json" }));
app.use(cors());


app.get("/events", function(request, response) {
  Event.find()
    .then(events =>
      response.json({
        days: getDaysFromEvents(events),
        events
      })
    )
    .catch(error =>
      response.json({
        status: "failed",
        error
      })
    );
});


app.get("/events/latest", function(request, response) {
  var wednesday = 3,
    today = moment(),
    format = "YYYYMMDD",
    fromDate,
    toDate,
    isStale;

  if (today.weekday() < wednesday) {
    fromDate = moment().weekday(wednesday - 7);
    toDate = moment().weekday(wednesday - 1);
  } else {
    fromDate = moment().weekday(wednesday);
    toDate = moment().weekday(wednesday + 6);
  }

  fromDate = fromDate.format(format);
  toDate = toDate.format(format);
  isStale = today > toDate;
});


app.post("/events", function(request, response) {
  if (
    request.body.title == null &&
    request.body.location == null &&
    request.body.description == null &&
    request.body.price == null
  ) {
    return response.json({
      status: "failed",
      error: "some body paramenters were not set"
    });
  }

  Event.create(request.body)
    .then(event =>
      response.json({
        status: "success",
        event
      })
    )
    .catch(error =>
      response.json({
        status: "failed",
        error
      })
    );
});


app.put("/event/:id", (request, response) => {
  Event.update({ _id: request.params.id }, request.body)
    .then(event => {
      Event.findById(request.body._id).then(event =>
        response.json({
          status: "success",
          event
        })
      );
    })
    .catch(error =>
      response.json({
        status: "failed",
        error
      })
    );
});


app.get("/event/:slug", function(request, response) {
  Event.findOne({ slug: request.params.slug }, function(error, event) {
    response.send(event || {});
  });
});


app.post("/auth", function(request, response) {
  if (
    request.body.email === "alibaba" &&
    request.body.password === "opensesame"
  ) {
    response.status(200).send("Logged in successfully");
  } else {
    response.status(400).send("Login failed");
  }
});


const getDaysFromEvents = events => {
  return events
    .map(event => moment(event.date).format("YYYYMMDD"))
    .filter((element, position, array) => array.indexOf(element) === position)
    .sort();
};
