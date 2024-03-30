const { Redis } = require('ioredis');

// Default connect to port 6379
const client = new Redis();

module.exports = client;
