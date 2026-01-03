import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const Facilities = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const facilities = [
    {
      title: 'Modern Classrooms',
      icon: '🏫',
      description: 'Spacious, well-ventilated classrooms with smart boards and modern furniture',
      features: ['Smart Boards', 'Air Conditioned', 'Ergonomic Furniture', 'Natural Lighting']
    },
    {
      title: 'Science Laboratories',
      icon: '🔬',
      description: 'State-of-the-art Physics, Chemistry, and Biology labs with latest equipment',
      features: ['Modern Equipment', 'Safety Measures', 'Practical Learning', 'Expert Supervision']
    },
    {
      title: 'Computer Labs',
      icon: '💻',
      description: 'Advanced computer labs with high-speed internet and latest software',
      features: ['Latest Computers', 'High-Speed Internet', 'Licensed Software', 'Coding Classes']
    },
    {
      title: 'Sports Complex',
      icon: '⚽',
      description: 'Multi-purpose sports grounds for cricket, football, and athletics',
      features: ['Cricket Ground', 'Football Field', 'Athletics Track']
    },
    {
      title: 'Transportation',
      icon: '🚌',
      description: 'Safe and reliable Van service covering wide areas',
      features: ['Trained Drivers', 'Wide Coverage', 'Safe & Secure']
    },
  ];

  return (
    <div className="facilities-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
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
