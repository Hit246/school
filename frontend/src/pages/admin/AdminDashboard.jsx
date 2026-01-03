import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin');
  };

  const stats = [
    { title: 'Total Events', value: JSON.parse(localStorage.getItem('schoolEvents') || '[]').length, icon: '📅', color: 'bg-blue-500' },
    { title: 'Gallery Images', value: JSON.parse(localStorage.getItem('galleryImages') || '[]').length, icon: '🖼️', color: 'bg-green-500' },
    { title: 'News Items', value: JSON.parse(localStorage.getItem('newsItems') || '[]').length, icon: '📰', color: 'bg-purple-500' },
    { title: 'Contact Submissions', value: JSON.parse(localStorage.getItem('contactSubmissions') || '[]').length, icon: '✉️', color: 'bg-orange-500' }
  ];

  const quickLinks = [
    { title: 'Manage Events', path: '/admin/events', icon: '📅', description: 'Add, edit, or delete events' },
    { title: 'Manage Gallery', path: '/admin/gallery', icon: '🖼️', description: 'Upload and organize images' },
    { title: 'Manage News', path: '/admin/news', icon: '📰', description: 'Create and publish news' },
    { title: 'View Submissions', path: '/admin/submissions', icon: '✉️', description: 'Check contact form submissions' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-heading font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">ABC Science Group Management Panel</p>
            </div>
            <div className="flex gap-4">
              <Link to="/" className="text-gray-600 hover:text-primary transition">
                View Website
              </Link>
              <button onClick={handleLogout} className="btn-primary text-sm py-2 px-6">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container-custom py-8">
        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-primary to-secondary text-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-heading font-bold mb-2">Welcome, Admin!</h2>
          <p className="text-gray-700">Manage your school website content from this dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </div>
              <h3 className="text-gray-600 font-semibold">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-heading font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="flex items-start gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all group"
              >
                <div className="text-5xl group-hover:scale-110 transition-transform">{link.icon}</div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1 group-hover:text-primary transition">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Info Note */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-900 mb-2">📌 Important Note</h3>
          <p className="text-yellow-800 text-sm">
            This is a demo admin panel using localStorage for data persistence. 
            For production use, integrate with a backend API (PHP, Node.js, etc.) for secure data management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
