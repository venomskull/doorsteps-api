const router = require('express').Router();
const SurveyUser = require('../models/SurveyUser');

router.post('/', async(req, res) => {
    try{
        const newSurveyUser = new SurveyUser(req.body);
        const createdSurveyUser = await newSurveyUser.save();
        res.status(201).json(createdSurveyUser);
    } catch(err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;