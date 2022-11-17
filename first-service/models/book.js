const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    HinhAnh: { type: String, required: true },
    TieuDe: { type: String, required: true },
    Chapter: [],
})

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;