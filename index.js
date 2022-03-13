const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const questionRoute = require('./routes/questions');
const surveyUser = require('./routes/surveyUser');
const surveyAnswers = require('./routes/surveyAnswers');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
.then(() => console.log('DB Connection Successfull'))
.catch((err) => console.log(err))

app.use(cors());
app.use(express.json());

app.use('/api/questions', questionRoute);
app.use('/api/surveyuser', surveyUser);
app.use('/api/surveyanswers', surveyAnswers);

app.listen(8800, () => {
    console.log('🚀  BACKEND SERVER IS RUNNING -> http://localhost:8800');
});

