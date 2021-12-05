const fs = require("fs");

const data = fs
  .readFileSync("./data.txt")
  .toString()
  .split(/\r\n|\r|\n/g)

let aim = 0;
let depth = 0;
let horizontalPosition = 0;

data.forEach((measurement, i) => {

    splitMeasurement = measurement.split(' ');
    const direction = splitMeasurement[0];
    const distance = parseInt(splitMeasurement[1]);
    
//    if (i < 10) { 

       switch(direction) {
        case "forward":
            horizontalPosition = horizontalPosition + distance;
            depth = depth + (aim * distance);
            break;
        case "up":
            aim = aim - distance;
            console.log("aim: ", aim);
            break;
        case "down":
            aim = aim + distance;
            console.log("aim: ", aim);
    }
// }
});

console.log("final horizontal position: ", horizontalPosition)
console.log("final aim: ", aim);
console.log("final depth: ", depth);

console.log("final answer: ", horizontalPosition * depth)