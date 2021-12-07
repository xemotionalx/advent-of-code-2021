const fs = require("fs");
const { stringify } = require("querystring");

const data = fs
  .readFileSync("./data.txt")
  .toString()
  .split(/\r\n|\r|\n/g)

const bits = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
}

data.forEach((binaryNumber) => {
    
    for (let i in binaryNumber) {
        bits[i].push(parseInt(binaryNumber[i]))
    }

});

const gammaArray = [];
const epsilonArray = [];

Object.keys(bits).forEach((bitIndex) => {
    const binarySum = bits[bitIndex].reduce((a, b) => a + b);

    if (binarySum < 500) {
        gammaArray.push(0);
        epsilonArray.push(1);
    } else {
        gammaArray.push(1);
        epsilonArray.push(0);
    }
})

const gamma = gammaArray.join('');
const epsilon = epsilonArray.join('');

const powerConsumption = parseInt(gamma, 2) * parseInt(epsilon, 2);

console.log(powerConsumption);

