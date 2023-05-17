const palindromes = function (word) {
    let wordReplaced = word.replace(/[\W_]/g, '');
    wordReplaced = wordReplaced.toLowerCase();
    if(wordReplaced.split('').reverse().join('') == wordReplaced) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
