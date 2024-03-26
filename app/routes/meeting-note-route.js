import express from "express"
import * as meetingNoteController from './../controllers/meeting-note-controller.js';

const router = express.Router();

router.route('/')
    .get(meetingNoteController.findAll)
    .post(meetingNoteController.post)

export default router;