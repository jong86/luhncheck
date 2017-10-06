function luhn (string) {
  if (string === "") return false;
  if (string === undefined) return false;
  if (/\D/.test(string) === true) return false;

  var sum1 = 0;
  var sum2 = 0;
  var revString = string.split("").reverse().join("");

  for (var i = 0; i < revString.length; i++) {
    if ((i + 1) % 2 !== 0) {
      sum1 += Number(revString[i]);
    }
    else if ((i + 1) % 2 === 0) {
      var dbl = Number(revString[i]) * 2;
      if (dbl > 9) {
        dbl -= 9;
      }
      sum2 += dbl;
    }
  }

  var sumFinal = sum1 + sum2;
  return sumFinal % 10 === 0; 

}

module.exports = luhn;

console.log(luhn("49927398716")); // true
console.log(luhn("49927398717")); // false
console.log(luhn("1234567812345678")); // false
console.log(luhn("1234567812345670")); // true
console.log(luhn("")); // false
console.log(luhn("A")); // false