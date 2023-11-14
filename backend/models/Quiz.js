const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  answer:{
    type:String,
    required:true,
  }
});

const AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
  },
});

const QuizSchema = new mongoose.Schema({      //It is used to display questions to users
  title:{
    type: String,
    required: true,
  },
  questions: [QuestionSchema],
  duration: { // New field
    type: Number, // time in milliseconds
    required: true,
  },
  // answers: [AnswerSchema],
  //yaha pe  haga hai thoda pair utha kar chalen 
  // answers:[String,]
});

module.exports = mongoose.model('Quiz', QuizSchema);
