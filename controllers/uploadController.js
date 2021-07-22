const Note = require("../models/noteModel")
const catchAsync = require("../Utilis/catchAsync");
const csv = require("csvtojson");

exports.postFile = catchAsync(async (req, res, next) => {
    try {
        const data = await csv().fromString(req.files.file.data.toString('utf8'))
        const address = await Note.insertMany(data);
        return res.status(201).json({
            "status": 'File uploaded'
        });
    } catch (e) {

        return res.status(500).json({
            "status": 'Error'
        });
    }
});
