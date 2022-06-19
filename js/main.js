const array = [2, 4, 7, 5, 4, 3, 8];
const new_array = array.filter(function (val,i,array) {
  return (array.indexOf(val) === i);
});

console.log(new_array)

///

function leapYear(year) {
  if ( (year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0) {
    return true;
  }
}

let check = 2005;

if (leapYear(check)) {
  console.log(check + "年はうるう年です");
} else {
  console.log(check + "年はうるう年ではないです");
}