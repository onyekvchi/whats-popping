let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Event = new Schema({
    title: { type: Schema.Types.String, unique: true },
    price: { type: Schema.Types.Number, default: 0 },
    location: Schema.Types.String,
    description: Schema.Types.String,
    date: { type: Schema.Types.Date, default: Date.now() },
    endTime: { type: Schema.Types.Date, default: Date.now() },
    createdAt: { type: Schema.Types.Date, default: Date.now() },
    updatedAt: { type: Schema.Types.Date, default: Date.now() },
});

module.exports = mongoose.model('Event', Event);