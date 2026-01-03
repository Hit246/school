import express from 'express';
import Admission from '../models/Admission.js';
import { protect } from '../middleware/auth.js';
import { sendAdmissionNotification } from '../utils/emailService.js';

const router = express.Router();

// @route   GET /api/admissions
// @desc    Get all admission submissions
// @access  Private (Admin only)
router.get('/', protect, async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/admissions
// @desc    Submit admission form
// @access  Public
router.post('/', async (req, res) => {
  try {
    // Save to database
    const admission = await Admission.create(req.body);
    
    // Send email notification (don't wait for it)
    sendAdmissionNotification(req.body).catch(err => 
      console.error('Email notification failed:', err)
    );
    
    res.status(201).json(admission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   PUT /api/admissions/:id
// @desc    Update admission status
// @access  Private (Admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' });
    }
    res.json(admission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   DELETE /api/admissions/:id
// @desc    Delete admission submission
// @access  Private (Admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id);
    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' });
    }
    res.json({ message: 'Admission deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
