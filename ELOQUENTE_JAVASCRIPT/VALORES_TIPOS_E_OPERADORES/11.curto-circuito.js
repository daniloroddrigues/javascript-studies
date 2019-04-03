// Curto circuito de && e ||

// o operador || retorna true se o primeiro valor pode
// ser convertido em true caso contrário ele retorna o da
// direita

// caso de numero sempre retorna mais a esquerda
console.log(1 || "user"); // 1

console.log(0 || "user"); // "user"
console.log(NaN || "user"); // "user"
console.log(undefined || "user"); // "user"
console.log(null || "user"); // "user"
console.log(true || "user"); // true
console.log(false || "user"); // "user"

// operado && retorna false caso a primeira expressão 
// seja convertido para false
// qualquer numero acima de zero volta o valor a direita
console.log(1 && "user"); // "user"
console.log(10930293 && "user"); // "user"
console.log(0 && "user"); // 0
console.log(undefined && "user"); // undefined
console.log(NaN && "user"); // NaN
console.log(null && "user"); // null

// Curto circuito, não é avaliado o valor da variável NoAvaliable
console.log(true || noAvailable); // true
console.log(false && noAvailable); // false
