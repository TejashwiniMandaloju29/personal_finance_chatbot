const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Chat endpoint
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;

  // Dummy reply logic
  const reply = `You said: "${userMessage}". Here's some finance advice! 💸`;

  res.json({ reply });
});

// Server start
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
