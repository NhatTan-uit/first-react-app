const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    ChapterTitle: { type: String },
    ChapterImg: { type: String },
    ChapterContent: { type: String },
})

const Chapters = mongoose.model("Chapters", chapterSchema);

module.exports = Chapters;