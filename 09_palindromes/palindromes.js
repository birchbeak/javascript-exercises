const palindromes = function (str) {
    let palArr= str.split('');
    let compStr= '';
    palArr= palArr.filter(ch=>{
        return /[a-z]|[A-Z]/gi.test(ch);
    });
    console.log(palArr.join(''));
    compStr= palArr.slice(Math.ceil(palArr.length/2));
    palArr= palArr.slice(0, palArr.length/2);
    compStr= compStr.reverse();

    //console.log(compStr.join('').toLowerCase());
    //console.log(palArr.join('').toLowerCase());

    return compStr.join('').toLowerCase() === palArr.join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
