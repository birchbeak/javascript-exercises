const removeFromArray = function(array){
    let rem= null;

    for(let k=1; k<arguments.length; k++){
        rem = arguments[k];
        for(let i=0; i<array.length; i++){
            if(array[i]===rem) array.splice(i,1);
        }
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
