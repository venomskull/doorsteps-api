const router = require('express').Router();
const SurveyAnswers = require('../models/SurveyAnswes');

router.post('/', async(req, res) => {
    try{
        const newSurveyAnswers = new SurveyAnswers(req.body);
        const createdSurveyAnswers = await newSurveyAnswers.save();
        res.status(201).json(createdSurveyAnswers);
    } catch(err){
        res.status(500).json(err.message);
    }
    
})

module.exports = router;