import express from 'express';
import Contact from '../models/Contact.js';
import { protect } from '../middleware/auth.js';
import { sendContactNotification } from '../utils/emailService.js';

const router = express.Router();

// @route   GET /api/contacts
// @desc    Get all contact submissions
// @access  Private (Admin only)
router.get('/', protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/contacts
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    // Save to database
    const contact = await Contact.create(req.body);
    
    // Send email notification (don't wait for it)
    sendContactNotification(req.body).catch(err => 
      console.error('Email notification failed:', err)
    );
    
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   PUT /api/contacts/:id
// @desc    Update contact status
// @access  Private (Admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(400).json({ message: error.message });
  }
});

// @route   DELETE /api/contacts/:id
// @desc    Delete contact submission
// @access  Private (Admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
