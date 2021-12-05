const fs = require("fs");

const data = fs
  .readFileSync("./data.txt")
  .toString()
  .split(/\r\n|\r|\n/g)

const forwardArray = [];
const upArray = [];
const downArray = [];

data.forEach((measurement, i) => {
    splitMeasurement = measurement.split(' ');
    const direction = splitMeasurement[0];
    const distance = splitMeasurement[1];
    
    switch(direction) {
        case "forward":
            forwardArray.push(parseInt(distance));
            break;
        case "up":
            upArray.push(parseInt(distance));
            break;
        case "down":
            downArray.push(parseInt(distance));
    }
});

const forward = forwardArray.reduce((a, b) => a + b);
const down = downArray.reduce((a, b) => a + b);
const up = upArray.reduce((a, b) => a + b);

const finalPosition = forward * (down - up);

console.log(finalPosition);