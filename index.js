const process = require('process');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Server is running on ${port}`));

process.on('SIGTERM', () => {
  console.info('SIGTERM signal has been received');
  server.close(() => {
    console.log('please close');
    // can be used to kill database here
  });
});
