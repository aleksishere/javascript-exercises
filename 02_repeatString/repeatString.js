const repeatString = function(string, sum) {
    let finalString = "";
    if(sum < 0) {
        return "ERROR";
    } else {
        for(let i=0; i<sum; i++) {
            finalString = finalString + string;
        }
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
