'use strict';

var plugins = ['PLUGIN1', 'PLUGIN2'];

class PluginManagerMock {
    constructor() {
    }

    on(event, cb) {
        cb();
    }

    getPlugins() {
        return plugins;
    }
}

class JNRPEServerMock {
    constructor(config) {
        this.pluginManager = new PluginManagerMock();
    }
}

module.exports = { JNRPEServer : JNRPEServerMock, plugins : plugins};