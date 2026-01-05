import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations/translations';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { 
      name: t('nav.about'), 
      path: '/about',
      subItems: [
        { name: t('nav.aboutSchool'), path: '/about' },
        { name: t('nav.visionMission'), path: '/about#vision' },
        { name: t('nav.principalDesk'), path: '/principal' },
        { name: t('nav.leadershipTeam'), path: '/about#leadership' }
      ]
    },
    { 
      name: t('nav.academics'), 
      path: '/academics',
      subItems: [
        { name: t('nav.curriculum'), path: '/academics#curriculum' },
        { name: t('nav.methodology'), path: '/academics#methodology' },
        { name: t('nav.activities'), path: '/activities' },
        { name: t('nav.academicCalendar'), path: '/academics#calendar' }
      ]
    },
    { name: t('nav.facilities'), path: '/facilities' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.results'), path: '/results' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.admissions'), path: '/admissions' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+919725072765" className="flex items-center gap-2 hover:text-gray-200 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 972 507 2765
            </a>
            <a href="mailto:abcscience2015@gmail.com" className="flex items-center gap-2 hover:text-gray-200 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              abcscience2015@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/ABCScienceGroup/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/abcsciencegroup/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@abcsciencegroupaadeshvidhy4750" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <nav className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="ABC Science Group Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-heading font-bold text-gray-900">ABC Science Group</h1>
                <p className="text-xs text-gray-600">Idar</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.subItems ? (
                    <div className="flex items-center gap-1 cursor-pointer font-medium text-gray-700 hover:text-primary transition-colors py-2">
                      <Link to={link.path}>{link.name}</Link>
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white rounded-lg shadow-xl border-t-4 border-primary py-2 overflow-hidden">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-gray-400 transition-all font-semibold text-sm"
                title="Toggle Language"
              >
                {language === 'en' ? 'ગુ' : 'EN'}
              </button>
              
              <Link to="/admin" className="btn-primary text-sm py-2 px-6">
                {t('nav.adminLogin')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-slide-down">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subItems ? (
                    <div className="border-b border-gray-100 last:border-0">
                      <div className="flex justify-between items-center py-3 px-4 text-gray-700 font-medium">
                        <Link 
                          to={link.path} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex-1"
                        >
                          {link.name}
                        </Link>
                      </div>
                      <div className="bg-gray-50 pl-8 pr-4 py-2 space-y-2">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-primary"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 text-center btn-primary"
              >
                Admin Login
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;