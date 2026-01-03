import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  visible: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const News = mongoose.model('News', newsSchema);

export default News;
