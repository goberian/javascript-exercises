const repeatString = function (string, num) {
    let i = 0;
    let array = [];
    let newString = "";
    if (num < 0) {
        return "ERROR";
    } else {
        while (i < num) {
            array = array.concat(string);
            i++;
        }
        return newString = array.join("");
    }

};

// Do not edit below this line
module.exports = repeatString;