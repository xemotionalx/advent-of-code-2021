const fs = require("fs");

const depthMeasurements = fs
  .readFileSync("./data.txt")
  .toString()
  .split(/\r\n|\r|\n/g)

const measurementLargerThanPrevious = [];
  
depthMeasurements.forEach((depthMeasurement, i) => {
    depthMeasurements[i] = parseInt(depthMeasurement);
});

depthMeasurements.forEach((depthMeasurement, i) => {
    const difference = depthMeasurement - depthMeasurements[i - 1];

    if (Math.sign(difference) === 1) {
        measurementLargerThanPrevious.push(difference);
    }
})

console.log(measurementLargerThanPrevious.length)