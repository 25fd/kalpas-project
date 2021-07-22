const Note = require("../models/noteModel")
const catchAsync = require("./../Utilis/catchAsync");

exports.getNote = catchAsync(async (req, res, next) => {
    try {
        const note = await Note.find();
        return res.status(200).json({
            status: "success",
            note
        });

    } catch (e) {

        return res.status(500).json({
            "status": 'Error'
        });
    }


});

exports.createNote = catchAsync(async (req, res, next) => {
    try {
        const note = await Note.create(req.body);
        return res.status(201).json({
            status: "success",
            note
        });
    } catch (e) {

        return res.status(500).json({
            "status": 'Error'
        });
    }


});

exports.getNoteById = catchAsync(async (req, res, next) => {
    try {

        console.log(req.params.id)
        const note = await Note.findById(req.params.id);
        if (note === null) {
            res.status(404).json({
                status: "No note with id " + req.params.id + " found"
            });
        }
        return res.status(200).json({
            status: "success",
            note
        });
    } catch (e) {

        return res.status(500).json({
            "status": 'Error'
        });
    }

});

exports.updateNoteById = catchAsync(async (req, res, next) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(note, null)
        if (note === null) {
            res.status(404).json({
                status: "No note with id " + req.params.id + " found"
            });
        }
        return res.status(200).json({
            status: note
        });
    } catch (e) {

        return res.status(500).json({
            "status": 'Error'
        });
    }


});

exports.deleteNoteById = catchAsync(async (req, res, next) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id, req.body);
        if (note === null) {
            res.status(404).json({
                status: "No note with id " + req.params.id + " found"
            });
        }
        return res.status(200).json({
            status: "Delete successful"
        });
    } catch (e) {

        return res.status(500).json({
            "status": 'Error'
        });
    }
});
