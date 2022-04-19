// https://nodejs.org/dist/latest-v16.x/docs/api/
// ^Shows all node.js core modules for the current version 16.14.2


const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello World');