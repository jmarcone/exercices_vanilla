import {readFile} from 'node:fs/promises';

try{
    const fileContent = await readFile("test.html", "utf-8");
    console.log(fileContent);
}catch(e){
    console.error(e.message);
}



/*
const fs = require('fs');

fs.readFile('test.html', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/