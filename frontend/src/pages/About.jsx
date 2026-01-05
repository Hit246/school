import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const About = () => {

  const { language } = useLanguage();
  const t = useTranslation(language);

  const values = [
    { icon: '🎓', title: t('about.excellence'), description: t('about.excellenceDesc') },
    { icon: '🤝', title: t('about.integrity'), description: t('about.integrityDesc') },
    { icon: '💡', title: t('about.innovation'), description: t('about.innovationDesc') },
    { icon: '🌱', title: t('about.growth'), description: t('about.growthDesc') },
    { icon: '❤️', title: t('about.compassion'), description: t('about.compassionDesc') },
    { icon: '🌍', title: t('about.diversity'), description: t('about.diversityDesc') }
  ];

  const leadership = [
    { name: 'Mr. Mahendrasingh Ramlavat', role: 'Principal', qualification: 'Ph.D. in Education' },
    { name: 'Mr. Jyantibhai', role: 'Vice Principal', qualification: 'M.Ed., 20+ years experience' },
    { name: 'Mr. Mehul Patel', role: 'Academic Coordinator', qualification: 'M.Sc., B.Ed.' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-secondary to-blue-600 text-white py-20">
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
                {t('about.storyPara1')}
              </p>
              <p className="text-lg mb-6">
                {t('about.storyPara2')}
              </p>
              <p className="text-lg">
                {t('about.storyPara3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-linear-to-br from-orange-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card bg-linear-to-br from-orange-500 to-orange-600 text-white p-8">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-3xl font-heading font-bold mb-4">{t('about.ourVision')}</h3>
              <p className="text-lg leading-relaxed text-orange-50">
                {t('about.visionText')}
              </p>
            </div>
            <div className="card bg-linear-to-br from-blue-500 to-blue-600 text-white p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-heading font-bold mb-4">{t('about.ourMission')}</h3>
              <p className="text-lg leading-relaxed text-blue-50">
                {t('about.missionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('about.coreValues')}</h2>
          <p className="section-subtitle text-center">{t('about.valuesSubtitle')}</p>
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
      <section id="leadership" className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('about.leadership')}</h2>
          <p className="section-subtitle text-center">{t('about.leadershipSubtitle')}</p>
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
          <p className="section-subtitle text-center">{t('about.infrastructureSubtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">🏫 {t('about.campus')}</h3>
              <p className="text-gray-700">{t('about.campusDesc')}</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">🔬 {t('about.laboratories')}</h3>
              <p className="text-gray-700">{t('about.laboratoriesDesc')}</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">📚 {t('about.library')}</h3>
              <p className="text-gray-700">{t('about.libraryDesc')}</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-heading font-semibold mb-3 text-primary">⚽ {t('about.sportsComplex')}</h3>
              <p className="text-gray-700">{t('about.sportsComplexDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
