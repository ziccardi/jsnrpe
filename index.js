var JNRPEServer = require('jnrpe-lib').JNRPEServer;
const config = require('./config.json');

new JNRPEServer(config).start();