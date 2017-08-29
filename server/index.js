// server.js
var express = require("express");
var cors = require("cors");
var app = express();
var moment = require("moment");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

app.use(bodyParser.json({ type: "application/json" }));
app.use(cors());

var db;

app.get("/events", function(request, response) {
  const cursor = db
    .collection("events")
    .find()
    .toArray(function(err, events) {
      response.send({
        days: getDaysFromEvents(events),
        events,
        isStale: true
      });
    });
});

app.get("/events/latest", function(req, res) {
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

  const cursor = db
    .collection("events")
    .find({ date: { $gte: fromDate, $lte: toDate } })
    .toArray(function(err, events) {
      console.log(events);
      res.send({
        days: getDaysFromEvents(events),
        events,
        isStale
      });
    });
});

app.post("/events", function(req, res) {
  db.collection("events").insert(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log(req.body);
    res.sendStatus(200);
  });
});

const getDaysFromEvents = events => {
  return events
    .map(event => event.date)
    .filter((elem, pos, arr) => {
      return arr.indexOf(elem) == pos;
    })
    .sort();
};

MongoClient.connect(
  "mongodb://onyekvchi:kaycee012@ds123080.mlab.com:23080/whatspopping",
  (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(3001, () => {
      console.log("listening on 3001");
    });
  }
);
