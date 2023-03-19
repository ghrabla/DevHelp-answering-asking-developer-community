import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: {}, required: true},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
})