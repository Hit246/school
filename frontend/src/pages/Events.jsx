import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import { eventsAPI } from '../services/api';

const Events = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await eventsAPI.getAll();
      setEvents(data);
    } catch (error) {
      console.error('Error loading events:', error);
      // If API fails, show empty state
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const upcomingEvents = events.filter(e => e.category === 'upcoming');
  const pastEvents = events.filter(e => e.category === 'past');

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t('events.title')}</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('events.upcomingEvents')}</h2>
          <p className="section-subtitle text-center">Mark your calendars for these exciting events</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <div key={event.id} className="card border-l-4 border-primary hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-white rounded-lg p-3 text-center min-w-[70px]">
                      <div className="text-2xl font-bold">{new Date(event.date).getDate()}</div>
                      <div className="text-xs uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {event.time}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                  <div className="mt-4 pt-4 border-t">
                    <span className="text-sm font-semibold text-primary">📅 {formatDate(event.date)}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No upcoming events at the moment</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">{t('events.pastEvents')}</h2>
          <p className="section-subtitle text-center">Memorable moments from our recent activities</p>
          
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <div key={event.id} className="card flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all">
                  <div className="bg-gray-200 rounded-lg p-4 text-center min-w-[100px] flex flex-col justify-center">
                    <div className="text-3xl font-bold text-gray-700">{new Date(event.date).getDate()}</div>
                    <div className="text-sm text-gray-600">{new Date(event.date).toLocaleString('default', { month: 'short', year: 'numeric' })}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {event.time}
                      </span>
                      <span className="text-green-600 font-semibold">✓ Completed</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No past events to display</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
