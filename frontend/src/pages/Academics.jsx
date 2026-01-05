import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const Academics = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [expandedGrade, setExpandedGrade] = useState(null);

  const grades = [
    { 
      level: 'Primary (1-5)', 
      focus: 'Foundation building with emphasis on reading, writing, mathematics, and environmental studies',
      subjects: ['English', 'Hindi', 'Gujarati', 'Mathematics', 'EVS', 'Computer Science', 'Art & Craft', 'Physical Education']
    },
    { 
      level: 'Middle School (6-8)', 
      focus: 'Comprehensive curriculum introducing sciences and social studies',
      subjects: ['English', 'Hindi', 'Gujarati', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art', 'Physical Education']
    },
    { 
      level: 'Secondary (9-10)', 
      focus: 'Board exam preparation with CBSE/GSEB curriculum',
      subjects: ['English', 'Hindi/Gujarati', 'Mathematics', 'Science', 'Social Science', 'Computer Applications', 'Physical Education']
    },
    { 
      level: 'Senior Secondary (11-12)', 
      focus: 'Specialized streams for career preparation',
      subjects: ['Science: PCM/PCB']
    }
  ];

  const methodology = [
    { icon: '👨‍🏫', title: 'Interactive Learning', description: 'Engaging classroom sessions with student participation' },
    { icon: '💻', title: 'Digital Education', description: 'Smart classrooms with multimedia learning tools' },
    { icon: '🔬', title: 'Practical Approach', description: 'Hands-on experiments and real-world applications' },
    { icon: '📝', title: 'Regular Assessment', description: 'Continuous evaluation and personalized feedback' },
    { icon: '📚', title: 'Library Resources', description: 'Extensive reading materials and research facilities' },
    { icon: '🎯', title: 'Competitive Prep', description: 'Coaching for entrance exams and olympiads' }
  ];

  return (
    <div className="academics-page">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-orange-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t('academics.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            {t('academics.subtitle')}
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('academics.curriculum')}</h2>
          <p className="section-subtitle text-center">{t('academics.curriculumSubtitle')}</p>
          
          <div className="max-w-4xl mx-auto mt-12 space-y-4">
            {grades.map((grade, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-all">
                <button
                  onClick={() => setExpandedGrade(expandedGrade === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-all"
                >
                  <div className="text-left">
                    <h3 className="text-xl font-heading font-semibold text-gray-900">{grade.level}</h3>
                    <p className="text-gray-600 text-sm mt-1">{grade.focus}</p>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-primary transition-transform ${expandedGrade === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedGrade === index && (
                  <div className="px-6 py-4 bg-white animate-slide-down">
                    <h4 className="font-semibold text-gray-900 mb-3">{t('academics.subjectsOffered')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {grade.subjects.map((subject, idx) => (
                        <span key={idx} className="bg-primary text-gray-800 px-4 py-2 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section id="methodology" className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('academics.teachingMethodology')}</h2>
          <p className="section-subtitle text-center">{t('academics.methodologySubtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {methodology.map((method, index) => (
              <div key={index} className="card text-center hover:shadow-2xl transition-all">
                <div className="text-6xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section id="calendar" className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('academics.academicCalendar')}</h2>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">📅 {t('academics.sessionStarts')}</h3>
                  <p className="text-gray-700">{t('academics.sessionStartsDate')}</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">🏖️ Summer Vacation</h3>
                  <p className="text-gray-700">May 15 - June 15, 2026</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">📝 {t('academics.midTermExams')}</h3>
                  <p className="text-gray-700">{t('academics.midTermExamsDate')}</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">🎄 {t('academics.winterBreak')}</h3>
                  <p className="text-gray-700">{t('academics.winterBreakDate')}</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">📚 {t('academics.finalExams')}</h3>
                  <p className="text-gray-700">{t('academics.finalExamsDate')}</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-heading font-semibold text-lg mb-2">🎓 {t('academics.sessionEnds')}</h3>
                  <p className="text-gray-700">{t('academics.sessionEndsDate')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
