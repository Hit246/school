import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const PrincipalDesk = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="principal-desk-page">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t('principal.title')}</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t('principal.subtitle')}
          </p>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Principal Image/Info */}
              <div className="md:col-span-1">
                <div className="card text-center sticky top-24">
                  <div className="w-48 h-48 bg-linear-to-br from-blue-500 to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-6xl font-bold">
                    MR
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {t('principal.principalName')}
                  </h3>
                  <p className="text-primary font-semibold mb-4">{t('principal.designation')}</p>
                  <p className="text-gray-600 text-sm">{t('principal.experience')}</p>
                </div>
              </div>

              {/* Message Content */}
              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <div className="card mb-6">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                      {t('principal.messageTitle')}
                    </h2>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {t('principal.message1')}
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {t('principal.message2')}
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {t('principal.message3')}
                    </p>

                    <div className="bg-linear-to-r from-blue-50 to-orange-50 p-6 rounded-lg border-l-4 border-primary mt-8">
                      <p className="text-lg italic text-gray-800">
                        "{t('principal.quote')}"
                      </p>
                    </div>
                  </div>

                  {/* Vision for Students */}
                  <div className="card bg-linear-to-br from-blue-500 to-secondary text-white">
                    <h3 className="text-2xl font-heading font-bold mb-4">
                      {t('principal.visionTitle')}
                    </h3>
                    <p className="text-lg leading-relaxed text-blue-50">
                      {t('principal.visionText')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-linear-to-r from-primary to-secondary text-gray-700">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">{t('principal.ctaTitle')}</h3>
          <p className="text-xl mb-8 text-orange-600">{t('principal.ctaSubtitle')}</p>
          <a href="/admissions" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">
            {t('principal.ctaButton')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrincipalDesk;
