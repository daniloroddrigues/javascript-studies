/**
 * Created by damty on 10/01/2018.
 */


var homem = {
    sexo: 'masculino'
};

var joao = {
    nome: 'Joao',
    idade: 20
};

Object.setPrototypeOf(joao, homem);

var pedro = Object.create(homem);
pedro.nome = 'Pedro';
pedro.idade = 18;

console.log(joao);
console.log(joao.sexo);
console.log(pedro);
console.log(pedro.sexo);