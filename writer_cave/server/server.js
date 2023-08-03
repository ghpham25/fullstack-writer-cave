const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Use a different route name like "/api/writing-prompt"
app.get('/api', (req, res) => {
  const prompt = 'This is a prompt fetched from the backend';
  res.json({prompt});
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
