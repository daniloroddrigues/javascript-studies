// Argumentos opcionais

function power(base, exponent) {
  if (exponent == undefined) {
    exponent = 2;
  }

  var result = 1;

  for (var i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(power(4)); // -> 16

console.log(power(4, 3)); // -> 64

function powerWhile(base, exponent) {
  if (exponent == undefined) {
    exponent = 2;
  }

  var result = 1;
  var count = 0;
  while (count < exponent) {
    result *= base;
    count++;
  }

  return result;
}
