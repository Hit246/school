import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import { galleryAPI } from '../services/api';

const Gallery = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const categories = ['All', 'Events', 'Sports', 'Cultural', 'Infrastructure', 'Academics'];

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const data = await galleryAPI.getAll();
      setImages(data);
    } catch (error) {
      console.error('Error loading gallery:', error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading gallery...</div>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t('gallery.title')}</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-gray-500 shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                {images.length === 0 
                  ? 'No images in gallery yet. Check back soon!' 
                  : 'No images found in this category'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div 
                  key={image._id} 
                  className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={image.imageData} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Hover Overlay with Description */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-xs font-semibold text-primary bg-white px-3 py-1 rounded-full mb-2 inline-block w-fit">
                        {image.category}
                      </span>
                      <h3 className="text-white font-heading font-semibold text-lg mb-2">{image.title}</h3>
                      <p className="text-gray-200 text-sm">{image.description}</p>
                      <p className="text-white text-xs mt-2 opacity-75">Click to view full size</p>
                    </div>
                  </div>
                  
                  {/* Title and Category Below Image */}
                  <div className="p-4">
                    <span className="text-xs font-semibold text-primary bg-orange-50 px-3 py-1 rounded-full inline-block mb-2">
                      {image.category}
                    </span>
                    <h3 className="font-heading font-semibold text-gray-900">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition"
          >
            ×
          </button>
          <div 
            className="max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.imageData} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold text-primary bg-orange-50 px-4 py-2 rounded-full">
                  {selectedImage.category}
                </span>
              </div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
