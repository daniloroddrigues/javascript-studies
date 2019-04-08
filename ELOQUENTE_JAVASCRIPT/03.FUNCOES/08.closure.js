// Closure
//  são funções que retorna
function num(n) {
  var localN = n;
  return function() {
    return localN;
  };
}
//     = cria a variável local
//     function num(3) { ...
var n1 = num(1);

// se chamar n1 será apenas uma chamada de função
n1;

// chamada do retorna da variável criada localmente.
// chama esse pedaço da função
// = return function() { ...
n1();

function powerFor(base, exponent) {
  var localExponent = exponent;
  var localBase = base;
  var result = 1;

  if (localExponent == undefined) {
    localExponent = 2;
  }

  for (var i = 0; i < localExponent; i++) {
    result *= localBase;
  }

  return function() {
    return result;
  };
}

//       = function(4) { ...
var exp1 = powerFor(4);

// chamada da variável result
exp1();

function powerWhile(base, exponent) {
  var localExponent = exponent;
  var localBase = base;
  var result = 1;
  var count = 0;

  if (localExponent == undefined) {
    localExponent = 2;
  }

  while (count < localExponent) {
    result *= localBase;
    count++;
  }

  return function() {
    return result;
  };
}

function powerDoWhile(base, exponent) {
  var localExponent = exponent;
  var localBase = base;
  var result = 1;
  var count = 0;

  if (localExponent == undefined) {
    localExponent = 2;
  }

  do {
    result *= localBase;
    count++;
  } while (count < localExponent);

  return function() {
    return result;
  };
}

// Closure triangle
function triangle(n) {
  var localN = n;
  var hash = "#";
  var str = "";
  var listHash = [];

  if (localN == undefined || localN == null) {
    localN = 8;
  }

  for (var i = 0; i < localN; i++) {
    listHash.push((str += hash));
  }

  var showListHash = function() {
    for (var i = 0; i < listHash.length; i++) {
      console.log(listHash[i]);
    }
  };

  return {
    showListHash: showListHash
  };
}
