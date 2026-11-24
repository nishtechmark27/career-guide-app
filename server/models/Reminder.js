import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      default: 'General'
    },
    dueDate: {
      type: Date,
      required: true
    },
    notes: {
      type: String,
      default: ''
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    collection: 'reminders'
  }
);

export const Reminder = mongoose.models.Reminder || mongoose.model('Reminder', reminderSchema);
export default Reminder;
