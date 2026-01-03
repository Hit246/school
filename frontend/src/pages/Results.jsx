import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const Results = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const boardResults = [
    { year: '2024', class: '10th', passPercentage: 100, distinction: 45, firstClass: 55 },
    { year: '2024', class: '12th', passPercentage: 100, distinction: 40, firstClass: 60 },
    { year: '2023', class: '10th', passPercentage: 100, distinction: 42, firstClass: 58 },
    { year: '2023', class: '12th', passPercentage: 100, distinction: 38, firstClass: 62 }
  ];

  const toppers = [
    { name: 'Ananya Patel', class: '12th Science', percentage: 98.6, year: 2024, subjects: 'PCM' },
    { name: 'Priya Shah', class: '10th', percentage: 96.8, year: 2024, subjects: 'All Subjects' },
    { name: 'Arjun Desai', class: '12th Science', percentage: 96.2, year: 2024, subjects: 'PCB' },
    { name: 'Diya Sharma', class: '10th', percentage: 95.8, year: 2024, subjects: 'All Subjects' },
    { name: 'Ravi Kumar', class: '12th Science', percentage: 95.4, year: 2024, subjects: 'PCM' }
  ];

  const achievements = [
    { icon: '🏆', title: 'State Level Science Olympiad', achievement: '3 Gold Medals, 5 Silver Medals', year: 2024 },
    { icon: '⚽', title: 'Inter-School Sports Championship', achievement: 'Overall Champions', year: 2024 },
    { icon: '🎨', title: 'National Art Competition', achievement: '1st Prize in Painting', year: 2024 },
    { icon: '💻', title: 'Coding Competition', achievement: 'Winners at State Level', year: 2024 },
    { icon: '📚', title: 'Quiz Competition', achievement: 'Regional Champions', year: 2023 },
    { icon: '🎭', title: 'Cultural Fest', achievement: 'Best Performance Award', year: 2023 }
  ];

  return (
    <div className="results-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t('results.title')}</h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            {t('results.subtitle')}
          </p>
        </div>
      </section>

      {/* Board Results */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Board Examination Results</h2>
          <p className="section-subtitle text-center">Consistent 100% pass rate with exceptional performance</p>
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="card overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-primary text-white">
                    <th className="py-4 px-6 text-left rounded-tl-lg">Year</th>
                    <th className="py-4 px-6 text-left">Class</th>
                    <th className="py-4 px-6 text-center">Pass %</th>
                    <th className="py-4 px-6 text-center">Distinction %</th>
                    <th className="py-4 px-6 text-center rounded-tr-lg">First Class %</th>
                  </tr>
                </thead>
                <tbody>
                  {boardResults.map((result, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold">{result.year}</td>
                      <td className="py-4 px-6">{result.class}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                          {result.passPercentage}%
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                          {result.distinction}%
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                          {result.firstClass}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Toppers Showcase */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Our Star Performers 2024</h2>
          <p className="section-subtitle text-center">Honoring excellence and dedication</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {toppers.map((topper, index) => (
              <div key={index} className="card bg-white border-2 border-yellow-200 hover:border-yellow-400 transition-all text-center">
                <div className="relative">
                  {index < 3 && (
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      #{index + 1}
                    </div>
                  )}
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{topper.percentage}%</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{topper.name}</h3>
                <p className="text-primary font-semibold mb-1">{topper.class}</p>
                <p className="text-gray-600 text-sm mb-3">{topper.subjects}</p>
                <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                  🏆 Board Topper {topper.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Achievements */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Beyond Academics</h2>
          <p className="section-subtitle text-center">Excellence in sports, arts, and cultural activities</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="card hover:shadow-2xl transition-all">
                <div className="text-6xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">{achievement.title}</h3>
                <p className="text-primary font-semibold mb-2">{achievement.achievement}</p>
                <p className="text-sm text-gray-500">Year: {achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Journey of Excellence</h2>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2024
                </div>
                <div className="card flex-1">
                  <h3 className="font-heading font-semibold text-lg mb-2">100% Board Results</h3>
                  <p className="text-gray-600">Achieved 100% pass rate in both Class 10 and 12 with record number of distinctions</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2023
                </div>
                <div className="card flex-1">
                  <h3 className="font-heading font-semibold text-lg mb-2">State Level Recognition</h3>
                  <p className="text-gray-600">Recognized as one of the top schools in Gujarat for academic performance</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2022
                </div>
                <div className="card flex-1">
                  <h3 className="font-heading font-semibold text-lg mb-2">Infrastructure Upgrade</h3>
                  <p className="text-gray-600">Inaugurated new science labs and smart classrooms</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2020
                </div>
                <div className="card flex-1">
                  <h3 className="font-heading font-semibold text-lg mb-2">25 Years of Excellence</h3>
                  <p className="text-gray-600">Celebrated silver jubilee with grand alumni meet and cultural programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">Be Part of Our Success Story</h3>
          <p className="text-xl mb-8 text-orange-100">Join ABC Science Group and achieve your dreams</p>
          <a href="/admissions" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">
            Apply for Admissions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Results;
