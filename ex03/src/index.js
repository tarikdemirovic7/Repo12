// Only change code below this line
function rangeOfNumbers(startN, endN){
    
    if(startN > endN){
        return "The starting number will always be less than or equal to the ending number";
    }
    if(startN === endN){
        return [startN];
    }else{
        const numberRange = rangeOfNumbers(startN+1, endN);
        numberRange.unshift(startN);
        return numberRange;
    }

}


// Only change code above this line

console.log(rangeOfNumbers(1, 7));
module.exports = rangeOfNumbers;