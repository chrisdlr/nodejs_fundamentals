// Requiring Filesystem module
const fs = require('fs');

function read_archive(route, cb) {
    fs.readFile(route, (err, data) => {
        cb(data.toString());
    });
}

function write_arhive(route, content, cb) {
    fs.writeFile(route, content, (err, data) => {
        if (err) {
            console.error(`I couldn't write ${err}`)
        } else {
            console.log('Wrote correctly');
        }
    });
}

function delete_archive(route, cb) {
    fs.unlink(route, cb);
}

//write_arhive(`${__dirname}/archive1.txt`, "I'm a new archive", console.log);
// read_archive(`${__dirname}/archive.txt`, console.log);
//delete_archive(`${__dirname}/archive1.txt`, console.log);
