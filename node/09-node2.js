const fs = require('fs');
let input = fs.readFileSync("./input.txt").toString().trim().split(" ");
let A = Number(input[0])
let B = Number(input[1])
let C = Number(input[2])

let total = (A * 60) + B + C;
let hour = 0;
let minute = 0;


if (total >= 1440) {
    total -= 1440;
     
} else if (total >= 60) {
    hour = Math.floor(total / 60);
    minute = total % 60;
} else {
    hour = 0;
    minute = total;
}
console.log(hour, minute);