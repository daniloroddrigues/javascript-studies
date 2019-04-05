// Definindo uma função
var square = function(x) {
  return x * x;
};

console.log(square(12)); // 144

var makeNoise = function() {
  console.log("noise...");
};

// com loop for
var power = function(base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

console.log(2, 10); // 1024

// com loop while
var powerWhile = function(base, exponent) {
  var result = 1;
  var i = 0;
  while (i < exponent) {
    result *= base;
    i++;
  }

  return result;
};

console.log(powerWhile(2, 10)); // 1024


// com do while
var powerDoWhile = function(base, exponent) {
  var result = 1;
  var i = 0;

  do {
    result *= base;
    i++;
  } while (i < exponent);

  return result;
};

console.log(powerDoWhile(2, 10)) // 1024
