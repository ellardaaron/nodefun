const path = require('path');  //core modules
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, '../data.json'); //Path to the file we want to read. __dirname gives us the current directory name and by putting ../ it will know to go out of current directory to parent directory which is where this file is located

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(dataPath, item.data.title + '\n');
    });
});



//  fs.writeFile(dataPath, res.body, err => {
//         if(err) console.log(err);
//     });



// fs.readFile(dataPath, {  //passing in the file we want read by passing in the variable that we assigned to the path
//     encoding: "UTF-8",     // type of encoding that the files is
// }, (err, data) => {         //taking data and putting it into a callback function
//     let person = JSON.parse(data)      //parsing the data, turning into a javascript object, and putting it into the person variable

//     console.log(person.name);
//     console.log(person.shirtColor);
// })