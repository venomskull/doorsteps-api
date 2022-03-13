const mongoose = require('mongoose')

const SurveyUserSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, index: true, required: true, auto: true },
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true}
},{timestamps: true});

module.exports = mongoose.model('SurveyUser', SurveyUserSchema);