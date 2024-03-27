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

/**
 * 2.search based on keywords
 * @param {*} params 
 * @returns 
 */
export const search = async (params = {}) => {
    const keyword = params.keyword;
    const startDate = params.startDate;
    const endDate = params.endDate;

    const query = {};
    if (keyword) {
        // search for keyword in title, content and actionItems
        query.$or = [
            { title: { $regex: keyword, $options: 'i' } },
            { content: { $regex: keyword, $options: 'i' } },
            { 'actionItems.item': { $regex: keyword, $options: 'i' } }
        ];
    }
    if (startDate && endDate) {
        // search for notes created between startDate and endDate
        query.createdDate = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const meetingNotes = await MeetingNote.find(query);
    return meetingNotes;
}

/**
 * update the meeting note based on id with the updated note
 * @param {*} id 
 * @param {*} note 
 * @returns updated note
 */
export const update = async (id, note) => {
    const meetingNote = await MeetingNote.findByIdAndUpdate(id, note, { new: true });       
    return meetingNote; 
}

/**
 * delete the meeting note based on id
 * @param {*} id 
 * @returns 
 */
export const deleteNote = async (id) => {   
    const meetingNote = await MeetingNote.findByIdAndDelete(id);
    return meetingNote;
}