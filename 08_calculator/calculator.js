const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	if(arr.length<= 0) return 0;
  let sum=0;
  for(let el of arr){
    sum+=el;
  }
  return sum;
};

const multiply = function(arr) {
	if(arr.length<= 0) return 0;
  let product=1;
  for(let el of arr){
    product*=el;
  }
  return product;
};

const power = function(num, pow) {
	let result= 1;

  for(let i=0;i<pow;i++){
    result*=num;
  }
  return result;
};

const factorial = function(index) {
  let result=1;

	for(let i=index; i>0; i--){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
