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

const events = {
  days: [20170630, 20170701, 20170702],
  events: [
    {
      _id: "5962c262fb65925e950d586c",
      date: 20170630,
      title: "Xtreme Paintball Arena",
      location:
        "Hardcore Entertainment, Mainland Sports Arena – Murhi House Plot 45 Omole Layout, Opposite Big-Treat Omole Junction, Ikeja.",
      startTime: "5pm",
      endTime: "8pm",
      price: "NGN 5,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
    },
    {
      _id: "5962c262fb65925e950d586d",
      date: 20170630,
      title: "Bailey’s Bakefest",
      location: "Muri Okunola Park – Ahmadu Bello Way, Victoria Island.",
      startTime: "10am",
      endTime: null,
      price: "Free",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
    },
    {
      _id: "5962c262fb65925e950d586e",
      date: 20170630,
      title: "Femi Kuti & The Positive Force",
      location:
        "The New Africa Shrine – 1 NERDC Road, Off Hakeem Balogun Street, Agidingbi, Ikeja.",
      startTime: "7pm",
      endTime: "11pm",
      price: "NGN 500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
    },
    {
      _id: "5962c262fb65925e950d586f",
      date: 20170630,
      title: "Go Skate Day",
      location: "Broad Street, Lagos Island.",
      startTime: "10am",
      endTime: null,
      price: "Free",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
    },
    {
      _id: "5962c262fb65925e950d5870",
      date: 20170630,
      title: "Afropolitan Vibes",
      location: "Muri Okunola Park – Ahmadu Bello Way, Victoria Island.",
      startTime: "8pm",
      endTime: "12am",
      price: "NGN 500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
    },
    {
      _id: "5962c262fb65925e950d5871",
      date: 20170630,
      title: "Lagos Foto Party",
      location: "City Hall Rooftop, 30 Catholic Mission Street, Lagos Island",
      startTime: "7pm",
      endTime: null,
      price: "Free",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
    },
    {
      _id: "5962c262fb65925e950d5872",
      date: 20170701,
      title: "Fabrics & Dyes Exhibition",
      location: "4, Olumo Road, Parkview, Ikoyi, Lagos",
      startTime: "1pm",
      endTime: "8pm",
      price: "NGN 5,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
    },
    {
      _id: "5962c262fb65925e950d5873",
      date: 20170702,
      title: "Tequi Hours",
      location: "Crossroads Restaurant and Bar, Eko Hotel, Lagos",
      startTime: "8pm",
      endTime: null,
      price: "Free",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
    },
    {
      _id: "5962c262fb65925e950d5874",
      date: 20170702,
      title: "Ain‘t Nothing But A Gangsta Party by BarBar Radio",
      location: "Crossroads Restaurant and Bar, Eko Hotel, Lagos",
      startTime: "8pm",
      endTime: null,
      price: "Free",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia veritatis laboriosam sed ullam consequatur non reiciendis repellendus, maxime voluptatum, aut incidunt consequuntur accusantium hic. Blanditiis illo magnam libero dolorem itaque."
    }
  ],
  isStale: true
};
