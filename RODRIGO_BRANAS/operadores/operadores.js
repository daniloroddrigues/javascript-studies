/**
 * Created by damty on 09/01/2018.
 */

// Operadores https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3

var zero = 0;
var dez = 10;
var nota = Number(10);
var x = {};

console.log(nota.valueOf());
console.log(dez == nota);

console.log('valor de x: ');
console.log(x == dez);
x.valueOf = function () {
    return 10;
};
x.toString = function () {
    return '10'
};

console.log('comparando valores novamente: ');
console.log(x == dez);


var obj1 = {};
var obj2 = {};
var obj3 = obj1;

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj3 == obj1);
console.log(obj3 === obj1);
console.log(obj3 === obj2);


// Operadores retorna o valor em uma condição e não true ou false
// ex (0 || 2);
console.log('0 || 2: ' + (0 || 2));
console.log('1 || 2: ' + (1 || 2));
console.log('1 && 2: ' + (1 && 2));
console.log('0 && 2: ' + (0 && 2));

console.log('------- Operation abstract ToBoolean -------');
// Operação abstrata ToBoolean
console.log('!!0: ' + (!!0));
console.log('!!false: ' + (!!false));
console.log('!!undefined: ' + (!!undefined));
console.log('!!NaN: ' + (!!NaN));
console.log('!!null: ' + (!!null));
console.log('string vazia !!\'\': ' + (!!''));


var generatorSerial = function (max) {

    // if (max === undefined || max === null || max === 0) {
    //        max = 1000;
    // }

    // if(!max) {
    //        max = 1000;
    // }

    max = max || 1000;

    return Math.floor(Math.random() * max);
};

console.log(generatorSerial(1000));
console.log(generatorSerial());

// Instanceof
console.log('------ Instanceof ------');
var Pessoa = function (nome, idade) {
    this.idade = idade;
    this.nome = nome;
};

var pedro = new Pessoa('Pedro', 26);
console.log(pedro instanceof Pessoa);
console.log(pedro instanceof Date);

// Operator in
console.log('------ Operator in ------');
console.log('nome' in pedro);
console.log('peso' in pedro);
delete pedro.nome;
console.log('nome' in pedro);
