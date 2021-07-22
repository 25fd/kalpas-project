const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController')
const authController = require('../controllers/authController')


router
  .route('/')
  .get(authController.protect, noteController.getNote)
  .post(authController.protect, noteController.createNote)

router
  .route('/:id')
  .get(authController.protect, noteController.getNoteById)
  .post(authController.protect, noteController.updateNoteById)
  .delete(authController.protect, noteController.deleteNoteById)
module.exports = router;