const util = require('util');
const exec = util.promisify(require('child_process').exec);
module.exports = function run(cmd, service_name) {
    var command = 'systemctl ' + cmd

    if (service_name) {
        command = command + ' ' + service_name
    }

    return exec(command)
}
