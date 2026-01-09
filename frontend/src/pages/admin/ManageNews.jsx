import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { newsAPI } from '../../services/api';
import { useToast } from '../../hooks/useToast';
import Toast from '../../components/common/Toast';

const ManageNews = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNews, setCurrentNews] = useState({
    _id: null,
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    visible: true
  });
  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
      return;
    }
    loadNews();
  }, [navigate]);

  const loadNews = async () => {
    try {
      const data = await newsAPI.getAllAdmin();
      setNews(data);
    } catch (error) {
      console.error('Error loading news:', error);
      showToast('Error loading news', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (isEditing) {
        await newsAPI.update(currentNews._id, currentNews);
        showToast('News updated successfully!', 'success');
      } else {
        await newsAPI.create(currentNews);
        showToast('News added successfully!', 'success');
      }
      loadNews();
      resetForm();
    } catch (error) {
      console.error('Error saving news:', error);
      showToast('Error saving news', 'error');
    }
  };

  const handleEdit = (newsItem) => {
    setCurrentNews({
      ...newsItem,
      date: newsItem.date ? new Date(newsItem.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      try {
        await newsAPI.delete(id);
        showToast('News deleted successfully!', 'success');
        loadNews();
      } catch (error) {
        console.error('Error deleting news:', error);
        showToast('Error deleting news', 'error');
      }
    }
  };

  const toggleVisibility = async (newsItem) => {
    try {
      await newsAPI.update(newsItem._id, { ...newsItem, visible: !newsItem.visible });
      loadNews();
    } catch (error) {
      console.error('Error toggling visibility:', error);
      showToast('Error updating visibility', 'error');
    }
  };

  const resetForm = () => {
    setCurrentNews({ _id: null, title: '', content: '', date: new Date().toISOString().split('T')[0], visible: true });
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
            <h1 className="text-2xl font-heading font-bold">Manage News</h1>
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
                {isEditing ? 'Edit News' : 'Add News'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Title *</label>
                  <input
                    type="text"
                    value={currentNews.title}
                    onChange={(e) => setCurrentNews({ ...currentNews, title: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Content *</label>
                  <textarea
                    value={currentNews.content}
                    onChange={(e) => setCurrentNews({ ...currentNews, content: e.target.value })}
                    required
                    rows="6"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Date *</label>
                  <input
                    type="date"
                    value={currentNews.date}
                    onChange={(e) => setCurrentNews({ ...currentNews, date: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="visible"
                    checked={currentNews.visible}
                    onChange={(e) => setCurrentNews({ ...currentNews, visible: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="visible" className="text-sm font-semibold">Visible on website</label>
                </div>
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 btn-primary">
                    {isEditing ? 'Update' : 'Add'} News
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

          {/* News List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-heading font-bold mb-6">All News ({news.length})</h2>
              {news.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No news added yet</p>
              ) : (
                <div className="space-y-4">
                  {news.map((item) => (
                    <div key={item._id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                          <p className="text-sm text-gray-600">
                            📅 {new Date(item.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleVisibility(item)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              item.visible ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {item.visible ? '👁️ Visible' : '🚫 Hidden'}
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3 line-clamp-3">{item.content}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
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
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
          duration={toast.duration}
        />
      )}
    </div>
  );
};

export default ManageNews;
