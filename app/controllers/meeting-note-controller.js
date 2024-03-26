import * as meetingNotesService from './../services/meeting-notes-service.js'
import {setResponse, setError} from './response-handlers.js'

export const post = async (request, response) => {
    try {
        const note = {...request.body};
        const meetingNote = await meetingNotesService.save(note);
        setResponse(meetingNote, response);
    } catch(error){
        setError(error, response);
    }
}

export const findAll = async (request, response) => {
    try {
        const meetingNotes = await meetingNotesService.findAll();
        setResponse(meetingNotes, response);
    } catch(error){
        setError(error, response);
    }
}