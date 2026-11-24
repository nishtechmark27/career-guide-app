import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema(
  {
    internshipId: {
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
    company: {
      type: String,
      required: true,
      trim: true
    },
    sector: {
      type: String,
      enum: ['Government', 'Private', 'Academic / Research'],
      default: 'Private'
    },
    workType: {
      type: String,
      enum: ['Remote', 'On-site', 'Hybrid'],
      default: 'Remote'
    },
    location: {
      type: String,
      required: true
    },
    stipend: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    deadline: {
      type: Date,
      required: true
    },
    badge: {
      type: String,
      default: 'Verified'
    },
    badgeType: {
      type: String,
      default: 'default'
    },
    eligibility: {
      type: String,
      required: true
    },
    roleOverview: {
      type: String,
      required: true
    },
    requirements: {
      type: String,
      required: true
    },
    officialUrl: {
      type: String,
      required: [true, 'Official verified internship portal URL is required'],
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
    collection: 'internships'
  }
);

export const Internship = mongoose.models.Internship || mongoose.model('Internship', internshipSchema);
export default Internship;
