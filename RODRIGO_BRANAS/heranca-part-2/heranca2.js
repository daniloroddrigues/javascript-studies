/**
 * Created by damty on 11/01/2018.
 */

// Toda função tem um prototype
var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('Joao', 20);
console.log(joao);
console.log(joao.sexo);

// Conseito
var pedro = {};
pedro.__proto__ = Homem.prototype;
Homem.apply(pedro, ['Pedro', 18]);
console.log(pedro);
console.log(pedro.sexo);

