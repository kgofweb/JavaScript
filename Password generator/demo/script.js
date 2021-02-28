// Generate function upper, lower, number, symbol
function getRandomUpper() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUpper());