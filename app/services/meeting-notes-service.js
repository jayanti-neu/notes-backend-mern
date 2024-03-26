import MeetingNote from './../models/meeting-note.js'

/**
 * 3.Add meeting note
 * @param {*} meetingNote 
 * @returns 
 */
export const save = async (note) => {
    const meetingNote = new MeetingNote(note);
    return await meetingNote.save();
}

/**
 * 1.Searches for meeting notes based on params sent. if no params returns all
 * @param {*} params 
 * @returns 
 */
export const findAll = async () => {
    const meetingNotes = await MeetingNote.find({});
    return meetingNotes;
}