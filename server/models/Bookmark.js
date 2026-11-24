import mongoose from 'mongoose';

const bookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    itemType: {
      type: String,
      enum: ['career', 'course', 'scholarship', 'internship', 'job'],
      required: true
    },
    itemId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    collection: 'bookmarks'
  }
);

bookmarkSchema.index({ user: 1, itemType: 1, itemId: 1 }, { unique: true });

export const Bookmark = mongoose.models.Bookmark || mongoose.model('Bookmark', bookmarkSchema);
export default Bookmark;
