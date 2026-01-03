import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Events', 'Sports', 'Cultural', 'Infrastructure', 'Academics']
  },
  imageData: {
    type: String,
    required: true
  },
  imageType: {
    type: String,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;
