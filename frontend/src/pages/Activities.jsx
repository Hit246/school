import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const Activities = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const activities = [
    {
      icon: '🏏',
      title: t('activities.cricket'),
      description: t('activities.cricketDesc')
    },
    {
      icon: '🧘',
      title: t('activities.yoga'),
      description: t('activities.yogaDesc')
    },
    {
      icon: '🌳',
      title: t('activities.outdoor'),
      description: t('activities.outdoorDesc')
    },
    {
      icon: '🎨',
      title: t('activities.art'),
      description: t('activities.artDesc')
    },
    {
      icon: '🚌',
      title: t('activities.fieldTrip'),
      description: t('activities.fieldTripDesc')
    },
    {
      icon: '⛸️',
      title: t('activities.skating'),
      description: t('activities.skatingDesc')
    },
    {
      icon: '🏃',
      title: t('activities.athletics'),
      description: t('activities.athleticsDesc')
    },
    {
      icon: '🎭',
      title: t('activities.cultural'),
      description: t('activities.culturalDesc')
    }
  ];

  return (
    <div className="activities-page">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t('activities.title')}</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            {t('activities.subtitle')}
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">{t('activities.programsTitle')}</h2>
            <p className="section-subtitle">{t('activities.programsSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="card hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">{t('activities.benefitsTitle')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
                  ✓
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{t('activities.benefit1')}</h4>
                  <p className="text-gray-600">{t('activities.benefit1Desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                  ✓
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{t('activities.benefit2')}</h4>
                  <p className="text-gray-600">{t('activities.benefit2Desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl">
                  ✓
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{t('activities.benefit3')}</h4>
                  <p className="text-gray-600">{t('activities.benefit3Desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl">
                  ✓
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{t('activities.benefit4')}</h4>
                  <p className="text-gray-600">{t('activities.benefit4Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-green-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">{t('activities.ctaTitle')}</h3>
          <p className="text-xl mb-8 text-green-100">{t('activities.ctaSubtitle')}</p>
          <a href="/admissions" className="btn-outline border-white text-white hover:bg-white hover:text-green-600 text-lg">
            {t('activities.ctaButton')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Activities;
