import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const Home = () => {
  const [counters, setCounters] = useState({ years: 0, students: 0, results: 0 });
  const { language } = useLanguage();
  const t = useTranslation(language);
  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { years: 25, students: 2500, results: 100 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        years: Math.floor(targets.years * progress),
        students: Math.floor(targets.students * progress),
        results: Math.floor(targets.results * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const facilities = [
    {
      icon: '📚',
      title: 'Modern Library',
      description: 'Well-stocked library with 10,000+ books and digital resources'
    },
    {
      icon: '🔬',
      title: 'Science Labs',
      description: 'State-of-the-art Physics, Chemistry, and Biology laboratories'
    },
    {
      icon: '💻',
      title: 'Computer Labs',
      description: 'Advanced computer labs with latest technology and software'
    },
    {
      icon: '⚽',
      title: 'Sports Facilities',
      description: 'Extensive sports grounds for cricket, football, and athletics'
    },
    {
      icon: '🚌',
      title: 'Transport',
      description: 'Safe and reliable transportation covering wide areas'
    },
    {
      icon: '🎨',
      title: 'Activity Rooms',
      description: 'Dedicated spaces for art, music, and cultural activities'
    }
  ];

  const testimonials = [
    {
      name: 'Mrs. Priya Patel',
      role: 'Parent',
      text: 'ABC Science Group has transformed my child\'s learning journey. The teachers are dedicated and the facilities are excellent.',
      rating: 5
    },
    {
      name: 'Rahul Sharma',
      role: 'Student - Class 12',
      text: 'The best decision I made was joining this school. The academic support and extracurricular activities are outstanding.',
      rating: 5
    },
    {
      name: 'Mr. Amit Desai',
      role: 'Parent',
      text: 'Highly recommend ABC Science Group. They truly nurture minds with divine values and focus on holistic development.',
      rating: 5
    }
  ];

  const toppers = [
    { name: 'Ananya Patel', percentage: '98.6%', stream: 'Science', year: '2024' },
    { name: 'Rohan Mehta', percentage: '97.4%', stream: 'Science', year: '2024' },
    { name: 'Priya Shah', percentage: '96.8%', stream: 'Science', year: '2024' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              {t('home.heroTitle')} <span className="text-gradient bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">{t('home.heroDivine')}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/admissions" className="btn-primary bg-orange-500 hover:bg-orange-600 text-lg">
                {t('home.admissionsOpen')}
              </Link>
              <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-blue-900 text-lg">
                {t('home.learnMoreAbout')}
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{counters.years}+</div>
              <div className="text-xl font-semibold text-gray-700">Years of Excellence</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">{counters.students}+</div>
              <div className="text-xl font-semibold text-gray-700">Happy Students</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-green-600 mb-2">{counters.results}%</div>
              <div className="text-xl font-semibold text-gray-700">Board Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">{t('home.whyChoose')}</h2>
            <p className="section-subtitle">
              We are committed to providing world-class education that nurtures academic excellence, character development, and lifelong learning
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="card text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-heading font-semibold mb-3">{t('home.academicExcellence')}</h3>
                <p className="text-gray-600">{t('home.academicExcDesc')}</p>
              </div>
              <div className="card text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-xl font-heading font-semibold mb-3">{t('home.holisticDev')}</h3>
                <p className="text-gray-600">{t('home.holisticDevDesc')}</p>
              </div>
              <div className="card text-center">
                <div className="text-5xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-heading font-semibold mb-3">{t('home.expertFaculty')}</h3>
                <p className="text-gray-600">{t('home.expertFacultyDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toppers Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('home.starPerformers')}</h2>
            <p className="section-subtitle">{t('home.celebratingExcellence')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <div key={index} className="card text-center bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-200">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {topper.percentage}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{topper.name}</h3>
                <p className="text-gray-600 mb-1">{topper.stream} Stream</p>
                <p className="text-sm text-gray-500">Board Exams {topper.year}</p>
                <div className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🏆 Top Rank
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/results" className="btn-primary">
              View All Results & Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('home.worldClassFacilities')}</h2>
            <p className="section-subtitle">{t('home.modernInfra')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card hover:border-primary border-2 border-transparent transition-all">
                <div className="text-6xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/facilities" className="btn-secondary">
              Explore All Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('home.whatParentsSay')}</h2>
            <p className="section-subtitle">{t('home.hearFromCommunity')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-gradient-to-br from-gray-50 to-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            🎓 {t('home.admissionsOpenYear')}
          </h2>
          <p className="text-xl mb-8 text-gray-900">
            {t('home.joinFamily')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
              {t('home.applyNow')}
            </Link>
            <Link to="/contact" className="border-2 border-white text-gray-800 hover:bg-white hover:text-primary font-semibold py-4 px-10 rounded-lg transition-all duration-300 text-lg">
              {t('home.scheduleVisit')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
