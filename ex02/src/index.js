// Only change code below this line
function myCounter(n) {
    if (n <= 0) {
        return [];
    } else {
        const countArray = myCounter(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
// Only change code above this line
console.log(myCounter(10)); // Change this line
module.exports = myCounter;
