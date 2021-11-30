import http from 'http';

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Home Page</h1>');
  } else if (url === '/users') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Users Page</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h4>404 Not found</h4>');
  }
  res.end();
});

server.listen(3000, () => {
  colorfulLog(`Server runs on port 3000`);
});
