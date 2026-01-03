import express from 'express';
import Gallery from '../models/Gallery.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get all visible gallery images (public)
router.get('/', async (req, res) => {
  try {
    const images = await Gallery.find({ isVisible: true })
      .sort({ uploadedAt: -1 })
      .select('-__v');
    res.json(images);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({ message: 'Error fetching gallery images' });
  }
});

// Get all gallery images (admin only)
router.get('/admin', protect, async (req, res) => {
  try {
    const images = await Gallery.find()
      .sort({ uploadedAt: -1 })
      .select('-__v');
    res.json(images);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({ message: 'Error fetching gallery images' });
  }
});

// Upload new image (admin only)
router.post('/', protect, async (req, res) => {
  try {
    const { title, description, category, imageData, imageType, isVisible } = req.body;

    // Validate required fields
    if (!title || !description || !category || !imageData || !imageType) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check image size (1MB = 1,048,576 bytes in base64)
    // Base64 is ~33% larger than original, so 1MB file ≈ 1.33MB base64
    const base64Size = imageData.length * 0.75; // Approximate original size
    const maxSize = 1 * 1024 * 1024; // 1MB in bytes
    
    if (base64Size > maxSize) {
      return res.status(400).json({ message: 'Image size must be less than 1MB' });
    }

    const newImage = new Gallery({
      title,
      description,
      category,
      imageData,
      imageType,
      isVisible: isVisible !== undefined ? isVisible : true
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Error uploading image' });
  }
});

// Update image (admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedImage = await Gallery.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }

    res.json(updatedImage);
  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).json({ message: 'Error updating image' });
  }
});

// Delete image (admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedImage = await Gallery.findByIdAndDelete(id);

    if (!deletedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'Error deleting image' });
  }
});

export default router;
