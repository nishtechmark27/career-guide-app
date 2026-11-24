import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema(
  {
    careerId: { type: String, required: true },
    careerTitle: { type: String, required: true },
    matchPercent: { type: Number, required: true },
    summary: { type: String, default: '' }
  },
  { _id: false }
);

const aptitudeResultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    testId: {
      type: String,
      required: true,
      default: 'career-fit-assessment'
    },
    testName: {
      type: String,
      required: true,
      default: 'Career Fit Assessment'
    },
    answers: {
      type: Map,
      of: Number,
      default: {}
    },
    score: {
      type: Number,
      required: true,
      default: 0
    },
    totalQuestions: {
      type: Number,
      required: true,
      default: 5
    },
    topMatches: [matchSchema],
    completedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
    collection: 'aptitude_results'
  }
);

export const AptitudeResult = mongoose.models.AptitudeResult || mongoose.model('AptitudeResult', aptitudeResultSchema);
export default AptitudeResult;
