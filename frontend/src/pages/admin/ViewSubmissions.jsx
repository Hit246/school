import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { contactAPI, admissionAPI } from '../../services/api';

const ViewSubmissions = () => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [filter, setFilter] = useState('all'); // all, unread, read
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
      return;
    }
    loadSubmissions();
  }, [navigate]);

  const loadSubmissions = async () => {
    try {
      const [contacts, admissions] = await Promise.all([
        contactAPI.getAll(),
        admissionAPI.getAll()
      ]);
      
      const all = [
        ...contacts.map(s => ({ ...s, type: 'Contact', id: s._id })),
        ...admissions.map(s => ({ ...s, type: 'Admission', id: s._id }))
      ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
      setSubmissions(all);
    } catch (error) {
      console.error('Error loading submissions:', error);
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id, type) => {
    try {
      if (type === 'Contact') {
        await contactAPI.update(id, { status: 'read' });
      } else {
        await admissionAPI.update(id, { status: 'read' });
      }
      loadSubmissions();
    } catch (error) {
      console.error('Error marking as read:', error);
      alert('Error updating submission');
    }
  };

  const deleteSubmission = async (id, type) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      try {
        if (type === 'Contact') {
          await contactAPI.delete(id);
        } else {
          await admissionAPI.delete(id);
        }
        loadSubmissions();
      } catch (error) {
        console.error('Error deleting submission:', error);
        alert('Error deleting submission');
      }
    }
  };

  const filteredSubmissions = submissions.filter(s => {
    if (filter === 'all') return true;
    if (filter === 'unread') return s.status === 'unread';
    if (filter === 'read') return s.status === 'read';
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading submissions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-heading font-bold">Form Submissions</h1>
            <Link to="/admin/dashboard" className="text-primary hover:underline">← Back to Dashboard</Link>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Filter Tabs */}
          <div className="flex gap-4 mb-6 border-b">
            <button
              onClick={() => setFilter('all')}
              className={`pb-3 px-4 font-semibold transition ${
                filter === 'all' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'
              }`}
            >
              All ({submissions.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`pb-3 px-4 font-semibold transition ${
                filter === 'unread' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'
              }`}
            >
              Unread ({submissions.filter(s => s.status === 'unread').length})
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`pb-3 px-4 font-semibold transition ${
                filter === 'read' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'
              }`}
            >
              Read ({submissions.filter(s => s.status === 'read').length})
            </button>
          </div>

          {/* Submissions List */}
          {filteredSubmissions.length === 0 ? (
            <p className="text-gray-500 text-center py-12">No submissions found</p>
          ) : (
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className={`border-2 rounded-lg p-6 ${
                    submission.status === 'unread' ? 'border-primary bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          submission.type === 'Contact' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {submission.type}
                        </span>
                        {submission.status === 'unread' && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        📅 {new Date(submission.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {submission.status === 'unread' && (
                        <button
                          onClick={() => markAsRead(submission.id, submission.type)}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
                        >
                          Mark as Read
                        </button>
                      )}
                      <button
                        onClick={() => deleteSubmission(submission.id, submission.type)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg">
                    {submission.type === 'Contact' ? (
                      <>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Name</p>
                          <p className="text-gray-900">{submission.name}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Email</p>
                          <p className="text-gray-900">{submission.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Phone</p>
                          <p className="text-gray-900">{submission.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Subject</p>
                          <p className="text-gray-900">{submission.subject}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm font-semibold text-gray-600 mb-1">Message</p>
                          <p className="text-gray-900">{submission.message}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Student Name</p>
                          <p className="text-gray-900">{submission.studentName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Date of Birth</p>
                          <p className="text-gray-900">{submission.dob}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Gender</p>
                          <p className="text-gray-900">{submission.gender}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Class</p>
                          <p className="text-gray-900">{submission.grade}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Parent Name</p>
                          <p className="text-gray-900">{submission.parentName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Email</p>
                          <p className="text-gray-900">{submission.email}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Phone</p>
                          <p className="text-gray-900">{submission.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600">Previous School</p>
                          <p className="text-gray-900">{submission.previousSchool || 'N/A'}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm font-semibold text-gray-600 mb-1">Address</p>
                          <p className="text-gray-900">{submission.address}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewSubmissions;
