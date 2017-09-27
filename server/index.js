// server.js
var express = require("express");
var cors = require("cors");
var app = express();
var moment = require("moment");
const bodyParser = require("body-parser");
let mongoose = require("mongoose");
let Event = require("./event");

let LOCAL_MONGO_DB = "mongodb://127.0.0.1:27017/whatspopping";
let dbOptions = { promiseLibrary: require("bluebird"), useMongoClient: true };
mongoose.Promise = require("bluebird");
mongoose.connect(process.env.MONGO_DB_URI || LOCAL_MONGO_DB, dbOptions);

app.listen(3001);
app.use(bodyParser.json({ type: "application/json" }));
app.use(cors());

/**
 * @method GET /events
 */
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

/**
 * @method POST /events
 * @description Creates an event
 * @param {String} title 
 * @param {String} location
 * @param {String} description
 * @param {Number} price
 * @param {Date} startDate
 * @param {Date} endDate
 */
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

/**
 * @method PUT /events
 * @description Modifies the value of an event
 * @param {String} _id event id
 * @param {Object} update
 * @param {String} title
 * @param {String} location
 * @param {String} description
 * @param {Number} price
 * @param {Date} startDate
 * @param {Date} endDate
 * @example 
 * ```
 * {
	"_id": "59c43574bd9cdc72eee95da3",
	"update": {
		  "title": "Xtreme Paintball 3",
	      "location": "Mainland Sports, Junction, Ikeja.",
	      "price": 1000,
	      "description":"Loipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendu , maxime libero dolorem itaque.",
	      "startTime": "7pm",
	      "endTime":"11pm"
	}
}
 * ```
 */
app.put("/events", (request, response) => {
  Event.update({ _id: request.body._id }, request.body.update)
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

/**
 * @method GET /event:id
 */
app.get("/event/:id", function(request, response) {
  Event.findOne({ _id: request.params.id }, function(error, event) {
    response.send(event);
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
