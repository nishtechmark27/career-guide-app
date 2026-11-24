import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    notificationId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null // null means global notification for all students
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    subtitle: {
      type: String,
      required: true,
      trim: true
    },
    badge: {
      type: String,
      default: 'Alert'
    },
    badgeType: {
      type: String,
      enum: ['default', 'warning', 'high', 'info'],
      default: 'default'
    },
    read: {
      type: Boolean,
      default: false
    },
    actionType: {
      type: String,
      required: true,
      default: 'general'
    },
    targetId: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    collection: 'notifications'
  }
);

export const Notification = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);
export default Notification;
