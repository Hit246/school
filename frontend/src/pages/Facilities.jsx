import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const Facilities = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const facilities = [
    {
      title: t('facilities.scienceLabs'),
      icon: '🔬',
      description: t('about.laboratoriesDesc'),
      features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Modern Equipment']
    },
    {
      title: t('facilities.computerLab'),
      icon: '💻',
      description: t('about.laboratoriesDesc'),
      features: ['High-Speed Internet', 'Latest Software', 'Digital Learning', 'Coding Classes']
    },
    {
      title: t('facilities.library'),
      icon: '📚',
      description: t('about.libraryDesc'),
      features: ['10,000+ Books', 'Digital Resources', 'Reading Area', 'Periodicals']
    },
    {
      title: t('facilities.hugePlayGround'),
      icon: '🏟️',
      description: t('facilities.hugePlayGroundDesc'),
      features: ['Cricket', 'Football', 'Volleyball', 'Athletics']
    },
    {
      title: t('facilities.roWater'),
      icon: '💧',
      description: t('facilities.roWaterDesc'),
      features: ['Purified Water', 'Coolers', 'Regular Maintenance', 'Hygiene Checks']
    },
    {
      title: t('facilities.projectorEducation'),
      icon: '📽️',
      description: t('facilities.projectorEducationDesc'),
      features: ['Smart Boards', 'Audio-Visual Aids', 'Interactive Learning', 'Digital Content']
    },
    {
      title: t('facilities.extraCoaching'),
      icon: '👨‍🏫',
      description: t('facilities.extraCoachingDesc'),
      features: ['Remedial Classes', 'Doubt Solving', 'Personal Attention', 'Academic Support']
    },
    {
      title: t('facilities.motivationalLectures'),
      icon: '🎤',
      description: t('facilities.motivationalLecturesDesc'),
      features: ['Guest Speakers', 'Career Guidance', 'Personality Development', 'Success Stories']
    },
    {
      title: t('facilities.weeklyTests'),
      icon: '📝',
      description: t('facilities.weeklyTestsDesc'),
      features: ['Continuous Assessment', 'Progress Tracking', 'Parent Updates', 'Performance Analysis']
    },
    {
      title: t('facilities.smsResults'),
      icon: '📱',
      description: t('facilities.smsResultsDesc'),
      features: ['Instant Updates', 'Result Analysis', 'Attendance Alerts', 'Important Notices']
    },
    {
      title: t('facilities.noTuition'),
      icon: '✨',
      description: t('facilities.noTuitionDesc'),
      features: ['Comprehensive Teaching', 'Doubt Clearance', 'Concept Clarity', 'Exam Preparation']
    },
    {
      title: t('facilities.hostelFacility'),
      icon: '🏠',
      description: t('facilities.hostelFacilityDesc'),
      features: ['Secure Campus', 'Healthy Food', 'Study Hours', 'Recreation']
    }
  ];

  return (
    <div className="facilities-page">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t('facilities.title')}</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            {t('facilities.subtitle')}
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="card hover:border-primary border-2 border-transparent transition-all group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{facility.icon}</div>
                <h3 className="text-2xl font-heading font-semibold mb-3 text-gray-900">{facility.title}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">{t('facilities.keyFeatures')}:</h4>
                  <ul className="space-y-1">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-primary">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-20 bg-linear-to-br from-blue-50 to-green-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Infrastructure at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">Acres Campus</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-gray-600">Classrooms</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600">Laboratories</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Vans</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
