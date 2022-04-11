var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const readLine = () => new Promise((res, rej) => {

    rl.on('line', res);
})

module.exports = {
readLine
}
