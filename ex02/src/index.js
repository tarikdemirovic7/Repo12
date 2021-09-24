// Only change code below this line
function myCounter(n){

    if(n < 1){
        return [];
    }else {
        const counterArr = myCounter(n-1);
        counterArr.unshift(n);
        return counterArr;
    }

}


// Only change code above this line

console.log(myCounter(5));
module.exports = myCounter;
