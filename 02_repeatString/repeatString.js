const repeatString = function(string, num) {
    let strCpy=string;
    if (num<0) return 'ERROR';
    if (num===0) return '';

    for(i=1;i<num;i++){
        string += strCpy;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
