var expect = require('chai').expect;
var proxyquire = require('proxyquire');
var sinon = require('sinon');
require('mocha-sinon');

var commandName = '';

var yargs = {
    argv: ['a', 'b']
}

function commandFunction(name, description, cb) {
    if (name === commandName) {
        cb(yargs);
    }
    return yargs;
}

yargs.usage = sinon.stub().returns(yargs);
yargs.command = commandFunction;
yargs.demandCommand = yargs.usage;

describe("Plugin Management", function() {
    it("List plugins", function() {
        commandName = 'list';
        var stub = this.sinon.stub(console, 'log');
        var jnrpe = proxyquire('../jnrpe.js', { 'yargs' : yargs, 'jnrpe-lib': require('./mocks/jnrpe-lib-mock')});
        stub.restore(console, 'log');

        var args = stub.getCall(0).args
        expect(args).to.be.an('array').with.lengthOf(1);
        var output = args[0];
        expect(output).to.be.an('array').with.lengthOf(2).that.deep.equal(['PLUGIN1', 'PLUGIN2']);
    });
});
