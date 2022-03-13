const mongoose = require('mongoose');

const SurveyAnswersSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, auto: true },
    userId: {type: String, required: true},
    category: {type: String, required: true},
    answers: {type: Object, required: true}
}, {timestamps: true});

module.exports = mongoose.model('SurveyAnswers', SurveyAnswersSchema);