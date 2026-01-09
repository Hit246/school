import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { galleryAPI } from '../../services/api';
import { useToast } from '../../hooks/useToast';
import Toast from '../../components/common/Toast';

const ManageGallery = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [currentImage, setCurrentImage] = useState({
    _id: null,
    title: '',
    description: '',
    category: 'Events',
    imageData: '',
    imageType: '',
    isVisible: true
  });
  const { toast, showToast, hideToast } = useToast();

  const categories = ['Events', 'Sports', 'Cultural', 'Infrastructure', 'Academics'];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
      return;
    }
    loadImages();
  }, [navigate]);

  const loadImages = async () => {
    try {
      const data = await galleryAPI.getAllAdmin();
      setImages(data);
    } catch (error) {
      console.error('Error loading images:', error);
      showToast('Error loading gallery images', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      showToast('Please select an image file', 'warning');
      return;
    }

    // Validate file size (1MB = 1048576 bytes)
    if (file.size > 1048576) {
      showToast('Image size must be less than 1MB', 'warning');
      return;
    }

    // Convert to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setCurrentImage({
        ...currentImage,
        imageData: base64String,
        imageType: file.type
      });
      setPreviewImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentImage.imageData && !isEditing) {
      showToast('Please select an image', 'warning');
      return;
    }

    setUploading(true);
    try {
      if (isEditing) {
        await galleryAPI.update(currentImage._id, currentImage);
        showToast('Image updated successfully!', 'success');
      } else {
        await galleryAPI.create(currentImage);
        showToast('Image uploaded successfully!', 'success');
      }
      loadImages();
      resetForm();
    } catch (error) {
      console.error('Error saving image:', error);
      showToast(error.response?.data?.message || 'Error saving image', 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (image) => {
    setCurrentImage(image);
    setPreviewImage(image.imageData);
    setIsEditing(true);
    setSelectedImage(image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await galleryAPI.delete(id);
        showToast('Image deleted successfully!', 'success');
        loadImages();
      } catch (error) {
        console.error('Error deleting image:', error);
        showToast('Error deleting image', 'error');
      }
    }
  };

  const toggleVisibility = async (image) => {
    try {
      await galleryAPI.update(image._id, { ...image, isVisible: !image.isVisible });
      loadImages();
    } catch (error) {
      console.error('Error toggling visibility:', error);
      showToast('Error updating visibility', 'error');
    }
  };

  const resetForm = () => {
    setCurrentImage({
      _id: null,
      title: '',
      description: '',
      category: 'Events',
      imageData: '',
      imageType: '',
      isVisible: true
    });
    setPreviewImage(null);
    setIsEditing(false);
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-heading font-bold">Manage Gallery</h1>
            <Link to="/admin/dashboard" className="text-primary hover:underline">← Back to Dashboard</Link>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-heading font-bold mb-6">
                {isEditing ? 'Edit Image' : 'Upload Image'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Image File * (Max 1MB)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    required={!isEditing}
                  />
                  {previewImage && (
                    <div className="mt-3">
                      <img 
                        src={previewImage} 
                        alt="Preview" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Title *</label>
                  <input
                    type="text"
                    value={currentImage.title}
                    onChange={(e) => setCurrentImage({ ...currentImage, title: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Description *</label>
                  <textarea
                    value={currentImage.description}
                    onChange={(e) => setCurrentImage({ ...currentImage, description: e.target.value })}
                    required
                    rows="3"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Category *</label>
                  <select
                    value={currentImage.category}
                    onChange={(e) => setCurrentImage({ ...currentImage, category: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="visible"
                    checked={currentImage.isVisible}
                    onChange={(e) => setCurrentImage({ ...currentImage, isVisible: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="visible" className="text-sm font-semibold">Visible on website</label>
                </div>
                <div className="flex gap-2">
                  <button 
                    type="submit" 
                    className="flex-1 btn-primary"
                    disabled={uploading}
                  >
                    {uploading ? 'Uploading...' : (isEditing ? 'Update' : 'Upload')} Image
                  </button>
                  {isEditing && (
                    <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Images Grid */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-heading font-bold mb-6">All Images ({images.length})</h2>
              {images.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No images uploaded yet</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {images.map((image) => (
                    <div key={image._id} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition">
                      <img 
                        src={image.imageData} 
                        alt={image.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="font-heading font-semibold text-lg">{image.title}</h3>
                            <p className="text-sm text-gray-600">{image.category}</p>
                          </div>
                          <button
                            onClick={() => toggleVisibility(image)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              image.isVisible ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {image.isVisible ? '👁️ Visible' : '🚫 Hidden'}
                          </button>
                        </div>
                        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{image.description}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(image)}
                            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(image._id)}
                            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
          duration={toast.duration}
        />
      )}
    </div>
  );
};

export default ManageGallery;
