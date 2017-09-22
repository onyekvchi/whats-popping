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

app.get("/events", function (r, s) {
	console.log("stuff");
	Event.find()
		.then(events => {
			return s.json({
				days: getDaysFromEvents(events),
				events
			});
		})
		.catch(err => {
			return s.json({ status: "failed", err: err });
		});
});

app.get("/events/latest", function (req, res) {
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
app.post("/events", function (r, s) {
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
 */
app.put('/events', (r, s) => {
	Event.update({ _id: r.body._id }, r.body.update)
		.then(event => {
			return s.json({ status: "success", data: event });
		})
		.catch(err => {
			return s.json({ status: "failed", err: err });
		});
})

app.get("/event/:id", function (req, res) {
	Event.findOne({ _id: req.params.id }, function (err, event) {
		res.send(event)
	})
});

app.post("/auth", function (req, res) {
	if (req.body.email === "alibaba" && req.body.password === "opensesame") {
		res.status(200).send("Logged in successfully");
	} else {
		res.status(400).send("Login failed")
	}
});

const getDaysFromEvents = events => {
	return events
		.map(event => moment(event.date).format("YYYYMMDD"))
		.filter((elem, pos, arr) =>  arr.indexOf(elem) === pos)
		.sort();
};
