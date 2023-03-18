import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: {}, required: true}
})