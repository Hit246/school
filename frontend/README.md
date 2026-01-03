# ABC Science Group Website

A modern, responsive school website built with React, Vite, and Tailwind CSS.

## 🎓 Features

### Public Pages

- **Homepage**: Hero section, stats, achievements, facilities, testimonials
- **About Us**: School story, vision/mission, core values, leadership team
- **Academics**: Grade-wise curriculum, board affiliations, teaching methodology
- **Facilities**: Detailed facility showcase with modern infrastructure
- **Gallery**: Filterable image gallery with categories
- **Events**: Upcoming and past events management
- **Admissions**: Complete admission process, fee structure, online application form
- **Contact**: Contact form, location map, working hours
- **Results**: Board results, toppers showcase, achievements timeline

### Admin Dashboard

- **Secure Login**: Demo credentials (username: `admin`, password: `admin123`)
- **Events Management**: Add, edit, delete events
- **Gallery Management**: Image upload interface (requires backend integration)
- **News Management**: Create and manage announcements
- **Submissions Viewer**: View contact and admission form submissions

### Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth animations and transitions
- ✅ WhatsApp chat integration
- ✅ Google Maps integration
- ✅ Form validation
- ✅ localStorage for data persistence (demo)
- ✅ SEO optimized

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory**

   ```bash
   cd school
   ```

2. **Install dependencies** (already done)

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open browser**
   - Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
school/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── common/      # Common components (WhatsAppButton)
│   │   └── layout/      # Layout components (Header, Footer)
│   ├── pages/           # Page components
│   │   ├── admin/       # Admin dashboard pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Facilities.jsx
│   │   ├── Gallery.jsx
│   │   ├── Events.jsx
│   │   ├── Admissions.jsx
│   │   ├── Contact.jsx
│   │   └── Results.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Design System

### Colors

- **Primary**: Orange (#FF6B35) - Main brand color
- **Secondary**: Blue (#4A90E2) - Accent color
- **Accent Gold**: (#FFD700) - Highlights

### Typography

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Components

- Custom button styles (`.btn-primary`, `.btn-secondary`, `.btn-outline`)
- Card component (`.card`)
- Section titles and subtitles
- Container utilities

## 🔐 Admin Access

### Login Credentials

- **URL**: `/admin`
- **Username**: `admin`
- **Password**: `admin123`

### Admin Features

1. **Dashboard**: Overview of all content
2. **Events**: Full CRUD operations
3. **News**: Create and manage announcements
4. **Submissions**: View contact and admission forms
5. **Gallery**: Placeholder for image management

## 📝 Customization Guide

### Update School Information

1. **Contact Details** (in `src/components/layout/Header.jsx` and `Footer.jsx`):

   - Phone numbers
   - Email addresses
   - Address

2. **Google Maps** (in `src/components/layout/Footer.jsx` and `src/pages/Contact.jsx`):

   - Replace the iframe `src` with your school's location

3. **Social Media Links** (in `src/components/layout/Header.jsx` and `Footer.jsx`):

   - Update Facebook, Instagram, LinkedIn URLs

4. **WhatsApp Number** (in `src/components/common/WhatsAppButton.jsx`):

   - Update phone number (currently `919876543210`)

5. **School Logo**:
   - Replace the placeholder logo in Header component
   - Add actual logo image to `public` folder

### Add Real Content

1. **Replace Placeholder Images**:

   - Add school photos to `public/images/`
   - Update image paths in components

2. **Update Text Content**:
   - School history in About page
   - Fee structure in Admissions page
   - Academic calendar in Academics page

## 🔧 Backend Integration

This is a **frontend-only demo** using localStorage. For production:

1. **Contact Form**:

   - Integrate with EmailJS, Formspree, or custom backend
   - Add email notifications

2. **Admin Dashboard**:

   - Connect to REST API or GraphQL
   - Implement proper authentication (JWT, OAuth)
   - Use database (MySQL, MongoDB, PostgreSQL)

3. **Gallery**:

   - Implement file upload to cloud storage (AWS S3, Cloudinary)
   - Store image metadata in database

4. **Events & News**:
   - Replace localStorage with database
   - Add rich text editor for content

## 🌐 Deployment

### Netlify / Vercel

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Traditional Hosting

1. Run `npm run build`
2. Upload `dist` folder contents to your web server

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Support

For any questions or issues:

- Email: info@abcsciencegroup.com
- Phone: +91 98765 43210

## 📄 License

This project is created for ABC Science Group, Idar.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
