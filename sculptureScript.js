const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
const sculptureListLength = {};
// comment this out in your solution!
sculptureList.forEach((element, index) => {
    sculptureListLength[index] = {}
    console.log("Sculpture : ", index+1);
    for (const key in element) {
        if (typeof element[key] === 'string') {
            sculptureListLength[index][key] = element[key].length;
            console.log(`${key}: ${element[key].length}`)
        }
        else
            sculptureListLength[index][key] = null;
    }
    console.log("----------------------");
});