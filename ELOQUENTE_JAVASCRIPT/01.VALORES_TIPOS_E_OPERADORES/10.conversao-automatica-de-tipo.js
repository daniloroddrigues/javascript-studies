// Conversão Automática de Tipos
// Coerção de tipo - converter valores de forma silênciosa
// Conversão de tipos acidentais

console.log(8 * null); // 0 converte null para numero 0
console.log("5" - 1); // 4 converte "5" para numero 5

// tenta um concatenão primeiro depois tenta a adicção numérica
console.log("5" + 1); // "51" converte 1 para string "1"

// quando o valor não pode ser "mapeado" como numero, no caso de string
// "five", "six", "seven" ou undefined por ai vai
// é convertido para um numero, mas o valor é NaN
console.log("five" * 2); // NaN

// converte undefined para um numero NaN * 2
// tudo que façamos com NaN sempre vai dar NaN
console.log(undefined * 2); // NaN

// converte false para 0 == 0 igual á true
console.log(false == 0);

// converte false para 0 == 1 igual á false
console.log(false == 1);

// converte true para 1 == 1 igual á true
console.log(true == 1); // true

// converte true para 1 == 0 igual á false
console.log(true == 0); // false

// null para undefined ou undefined para null
// que resulta em true
console.log(null == undefined); // true

//
console.log(null == 0);

// return true. NaN é false
console.log(NaN == false);

// retorna true. Zero é false
console.log(0 == false);

// retorna true. String vazia é false
console.log("" == false);
