// id, title, content, list of action items, and createdDate
import mongoose from "mongoose";

const actionItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
});

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
        type: [actionItemSchema],
        required: false
    },
    createdDate: {
        type: Date,
        required: false,
        default: Date.now
    }
    
});

const model = mongoose.model('meetingNote', Schema);

export default model;