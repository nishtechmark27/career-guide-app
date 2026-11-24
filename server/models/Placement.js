import mongoose from 'mongoose';

const placementSchema = new mongoose.Schema(
  {
    placementId: {
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
      default: 'Private'
    },
    location: {
      type: String,
      required: true
    },
    salary: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'Full-Time Placement'
    },
    badge: {
      type: String,
      default: 'Fresher Friendly'
    },
    openings: {
      type: Number,
      default: 5
    },
    deadline: {
      type: Date,
      required: true
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
      required: [true, 'Official verified careers portal URL is required'],
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
    collection: 'placements'
  }
);

export const Placement = mongoose.models.Placement || mongoose.model('Placement', placementSchema);
export default Placement;
