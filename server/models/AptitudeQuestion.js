import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true
    },
    scoreWeight: {
      type: Map,
      of: Number,
      default: {}
    },
    isCorrect: {
      type: Boolean,
      default: false
    }
  },
  { _id: true }
);

const aptitudeQuestionSchema = new mongoose.Schema(
  {
    questionNumber: {
      type: Number,
      required: true,
      unique: true
    },
    category: {
      type: String,
      required: true,
      enum: ['Analytical', 'Technical', 'Creativity', 'Logical', 'Decision Making', 'General Aptitude'],
      default: 'General Aptitude'
    },
    questionText: {
      type: String,
      required: true,
      trim: true
    },
    options: {
      type: [optionSchema],
      validate: [opts => opts.length >= 2, 'Question must have at least 2 options']
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      default: 'Medium'
    },
    explanation: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    collection: 'aptitude_questions'
  }
);

export const AptitudeQuestion = mongoose.models.AptitudeQuestion || mongoose.model('AptitudeQuestion', aptitudeQuestionSchema);
export default AptitudeQuestion;
