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

export const search = async (request, response) => {
    try {
        const params = {...request.query};
        const notes = await meetingNotesService.search(params);
        setResponse(notes, response);
    } catch(error){
        setError(error, response);
    }
}

export const update = async (request, response) => {
    try {
        const id = request.params.id;
        const note = {...request.body};
        const meetingNote = await meetingNotesService.update(id, note);
        setResponse(meetingNote, response);
    } catch(error){
        setError(error, response);
    }
}

export const deleteNote = async (request, response) => {    
    try {
        const id = request.params.id;
        const meetingNote = await meetingNotesService.deleteNote(id);
        setResponse(meetingNote, response);
    } catch(error){
        setError(error, response);
    }
}