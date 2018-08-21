const pkg = require('./package.json')
var JNRPEServer = require('jnrpe-lib').JNRPEServer;
const config = require('./config.json');

new JNRPEServer(config).start();
console.log(`JNRPE ${pkg.version} listening on port ${config.server.port}`);