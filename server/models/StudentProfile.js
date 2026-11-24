import mongoose from 'mongoose';

const studentProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
      unique: true
    },
    educationLevel: {
      type: String,
      required: [true, 'Education level is required'],
      trim: true
    },
    college: {
      type: String,
      required: [true, 'College / Institution name is required'],
      trim: true
    },
    stream: {
      type: String,
      default: 'Computer Science'
    },
    gradeOrCgpa: {
      type: String,
      default: '8.5'
    },
    bio: {
      type: String,
      trim: true,
      default: 'Dedicated learner preparing for career excellence.'
    },
    targetCareer: {
      type: String,
      default: 'AI/ML Engineer'
    },
    skills: {
      type: [String],
      default: ['Python', 'Problem Solving', 'Data Analysis']
    },
    interests: {
      type: [String],
      default: ['Artificial Intelligence', 'Data Science', 'Web Development']
    },
    githubUrl: {
      type: String,
      trim: true,
      default: ''
    },
    linkedinUrl: {
      type: String,
      trim: true,
      default: ''
    },
    portfolioUrl: {
      type: String,
      trim: true,
      default: ''
    }
  },
  {
    timestamps: true,
    collection: 'student_profiles'
  }
);

export const StudentProfile = mongoose.models.StudentProfile || mongoose.model('StudentProfile', studentProfileSchema);
export default StudentProfile;
