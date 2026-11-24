import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    applicationId: {
      type: String,
      required: true,
      unique: true,
      default: () => `app_${Date.now()}_${Math.floor(Math.random() * 1000)}`
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    targetId: {
      type: String,
      required: true
    },
    targetTitle: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ['course', 'scholarship', 'internship', 'job'],
      required: true
    },
    entityName: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Applied', 'In Review', 'Interview / Shortlisted', 'Accepted', 'Completed', 'Rejected'],
      default: 'Applied'
    },
    appliedDate: {
      type: Date,
      default: Date.now
    },
    notes: {
      type: String,
      default: ''
    },
    officialPortalUrl: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    collection: 'applications'
  }
);

export const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);
export default Application;
