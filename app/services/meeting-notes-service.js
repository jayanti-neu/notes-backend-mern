import MeetingNote from './../models/meeting-note.js'

/**
 * 3.Add meeting note
 * @param {*} meetingNote 
 * @returns 
 */
export const save = async (meetingNote) => {
    const meetingNote = new MeetingNote(meetingNote);
    return await meetingNote.save();
}

/**
 * 1.Searches for meeting notes based on params sent. if no params returns all
 * @param {*} params 
 * @returns 
 */
export const find = async () => {
    const meetingNotes = await MeetingNote.find({});
    return meetingNotes;
}