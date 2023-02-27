import * as mongoose from 'mongoose';

export const questionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: {}, required: true}
})