// Operadores Lógicos

// && (e)
// só vai ser verdadiro se os valores forem verdadeiros
// unica true && true
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false
console.log(false && false); // false

// || (ou)
// só é verdadeiro se um dos valores for verdadeiro
console.log(true || false); // true
console.log(true || true); // true
console.log(false || false); // false
console.log(false || true); // true

// || (ou) tem menor prescendencia, depois && e assim

// Precedencia maior significa que ele vai resolver a condição
// por último?

// por diante
// resolve 1 + 1 == 2 ? true
// depois 10 * 10 > 50 ? true
// resultado true && true igual a true
console.log(1 + 1 == 2 && 10 * 10 > 50); // true

// Operadores tenários
console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2
