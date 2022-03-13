const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, auto: true },
    category: {type: String, required: true},
    question: {type: String, required: true},
    answerType: {type: String, required: true},
    variousOptions: {type: String},
    // answer: {type: String},
    isActive: {type: Boolean, default: true}
}, {timestamps: true});

module.exports = mongoose.model('Question', QuestionSchema);