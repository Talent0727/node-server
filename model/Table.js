const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String, required: true
    },
    title: String,
    description: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

const table = mongoose.model("Table", tableSchema);

module.exports = table;