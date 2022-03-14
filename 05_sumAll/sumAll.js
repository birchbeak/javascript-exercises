const sumAll = function(first, second) {
    if(typeof(first) !== 'number'|| typeof(second) !== 'number') return 'ERROR';
    if (first <0 || second<0) return 'ERROR';
    let sum=0;
    if(first>second){
        first= first^second;
        second= first^second;
        first= first^second;
    }
    for(; first<=second; first++){
        sum+= first;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
