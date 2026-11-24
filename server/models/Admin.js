import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true
    },
    adminCode: {
      type: String,
      required: true,
      unique: true,
      default: 'ADM-2026-ROOT'
    },
    department: {
      type: String,
      default: 'System Administration'
    },
    permissions: {
      type: [String],
      default: ['manage_users', 'manage_careers', 'manage_courses', 'manage_scholarships', 'manage_opportunities', 'view_analytics']
    },
    lastLogin: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
    collection: 'admins'
  }
);

export const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
export default Admin;
