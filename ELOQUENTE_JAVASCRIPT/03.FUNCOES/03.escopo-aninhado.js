// Escopo Aninhado

var landscape = function() {
  var result = "";

  var flat = function(size) {
    for (var i = 0; i < size; i++) {
      // i = variável de escopo de flat
      result += "_";
    }
  };

  var mountain = function(size) {
    result += "/";
    for (var i = 0; i < size; i++) {
      // i = variável de escopo de mountain
      result += "'";
    }
    result += "\\";
  };

  flat(3);
  mountain(4);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
// ___/''''\______/'\_


// a variável something de bloco
// faz referencia a variável something 
// global, por isso o resultado saiu 2
var something = 1;

{
    var something = 2;
}

console.log(something) // 2


// agora podemos "quebrar" essa referência
// utilizando a palavra reservada let
var something = 1;

{
    let something = 2;    
}

console.log(something); // 1
