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

var db;

app.get("/events", function(r, s) {
  Event.find()
    .then(events => {
      return s.json({ status: "success", data: events });
    })
    .catch(err => {
      return s.json({ status: "failed", err: err });
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
 * 
 */
app.post("/events", function(r, s) {
  if (
    r.body.title == null &&
    r.body.location == null &&
    r.body.description == null &&
    r.body.price == null
  ) {
    return s.json({
      status: "failed",
      err: "some body paramenters were not set"
    });
  }

  Event.create(r.body)
    .then(event => {
      return s.json({ status: "success", data: event });
    })
    .catch(err => {
      return s.json({ status: "failed", err: err });
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
