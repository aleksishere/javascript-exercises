const fibonacci = function(number) {
    number = Number(number);
    if (number > 0) {
        let firstNum = 1;
        let secoundNum = 1;
        let fib = [];
        let nextNum;
        for(let i=0; i<=number; i++) {
            nextNum = firstNum + secoundNum;
            fib[i] = firstNum;
            console.log(fib[i]);
            firstNum = secoundNum;
            secoundNum = nextNum;
        }
        return fib[number-1];
    } else {
        return "OOPS";
    }
    }

// Do not edit below this line
module.exports = fibonacci;
