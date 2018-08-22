#!/usr/bin/env node
'use strict'
var JNRPE = require('yargs');
var JNRPEServer = require('jnrpe-lib').JNRPEServer;
const config = require('./config.json');
const pkg = require('./package.json');

var server = new JNRPEServer(config);

function listPlugins(yargs) {
    server.pluginManager.on('loaded', () => { 
        console.log(server.pluginManager.getPlugins());
    });
}

function startServer(yargs) {
    server.start();
    console.log(`JNRPE ${pkg.version} listening on port ${config.server.port}`);
}

function help(args) {
    var pluginName = args.plugin;
    server.pluginManager.on('loaded', () => { 
        var plugin = server.pluginManager.getPlugin(pluginName);

        if (plugin) {
            var details = plugin.details;
            console.log(`\nName: ${details.name}\n`);
            console.log(details.description);
            console.log('======================================');
            console.log(`Parameters: ${details.commandLine}`)
            console.log(`\nExample command: ${details.exampleCommand}`);
            console.log(`Example invocation: ${details.exampleInvocation}`);
        } else {
            console.log(`Unknown plugin ${pluginName}`);
        }
    });
}

var argv = JNRPE.usage('Usage: $0 <command> [options]')
    .command('start', 'Start the JNRPE server', startServer)
    .command('list', 'List all the plugins', listPlugins)
    .command('help <plugin>', 'Show the help of the requested plugin', {
        plugin: {
          describe: 'Name of the plugin',
          demand: true,
          type: 'string'
        }
      },help)
    .demandCommand()
    .argv;