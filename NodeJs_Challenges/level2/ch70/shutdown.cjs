

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


mongoose.connect('mongodb://localhost:27017/app')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


const shutdown = async () => {
  console.log('Graceful shutdown...');


  await new Promise(resolve => server.close(resolve));
  console.log('HTTP server closed');


  await mongoose.disconnect();
  console.log('MongoDB disconnected');

  process.exit(0);
};


process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
