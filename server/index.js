// server.js
var express = require("express");
var cors = require("cors");
var app = express();
var moment = require("moment");
const bodyParser = require("body-parser");
let mongoose = require('mongoose');
let Event = require('./event');

let LOCAL_MONGO_DB = "mongodb://127.0.0.1:27017/whatspopping";
let options = { promiseLibrary: require('bluebird') };
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGO_DB_URI || LOCAL_MONGO_DB, options);

app.listen(3001);
app.use(bodyParser.json({ type: "application/json" }));
app.use(cors());

var db;

app.get("/events", function (r, s) {
	Event.find()
	.then(events => {
		return s.json({ status: "success", data: events });
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
 * 
 */
app.post("/events", function (r, s) {

	if (r.body.title == null && r.body.location == null &&
		r.body.description == null && r.body.price == null) {
		return s.json({ status: "failed", err: "some body paramenters were not set" });
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

//////////// Doesn't do anything   //////////////
// const events = {
//   days: [20170630, 20170701, 20170702],
//   events: [
//     {
//       _id: "5962c262fb65925e950d586c",
//       date: 20170630,
//       title: "Xtreme Paintball Arena",
//       location:
//         "Hardcore Entertainment, Mainland Sports Arena – Murhi House Plot 45 Omole Layout, Opposite Big-Treat Omole Junction, Ikeja.",
//       startTime: "5pm",
//       endTime: "8pm",
//       price: "NGN 5,000",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
//     },
//     {
//       _id: "5962c262fb65925e950d586d",
//       date: 20170630,
//       title: "Bailey’s Bakefest",
//       location: "Muri Okunola Park – Ahmadu Bello Way, Victoria Island.",
//       startTime: "10am",
//       endTime: null,
//       price: "Free",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
//     },
//     {
//       _id: "5962c262fb65925e950d586e",
//       date: 20170630,
//       title: "Femi Kuti & The Positive Force",
//       location:
//         "The New Africa Shrine – 1 NERDC Road, Off Hakeem Balogun Street, Agidingbi, Ikeja.",
//       startTime: "7pm",
//       endTime: "11pm",
//       price: "NGN 500",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
//     },
//     {
//       _id: "5962c262fb65925e950d586f",
//       date: 20170630,
//       title: "Go Skate Day",
//       location: "Broad Street, Lagos Island.",
//       startTime: "10am",
//       endTime: null,
//       price: "Free",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
//     },
//     {
//       _id: "5962c262fb65925e950d5870",
//       date: 20170630,
//       title: "Afropolitan Vibes",
//       location: "Muri Okunola Park – Ahmadu Bello Way, Victoria Island.",
//       startTime: "8pm",
//       endTime: "12am",
//       price: "NGN 500",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
//     },
//     {
//       _id: "5962c262fb65925e950d5871",
//       date: 20170630,
//       title: "Lagos Foto Party",
//       location: "City Hall Rooftop, 30 Catholic Mission Street, Lagos Island",
//       startTime: "7pm",
//       endTime: null,
//       price: "Free",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
//     },
//     {
//       _id: "5962c262fb65925e950d5872",
//       date: 20170701,
//       title: "Fabrics & Dyes Exhibition",
//       location: "4, Olumo Road, Parkview, Ikoyi, Lagos",
//       startTime: "1pm",
//       endTime: "8pm",
//       price: "NGN 5,000",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
//     },
//     {
//       _id: "5962c262fb65925e950d5873",
//       date: 20170702,
//       title: "Tequi Hours",
//       location: "Crossroads Restaurant and Bar, Eko Hotel, Lagos",
//       startTime: "8pm",
//       endTime: null,
//       price: "Free",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
//     },
//     {
//       _id: "5962c262fb65925e950d5874",
//       date: 20170702,
//       title: "Ain‘t Nothing But A Gangsta Party by BarBar Radio",
//       location: "Crossroads Restaurant and Bar, Eko Hotel, Lagos",
//       startTime: "8pm",
//       endTime: null,
//       price: "Free",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
//     }
//   ],
//   isStale: true
// };
