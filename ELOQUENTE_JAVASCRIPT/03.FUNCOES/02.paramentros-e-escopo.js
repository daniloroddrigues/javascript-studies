// Parâmetros e Escopos

var x = "outside";

var f1 = function() {
  var x = "in scope";
};

console.log(f1()); // outside

var f2 = function() {
  x = "global scope";
};

console.log(f2()); // global scope
