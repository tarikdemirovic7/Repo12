// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (endN < startN) {
        return "The starting number will always be less than or equal to the ending number";
    }
    if (endN == startN) {
        return [startN];
    } else {
        const middleArray = rangeOfNumbers(startN, endN - 1);
        middleArray.push(endN);
        return middleArray;
    }
}
// Only change code above this line
console.log(rangeOfNumbers(1, 7)); // Change this line
module.exports = rangeOfNumbers;
