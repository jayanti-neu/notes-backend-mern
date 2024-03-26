import express from "express"
import * as meetingNoteController from './../controllers/meeting-note-controller.js';

const router = express.Router();

router.route('/')
    .get(meetingNoteController.findAll)
    .post(meetingNoteController.post);

router.route('/:id')    
    .put(meetingNoteController.update)
    .delete(meetingNoteController.deleteNote);

router.route('/search')
    .get(meetingNoteController.search);

export default router;