var fs = require('fs-extra');
var concat = require('concat');

(async function build(){

    const files =[
        './dist/elementsApp/runtime.6afe30102d8fe7337431.js',
        './dist/elementsApp/polyfills.04b29edf661868808c06.js',
        './dist/elementsApp/main.71f28087ae9a5d045a3f.js'
    ];

    await fs.ensureDir('elements');
    await concat(files,'elements/user-poll.js');
})();