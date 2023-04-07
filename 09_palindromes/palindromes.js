const palindromes = function (string) {
    var regex = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    string = string.toLowerCase(string).replace(regex, '');
    let stringMiddle = string.length / 2;
    let firstPart = string.slice(0, stringMiddle);
    if (string.length % 2 !== 0) {
        let lastPart = string.slice(stringMiddle + 1)
        let lastPartReverse = lastPart.split("").reverse().join("");
        if (firstPart === lastPartReverse) {
            return true;
        } else {
            return false;
        }
    } else {
        let lastPart = string.slice(stringMiddle)
        let lastPartReverse = lastPart.split("").reverse().join("");
        if (firstPart === lastPartReverse) {
            return true;
        } else {
            return false;
        }
    }








};

// Do not edit below this line
module.exports = palindromes;



palindromes("abba");