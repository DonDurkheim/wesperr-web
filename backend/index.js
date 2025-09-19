const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const WAITLIST_FILE = path.join(__dirname, 'waitlist.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ensure waitlist.json exists
if (!fs.existsSync(WAITLIST_FILE)) {
  fs.writeFileSync(WAITLIST_FILE, JSON.stringify([]));
}

// Waitlist endpoint
app.post('/api/waitlist', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  fs.readFile(WAITLIST_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading waitlist file:', err);
      return res.status(500).json({ message: 'Server error.' });
    }

    const waitlist = JSON.parse(data);

    if (waitlist.some(entry => entry.email === email)) {
      return res.status(409).json({ message: 'Email already on waitlist.' });
    }

    waitlist.push({ email, timestamp: new Date().toISOString() });

    fs.writeFile(WAITLIST_FILE, JSON.stringify(waitlist, null, 2), (err) => {
      if (err) {
        console.error('Error writing waitlist file:', err);
        return res.status(500).json({ message: 'Server error.' });
      }
      res.status(200).json({ message: 'Successfully joined waitlist!' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
