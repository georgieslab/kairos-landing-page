// functions/index.js
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred service
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.password
  }
});

// HTML template for user confirmation email
const getUserEmailTemplate = (data) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>NDA Confirmation - Καιρός Smart Journal</title>
    <style>
      body { 
        font-family: 'Helvetica', Arial, sans-serif; 
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
      }
      .header { 
        background: linear-gradient(135deg, #0D7B3E 0%, #10B068 100%);
        padding: 20px;
        color: white;
        text-align: center;
        border-radius: 5px 5px 0 0;
      }
      .content { 
        padding: 20px;
        background: #f9f9f9;
        border: 1px solid #ddd;
      }
      .footer { 
        text-align: center;
        padding: 15px;
        font-size: 0.8em;
        color: #666;
      }
      .button {
        display: inline-block;
        background-color: #10B068;
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 5px;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Καιρός Smart Journal</h1>
    </div>
    <div class="content">
      <h2>Thank You for Signing Our NDA</h2>
      <p>Hello ${data.recipientName},</p>
      <p>Thank you for signing our Non-Disclosure Agreement. Your information has been securely recorded.</p>
      <p>You now have access to our confidential information package that details our innovative AI-enhanced journaling platform.</p>
      <div style="text-align: center;">
        <a href="https://kairos-landing-page.web.app/journal" class="button">View Confidential Information</a>
      </div>
      <p>If you have any questions, please don't hesitate to reach out to us at <a href="mailto:hello@kairos-journal.com">hello@kairos-journal.com</a>.</p>
      <p>Best regards,<br>The Καιρός Team</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Καιρός. All rights reserved.<br>
      This email was sent in response to your NDA submission.
    </div>
  </body>
  </html>
  `;
};

// HTML template for admin notification email
const getAdminEmailTemplate = (data) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New NDA Submission - Καιρός Smart Journal</title>
    <style>
      body { 
        font-family: 'Helvetica', Arial, sans-serif; 
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
      }
      .header { 
        background: linear-gradient(135deg, #0D7B3E 0%, #10B068 100%);
        padding: 20px;
        color: white;
        text-align: center;
        border-radius: 5px 5px 0 0;
      }
      .content { 
        padding: 20px;
        background: #f9f9f9;
        border: 1px solid #ddd;
      }
      .footer { 
        text-align: center;
        padding: 15px;
        font-size: 0.8em;
        color: #666;
      }
      .info-table {
        width: 100%;
        border-collapse: collapse;
      }
      .info-table td {
        padding: 8px;
        border-bottom: 1px solid #ddd;
      }
      .info-table tr:last-child td {
        border-bottom: none;
      }
      .signature-container {
        margin: 20px 0;
        padding: 10px;
        border: 1px solid #ddd;
        background: #fff;
        text-align: center;
      }
      .signature-image {
        max-width: 100%;
        max-height: 200px;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>New NDA Submission</h1>
    </div>
    <div class="content">
      <h2>A New NDA Has Been Submitted</h2>
      <p>You've received a new NDA submission for Καιρός Smart Journal.</p>
      
      <h3>Recipient Information:</h3>
      <table class="info-table">
        <tr>
          <td><strong>Name:</strong></td>
          <td>${data.recipientName}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${data.recipientEmail}</td>
        </tr>
        <tr>
          <td><strong>Company:</strong></td>
          <td>${data.companyName || 'Not provided'}</td>
        </tr>
        <tr>
          <td><strong>Title/Position:</strong></td>
          <td>${data.recipientTitle || 'Not provided'}</td>
        </tr>
        <tr>
          <td><strong>Signed Date:</strong></td>
          <td>${data.signingDate}</td>
        </tr>
      </table>
      
      <h3>Signature:</h3>
      <div class="signature-container">
        <img src="${data.signature}" alt="Signature" class="signature-image">
      </div>
      
      <p>You can access this information in your admin dashboard as well.</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Καιρός. All rights reserved.<br>
      Internal notification - do not forward.
    </div>
  </body>
  </html>
  `;
};

// Cloud function to send emails for NDA submissions
exports.sendNdaEmails = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // Check if method is POST
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    try {
      const data = req.body;
      
      // Validate required fields
      if (!data.recipientName || !data.recipientEmail || !data.signature) {
        return res.status(400).send('Missing required fields');
      }

      // Send confirmation email to user
      await transporter.sendMail({
        from: `"Καιρός Smart Journal" <${functions.config().email.user}>`,
        to: data.recipientEmail,
        subject: 'Your NDA Confirmation - Καιρός Smart Journal',
        html: getUserEmailTemplate(data)
      });

      // Send notification email to admin
      await transporter.sendMail({
        from: `"Καιρός NDA System" <${functions.config().email.user}>`,
        to: functions.config().email.admin,
        subject: 'New NDA Submission - Καιρός Smart Journal',
        html: getAdminEmailTemplate(data)
      });

      // Return success response
      return res.status(200).send({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(`Email sending failed: ${error.message}`);
    }
  });
});

// Optional: Store NDA submissions in Firestore
exports.storeNdaSubmission = functions.https.onCall((data, context) => {
  const admin = require('firebase-admin');
  
  // Initialize the app if it's not already initialized
  if (!admin.apps.length) {
    admin.initializeApp();
  }
  
  const db = admin.firestore();
  
  return db.collection('ndaSubmissions').add({
    ...data,
    submittedAt: admin.firestore.FieldValue.serverTimestamp()
  });
});

// Serve the app in the Cloud Functions environment (for testing)
exports.app = functions.https.onRequest((req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  res.redirect('/');
});