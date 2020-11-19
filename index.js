const process = require('process');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Server is running on ${port}`));


// catches from the monitor 
process.on('SIGTERM', () => {
    console.info('SIGTERM signal has been received');
    server.close(() => {
        console.log('please close')
        // can be used to kill database here
    })
})

// catches ctrl c
process.on('SIGINT', () => {
    console.info(`closing ${process.pid}`);
    process.exit(0)
})

process.on('exit', code => {
    console.log(`Process exited with code: ${code}`)
    process.exit(0)
})