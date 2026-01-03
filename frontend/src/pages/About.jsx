import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const About = () => {

  const { language } = useLanguage();
  const t = useTranslation(language);

  const values = [
    { icon: '🎓', title: 'Excellence', description: 'Striving for the highest standards in education' },
    { icon: '🤝', title: 'Integrity', description: 'Building character through honesty and ethics' },
    { icon: '💡', title: 'Innovation', description: 'Embracing modern teaching methodologies' },
    { icon: '🌱', title: 'Growth', description: 'Fostering continuous learning and development' },
    { icon: '❤️', title: 'Compassion', description: 'Nurturing empathy and social responsibility' },
    { icon: '🌍', title: 'Diversity', description: 'Celebrating inclusivity and cultural awareness' }
  ];

  const leadership = [
    { name: 'Mr. Mahendrasingh Ramlavat', role: 'Principal', qualification: 'Ph.D. in Education' },
    { name: 'Mr. Jyantibhai', role: 'Vice Principal', qualification: 'M.Ed., 20+ years experience' },
    { name: 'Mr. Mehul Patel', role: 'Academic Coordinator', qualification: 'M.Sc., B.Ed.' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-blue-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">{t('about.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">{t('about.ourStory')}</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                Founded in 1999, ABC Science Group, Idar has been at the forefront of educational excellence for over two decades. What started as a small institution with a vision to provide quality education has grown into one of the most respected schools in the region.
              </p>
              <p className="text-lg mb-6">
                Our journey has been marked by consistent academic achievements, with our students consistently securing top ranks in board examinations. We take pride in our 100% pass rate and the success stories of thousands of students who have gone on to excel in various fields.
              </p>
              <p className="text-lg">
                Today, ABC Science Group stands as a beacon of holistic education, combining academic rigor with character development, modern facilities with traditional values, and innovation with integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-3xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-orange-50">
                To be a leading educational institution that nurtures young minds into responsible global citizens, equipped with knowledge, skills, and values to excel in an ever-changing world while staying rooted in our cultural heritage.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-blue-50">
                To provide world-class education that fosters academic excellence, critical thinking, creativity, and character development. We are committed to creating a nurturing environment where every student can discover their potential and achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('about.coreValues')}</h2>
          <p className="section-subtitle text-center">The principles that guide everything we do</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="card text-center hover:shadow-2xl transition-all">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-heading font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('about.leadership')}</h2>
          <p className="section-subtitle text-center">Experienced educators dedicated to student success</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-primary font-semibold mb-2">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('about.infrastructure')}</h2>
          <p className="section-subtitle text-center">Modern facilities for comprehensive learning</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">🏫 Campus</h3>
              <p className="text-gray-700">Sprawling 5-acre campus with green spaces, modern buildings, and state-of-the-art facilities designed for optimal learning.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">🔬 Laboratories</h3>
              <p className="text-gray-700">Fully equipped Physics, Chemistry, Biology, and Computer labs with latest equipment and technology.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">📚 Library</h3>
              <p className="text-gray-700">Extensive collection of 10,000+ books, journals, and digital resources with comfortable reading spaces.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">⚽ Sports Complex</h3>
              <p className="text-gray-700">Multi-purpose sports grounds, indoor games facilities, and dedicated areas for various athletic activities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
