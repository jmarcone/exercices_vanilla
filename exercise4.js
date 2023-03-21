import { readFile } from 'node:fs/promises';

try {
    readFile("test.html", "utf-8").then(function (data) {
        console.log(data);
    }
    );

} catch (e) {
    console.error(e);
}


/*const fs = require('fs');

fs.readFile('./test.html', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});*/