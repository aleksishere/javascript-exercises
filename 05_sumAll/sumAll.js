const sumAll = function(minValue, maxValue) {
    let sum = 0;
    if((minValue > 0 && maxValue > 0) && (typeof minValue === "number" && typeof maxValue === "number")) {
        if( minValue < maxValue) {
            for(let i = minValue; i<=maxValue; i++) {
                sum = sum + i;
            }
        } else if(minValue > maxValue) {
            for(let i = maxValue; i<=minValue; i++) {
                sum = sum + i;
            }
        }
    } else {
        return 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
