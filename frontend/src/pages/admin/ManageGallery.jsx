import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ManageGallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-heading font-bold">Manage Gallery</h1>
            <Link to="/admin/dashboard" className="text-primary hover:underline">← Back to Dashboard</Link>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🖼️</div>
            <h2 className="text-2xl font-heading font-bold mb-4">Gallery Management</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Image upload functionality requires backend integration. In a production environment, 
              you would integrate with a file upload service or backend API to handle image uploads, 
              storage, and management.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-blue-900 mb-3">Implementation Suggestions:</h3>
              <ul className="text-left text-blue-800 space-y-2 text-sm">
                <li>• Use FormData API for file uploads</li>
                <li>• Integrate with backend (PHP, Node.js, Python)</li>
                <li>• Store images in cloud storage (AWS S3, Cloudinary)</li>
                <li>• Save image metadata in database</li>
                <li>• Implement image compression and optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageGallery;
