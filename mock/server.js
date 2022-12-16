const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  noCors: false,
});

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// API
server.get('/mock', (req, res) => {
  return res.jsonp({message: 'Server is running'});
});

server.get('/api/test/get', (req, res) => {
  const SUCCESS = require('./data/SUCCESS.json');

  res.jsonp(SUCCESS);
});

server.post('/api/test/post', (req, res) => {
  const SUCCESS = require('./data/SUCCESS.json');

  res.jsonp(SUCCESS);
});

server.put('/api/test/put', (req, res) => {
  const SUCCESS = require('./data/SUCCESS.json');

  res.jsonp(SUCCESS);
});

server.delete('/api/test/delete', (req, res) => {
  const SUCCESS = require('./data/SUCCESS.json');

  res.jsonp(SUCCESS);
});

server.patch('/api/test/patch', (req, res) => {
  const SUCCESS = require('./data/SUCCESS.json');

  res.jsonp(SUCCESS);
});


server.use(router);
server.listen(1234, () => {
  // eslint-disable-next-line no-console
  console.info('JSON Server is running on port 1234');
});

module.exports = server;
