const path = require('path');
const express = require('express');
const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

app.use(express.static('./dist/'));

app.get('*', (_, res) => res.sendFile(path.resolve('./dist/index.html')));

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});
