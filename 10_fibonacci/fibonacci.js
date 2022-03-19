const fibonacci = function(index) {
    let fib=1;
    let pre=0;
    if(index < 1) return 'OOPS';
    //if(index===1 || index===2) return fib;

    for(let i=1; i<index; i++){
        fib=pre + fib;
        pre=fib-pre;
    }
    console.log(fib);
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
