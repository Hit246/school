import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const Gallery = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Events', 'Sports', 'Cultural', 'Infrastructure', 'Academics'];
  
  const images = [
    { id: 1, category: 'Events', title: 'Annual Day 2024', description: 'Grand celebration with cultural performances' },
    { id: 2, category: 'Sports', title: 'Sports Day', description: 'Athletic competitions and team spirit' },
    { id: 3, category: 'Cultural', title: 'Dance Performance', description: 'Traditional dance showcase' },
    { id: 4, category: 'Infrastructure', title: 'School Building', description: 'Modern campus architecture' },
    { id: 5, category: 'Academics', title: 'Science Lab', description: 'Students conducting experiments' },
    { id: 6, category: 'Events', title: 'Independence Day', description: 'Patriotic celebration' },
    { id: 7, category: 'Sports', title: 'Cricket Match', description: 'Inter-school tournament' },
    { id: 8, category: 'Cultural', title: 'Music Concert', description: 'Student musical performances' },
    { id: 9, category: 'Infrastructure', title: 'Library', description: 'Well-stocked reading space' },
    { id: 10, category: 'Academics', title: 'Classroom', description: 'Interactive learning session' },
    { id: 11, category: 'Events', title: 'Prize Distribution', description: 'Honoring achievements' },
    { id: 12, category: 'Sports', title: 'Basketball', description: 'Team practice session' }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-gray-200 to-gray-300 aspect-square"
              >
                {/* Placeholder with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {image.category === 'Events' && '🎉'}
                    {image.category === 'Sports' && '⚽'}
                    {image.category === 'Cultural' && '🎭'}
                    {image.category === 'Infrastructure' && '🏫'}
                    {image.category === 'Academics' && '📚'}
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold text-orange-400 mb-2">{image.category}</span>
                  <h3 className="text-white font-heading font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-blue-50">
        <div className="container-custom text-center">
          <p className="text-gray-700 max-w-2xl mx-auto">
            📸 <strong>Note:</strong> This is a demo gallery with placeholder images. 
            The admin panel allows you to upload and manage actual school photos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
