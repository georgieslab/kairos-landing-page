// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Parse application/json and application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Serve static assets
app.use('/static', express.static(path.join(__dirname, 'public/static')));

// API endpoint for NDA form submission
app.post('/submit-nda', (req, res) => {
  const { recipientName, recipientEmail, signature } = req.body;
  
  // In a real application, you would:
  // 1. Store the NDA information in a database
  // 2. Send confirmation email to the user
  // 3. Notify admin of new NDA submission
  
  console.log(`NDA submitted by ${recipientName} (${recipientEmail})`);
  
  // Simple validation
  if (!recipientName || !recipientEmail || !signature) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }
  
  // Return success
  return res.status(200).json({ success: true });
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});