import express from 'express';
import News from '../models/News.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/news
// @desc    Get all visible news
// @access  Public
router.get('/', async (req, res) => {
  try {
    const news = await News.find({ visible: true }).sort({ date: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/news/all
// @desc    Get all news (including hidden)
// @access  Private (Admin only)
router.get('/all', protect, async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/news
// @desc    Create new news item
// @access  Private (Admin only)
router.post('/', protect, async (req, res) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   PUT /api/news/:id
// @desc    Update news item
// @access  Private (Admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   DELETE /api/news/:id
// @desc    Delete news item
// @access  Private (Admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
