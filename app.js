const express = require('express');
const app = express();

// Basic endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Demo App!');
});

// Endpoint that triggers an error
app.get('/error', (req, res) => {
  console.error('Error: Something went wrong!');
  res.status(500).send('An error occurred! Check the logs.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
