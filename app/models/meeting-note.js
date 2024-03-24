// id, title, content, list of action items, and createdDate
import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    id: {
        type: Number, 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    actionItems: {
        type: [String],
        required: false
    },
    createdDate: {
        type: Date,
        required: true
    }
    
});

const model = mongoose.model('meetingNote', Schema);

export default model;