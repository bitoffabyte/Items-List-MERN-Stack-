const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
module.exports = Item = mongoose.model('item', itemSchema);
