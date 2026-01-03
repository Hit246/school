import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { eventsAPI } from '../../services/api';

const ManageEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({
    _id: null,
    title: '',
    date: '',
    time: '',
    category: 'upcoming',
    description: ''
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
      return;
    }
    loadEvents();
  }, [navigate]);

  const loadEvents = async () => {
    try {
      const data = await eventsAPI.getAll();
      setEvents(data);
    } catch (error) {
      console.error('Error loading events:', error);
      alert('Error loading events');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isEditing) {
        await eventsAPI.update(currentEvent._id, currentEvent);
        alert('Event updated successfully!');
      } else {
        await eventsAPI.create(currentEvent);
        alert('Event added successfully!');
      }
      loadEvents();
      resetForm();
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Error saving event');
    }
  };

  const handleEdit = (event) => {
    setCurrentEvent(event);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        await eventsAPI.delete(id);
        alert('Event deleted successfully!');
        loadEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
        alert('Error deleting event');
      }
    }
  };

  const resetForm = () => {
    setCurrentEvent({ _id: null, title: '', date: '', time: '', category: 'upcoming', description: '' });
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-heading font-bold">Manage Events</h1>
            <Link to="/admin/dashboard" className="text-primary hover:underline">← Back to Dashboard</Link>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-heading font-bold mb-6">
                {isEditing ? 'Edit Event' : 'Add New Event'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Event Title *</label>
                  <input
                    type="text"
                    value={currentEvent.title}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, title: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Date *</label>
                  <input
                    type="date"
                    value={currentEvent.date ? currentEvent.date.split('T')[0] : ''}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, date: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Time *</label>
                  <input
                    type="time"
                    value={currentEvent.time}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, time: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Category *</label>
                  <select
                    value={currentEvent.category}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, category: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="past">Past</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Description *</label>
                  <textarea
                    value={currentEvent.description}
                    onChange={(e) => setCurrentEvent({ ...currentEvent, description: e.target.value })}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 btn-primary">
                    {isEditing ? 'Update' : 'Add'} Event
                  </button>
                  {isEditing && (
                    <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-heading font-bold mb-6">All Events ({events.length})</h2>
              {events.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No events added yet</p>
              ) : (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event._id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-heading font-semibold text-lg">{event.title}</h3>
                          <p className="text-sm text-gray-600">
                            📅 {new Date(event.date).toLocaleDateString()} • 🕐 {event.time}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.category === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {event.category}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{event.description}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(event)}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(event._id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
