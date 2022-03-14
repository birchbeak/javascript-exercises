const reverseString = function(string) {
    let rString = '';
    let strArray = string.split('');
    for (i=strArray.length-1;i>=0;i--){
        rString += strArray[i];
    }
    return rString;
};

// Do not edit below this line
module.exports = reverseString;
