// Triângulo com Loop
// Escreva um programa que faça sete chamadas a
// console.log() para retornar o seguinte triângulo:

var str = "";
var triangulo = "#";
var counter = 0;

// ex. com while
while (counter < 8) {
  console.log((str += triangulo));
  counter++;
}

// ex. com do while
do {
  console.log((str += triangulo));
  counter++;
} while (counter < 8);


// ex. com for
for (var i = 0; i < 8; i++) {
  console.log((str += triangulo));
}
