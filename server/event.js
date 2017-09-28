const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Event = new Schema({
    slug: { type: Schema.Types.String, slug: "title", unique: true },
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