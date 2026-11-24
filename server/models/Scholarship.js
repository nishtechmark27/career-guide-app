import mongoose from 'mongoose';

const scholarshipSchema = new mongoose.Schema(
  {
    scholarshipId: {
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
    amount: {
      type: String,
      required: true
    },
    targetLevel: {
      type: String,
      required: true,
      default: 'Undergraduate'
    },
    category: {
      type: String,
      enum: ['Government', 'Private Trust', 'Private Philanthropy', 'International'],
      default: 'Government'
    },
    badge: {
      type: String,
      default: 'Open'
    },
    badgeType: {
      type: String,
      enum: ['default', 'warning', 'high'],
      default: 'default'
    },
    deadline: {
      type: Date,
      required: true
    },
    daysRemaining: {
      type: Number,
      default: 30
    },
    eligibility: {
      type: String,
      required: true
    },
    documents: {
      type: String,
      required: true
    },
    officialUrl: {
      type: String,
      required: [true, 'Official application URL is required'],
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
    collection: 'scholarships'
  }
);

export const Scholarship = mongoose.models.Scholarship || mongoose.model('Scholarship', scholarshipSchema);
export default Scholarship;
