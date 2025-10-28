const util = require('util');
const execAsync = util.promisify(require('child_process').exec);
module.exports = function exec(command) {
    return execAsync(command)
}