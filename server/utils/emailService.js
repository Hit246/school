const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// Send contact form notification
const sendContactNotification = async (contactData) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to school email
    subject: `New Contact Form Submission - ${contactData.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone}</p>
      <p><strong>Subject:</strong> ${contactData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
      <hr>
      <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact notification:', error);
    return false;
  }
};

// Send admission form notification
const sendAdmissionNotification = async (admissionData) => {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to school email
    subject: `New Admission Application - ${admissionData.studentName}`,
    html: `
      <h2>New Admission Application</h2>
      <h3>Student Information</h3>
      <p><strong>Student Name:</strong> ${admissionData.studentName}</p>
      <p><strong>Date of Birth:</strong> ${admissionData.dob}</p>
      <p><strong>Gender:</strong> ${admissionData.gender}</p>
      <p><strong>Class Applying For:</strong> ${admissionData.grade}</p>
      
      <h3>Parent/Guardian Information</h3>
      <p><strong>Parent/Guardian Name:</strong> ${admissionData.parentName}</p>
      <p><strong>Email:</strong> ${admissionData.email}</p>
      <p><strong>Phone:</strong> ${admissionData.phone}</p>
      <p><strong>Address:</strong> ${admissionData.address}</p>
      
      <p><strong>Previous School:</strong> ${admissionData.previousSchool || 'Not specified'}</p>
      <hr>
      <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Admission notification email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending admission notification:', error);
    return false;
  }
};

module.exports = {
  sendContactNotification,
  sendAdmissionNotification
};
