const express = require('express');
const os = require('os'); // Import the OS module to get the hostname
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  // Get the Pod Name (hostname)
  const podName = os.hostname();
  
  // Send it back to the browser
  res.send(`
    <h1>Hello, World! Welcome to Anubhav's YouTube Channel.</h1>
    <p><b>Request served by Pod is:</b> <span style="color:blue">${podName}</span></p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
