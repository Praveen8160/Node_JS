// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const filePath = path.join(__dirname, 'index.html');

// Create a HTTP server
const server = http.createServer((req, res) => {
  // Read the index.html file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error loading ${filePath}`);
      return;
    }

    // Set the content type to 'text/html'
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Send the content of index.html to the client
    res.end(content);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});