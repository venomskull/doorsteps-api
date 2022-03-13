const router = require('express').Router();
const Question = require('../models/Question');

//CREATE
router.post('/', async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL QUESTIONS
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        // const questions = await Question.find().sort({id: 'asc'});
        res.status(200).json(questions.reverse());
        // res.status(200).json(questions);
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET DISTINCT CATEGORIES
router.get('/distinctcategory', async (req, res) => {
    try {
        const distinctCategories = await Question.distinct('category');
        res.status(200).json(distinctCategories);
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET RECORDS USING CATEGORY
router.get('/find/:cat', async (req, res) => {
    try {
        const questionsBasedOnCat = await Question.find({ category: req.params.cat }).where('isActive').equals(true);
        res.status(200).json(questionsBasedOnCat);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE ACTIVE 
router.put('/:id', async (req, res) => {
    try {
        const updatedQns = await Question.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedQns);
    } catch (err) {
        res.status(500).json(err.message)
    }
})

module.exports = router;