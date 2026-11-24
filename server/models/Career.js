import mongoose from 'mongoose';

const roadmapStepSchema = new mongoose.Schema(
  {
    stepNumber: { type: Number, required: true },
    title: { type: String, required: true },
    status: { type: String, enum: ['done', 'current', 'pending'], default: 'pending' },
    estimatedWeeks: { type: Number, default: 3 },
    resource: { type: String, default: '' },
    officialUrl: { type: String, default: '' }
  },
  { _id: true }
);

const careerSchema = new mongoose.Schema(
  {
    careerId: {
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
    tagline: {
      type: String,
      required: true
    },
    matchPercent: {
      type: Number,
      default: 85
    },
    demand: {
      type: String,
      default: 'High Demand'
    },
    demandBadge: {
      type: String,
      default: 'high'
    },
    category: {
      type: String,
      required: true,
      enum: ['Tech', 'Health', 'Business', 'Design', 'Science', 'Engineering']
    },
    salaryRange: {
      type: String,
      required: true
    },
    experienceLevel: {
      type: String,
      default: 'Entry to Mid'
    },
    growthRate: {
      type: String,
      default: '+25%'
    },
    chips: {
      type: [String],
      default: []
    },
    overview: {
      description: { type: String, required: true },
      keySkills: { type: [String], default: [] },
      education: { type: String, default: '' },
      responsibilities: { type: [String], default: [] },
      roadmapId: { type: String, default: '' }
    },
    roadmap: [roadmapStepSchema]
  },
  {
    timestamps: true,
    collection: 'careers'
  }
);

export const Career = mongoose.models.Career || mongoose.model('Career', careerSchema);
export default Career;
