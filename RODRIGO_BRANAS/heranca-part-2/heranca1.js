/**
 * Created by damty on 11/01/2018.
 */

var Homem = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = 'masculino';
};

var joao = new Homem('Joao', 20);
console.log(joao);

var pedro = {};
Homem.apply(pedro, ['Pedro', 18]);
console.log(pedro);

