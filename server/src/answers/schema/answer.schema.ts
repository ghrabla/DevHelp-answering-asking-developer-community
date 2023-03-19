import * as mongoose from "mongoose";

export const AnswerSchema = new mongoose.Schema({
    body: {type: {},required: true},
    is_right: {type: String, required: true},
    vote: {type: Number, required: true},
    id_question: [{type: mongoose.Schema.Types.ObjectId, required: true,ref: 'Question'}],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
})