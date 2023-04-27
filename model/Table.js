const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String, required: true
    },
    title: String,
    description: String,
    date: Date,
});

const table = mongoose.model("Table1", tableSchema);

module.exports = table;