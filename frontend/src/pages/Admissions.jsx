import { useState } from 'react';
import { admissionAPI } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';

const Admissions = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await admissionAPI.submit(formData);
      alert('Application submitted successfully! We will contact you soon.');
      setFormData({
        studentName: '',
        dob: '',
        gender: '',
        grade: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        previousSchool: ''
      });
    } catch (error) {
      console.error('Error submitting admission form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const admissionSteps = [
    { step: 1, title: 'Inquiry', description: 'Visit school or fill online form' },
    { step: 2, title: 'Application', description: 'Submit completed application form' },
    { step: 3, title: 'Documents', description: 'Provide required documents' },
    { step: 4, title: 'Interaction', description: 'Student-parent interaction with principal' },
    { step: 5, title: 'Admission', description: 'Fee payment and enrollment' }
  ];

  const documents = [
    'Birth Certificate (Original + Photocopy)',
    'Transfer Certificate from previous school',
    'Mark sheets of previous class',
    'Aadhar Card (Student & Parents)',
    'Passport size photographs (4 copies)',
    'Caste Certificate (if applicable)',
    'Income Certificate (for fee concession)'
  ];

  return (
    <div className="admissions-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t('admissions.title')}</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
            {t('admissions.subtitle')}
          </p>
          <div className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-2xl animate-pulse">
            {t('admissions.admissionsOpenNow')}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('admissions.admissionProcess')}</h2>
          <p className="section-subtitle text-center">Simple and transparent admission procedure</p>
          
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {admissionSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="card text-center p-6 h-full">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 text-primary text-2xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Eligibility Criteria</h2>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="card">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-heading">Class</th>
                    <th className="text-left py-3 px-4 font-heading">Age Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Nursery</td>
                    <td className="py-3 px-4">3+ years as on 31st March</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Class 1</td>
                    <td className="py-3 px-4">6+ years as on 31st March</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Class 2-10</td>
                    <td className="py-3 px-4">As per previous class completion</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Class 11</td>
                    <td className="py-3 px-4">Passed Class 10 with required percentage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Fee Structure 2026-27</h2>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="card">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-3 px-4 rounded-tl-lg">Class</th>
                    <th className="text-right py-3 px-4">Admission Fee</th>
                    <th className="text-right py-3 px-4">Annual Fee</th>
                    <th className="text-right py-3 px-4 rounded-tr-lg">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Nursery - Class 5</td>
                    <td className="py-3 px-4 text-right">₹5,000</td>
                    <td className="py-3 px-4 text-right">₹25,000</td>
                    <td className="py-3 px-4 text-right font-semibold">₹30,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Class 6 - 8</td>
                    <td className="py-3 px-4 text-right">₹5,000</td>
                    <td className="py-3 px-4 text-right">₹30,000</td>
                    <td className="py-3 px-4 text-right font-semibold">₹35,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Class 9 - 10</td>
                    <td className="py-3 px-4 text-right">₹5,000</td>
                    <td className="py-3 px-4 text-right">₹35,000</td>
                    <td className="py-3 px-4 text-right font-semibold">₹40,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Class 11 - 12</td>
                    <td className="py-3 px-4 text-right">₹5,000</td>
                    <td className="py-3 px-4 text-right">₹40,000</td>
                    <td className="py-3 px-4 text-right font-semibold">₹45,000</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Fee includes tuition, library, sports, and activities. 
                  Transport and uniform charges are additional. Scholarships available for meritorious students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Required Documents</h2>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="card">
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('admissions.onlineAdmissionForm')}</h2>
          <p className="section-subtitle text-center">Fill out the form below to start your admission process</p>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-12">
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('admissions.studentName')} *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('admissions.dob')} *</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('admissions.gender')} *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">{t('admissions.selectGender')}</option>
                    <option value="Male">{t('admissions.male')}</option>
                    <option value="Female">{t('admissions.female')}</option>
                    <option value="Other">{t('admissions.other')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('admissions.classApplyingFor')} *</label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">{t('admissions.selectClass')}</option>
                    <option value="Nursery">Nursery</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('admissions.parentGuardianName')} *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('common.email')} *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('common.phone')} *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('admissions.previousSchool')}</label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('common.address')} *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button type="submit" className="btn-primary text-lg px-12">
                  {t('admissions.submitApplication')}
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-12 bg-primary text-gray-800">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">Need Help with Admissions?</h3>
          <p className="mb-6">Contact our admission office for any queries</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              📞 Call: +91 98765 43210
            </a>
            <a href="mailto:admissions@abcsciencegroup.com" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              ✉️ Email: admissions@abcsciencegroup.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
