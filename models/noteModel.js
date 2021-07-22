const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: {
            unique: true
        },
        required: true
    },
    title: {
        type: String
    },
    discription: {
        type: String
    }
})
const notew = mongoose.model("Note", noteSchema);

module.exports = notew;