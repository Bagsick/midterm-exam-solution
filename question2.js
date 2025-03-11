// Import express module
const express = require('express');

// Create an Express app
const app = express();

// Define the test route
app.get('/test', (req, res) => {
  res.json( 'Express is working! John Kenneth A. Carungay' );
});

// Make the server listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
