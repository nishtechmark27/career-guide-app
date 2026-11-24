import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    provider: {
      type: String,
      required: true,
      trim: true
    },
    instructor: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    level: {
      type: String,
      default: 'All Levels'
    },
    pricingType: {
      type: String,
      required: true,
      default: 'Free'
    },
    fees: {
      type: String,
      required: true,
      default: '100% Free'
    },
    duration: {
      type: String,
      required: true,
      default: 'Self-paced'
    },
    rating: {
      type: Number,
      default: 4.8
    },
    enrolledCount: {
      type: String,
      default: '10,000+'
    },
    badge: {
      type: String,
      default: 'Verified'
    },
    eligibility: {
      type: String,
      required: true,
      default: 'Open to all students'
    },
    about: {
      type: String,
      required: true
    },
    youLearn: {
      type: [String],
      default: []
    },
    officialUrl: {
      type: String,
      required: [true, 'Official verified enrollment URL is required'],
      trim: true,
      match: [/^https?:\/\/.+/, 'Please provide a valid official URL']
    },
    chips: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true,
    collection: 'courses'
  }
);

export const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
export default Course;
