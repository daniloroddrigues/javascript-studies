// Números Especiais
// valores infinito retornam tipo numero
// NaN tipo numero

console.log("---------------------Infinity----------------------");
console.log(Infinity - 1); // Infinity
console.log(Infinity / Infinity); // NaN
console.log(Infinity / -Infinity); // NaN
console.log(-Infinity / -Infinity); // NaN
console.log(Infinity / 0); // Infinity
console.log(0 / Infinity); // 0
console.log(Infinity % 100); // NaN
console.log(Infinity % Infinity); // NaN
console.log(314 % Infinity); // 314
console.log(314 % -Infinity); // 314
console.log(typeof Infinity); // 'number'

console.log("---------------------NaN--------------------------");
console.log(NaN / Infinity); // NaN
console.log(Infinity / NaN); // NaN
console.log(NaN / NaN); // NaN
console.log(NaN / 0); // NaN
console.log(0 / NaN); // NaN
console.log("tudo por NaN (-+/*%) vai ser NaN");
console.log(typeof NaN); // 'number'
