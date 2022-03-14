const leapYears = function(year) {
    if(typeof year !== 'number') return 'ERROR';

    if(!(year%100) && (year%400) || (year%4)) return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
