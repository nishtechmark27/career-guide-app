import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    userName: {
      type: String,
      required: true,
      default: 'Student'
    },
    userEmail: {
      type: String,
      required: true,
      default: 'student@email.com'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    category: {
      type: String,
      enum: ['App Experience', 'Course Quality', 'Career Advice', 'Feature Request', 'Bug Report', 'General'],
      default: 'App Experience'
    },
    message: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
    collection: 'feedbacks'
  }
);

export const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);
export default Feedback;
