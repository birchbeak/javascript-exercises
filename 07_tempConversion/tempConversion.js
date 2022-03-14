const ftoc = function(temp) {
  return round((temp-32)*5/9);
};

const ctof = function(temp) {
return round(temp*9/5+32);
};
function round(num){
  return Math.ceil(num*10)/10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
