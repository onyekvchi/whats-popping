let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Event = new Schema({
    title: { type: Schema.Types.String, unique: true },
    price: { type: Schema.Types.Number, default: 0 },
    location: Schema.Types.String,
    description: Schema.Types.String,
    date: { type: Schema.Types.Date, default: Date.now() },
    startTime: { type: Schema.Types.String, required: true },
    endTime: Schema.Types.String,
    createdAt: { type: Schema.Types.Date, default: Date.now() },
    updatedAt: { type: Schema.Types.Date, default: Date.now() },
    image: { type: Schema.Types.String },
    link: { type: Schema.Types.String },
});

module.exports = mongoose.model('Event', Event);