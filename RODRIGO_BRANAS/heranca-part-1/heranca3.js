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

var pedro = {
    nome: 'Pedro',
    idade: 20
};

Object.setPrototypeOf(pedro, homem);

console.log(joao);
console.log(joao.sexo);
console.log(pedro);
console.log(pedro.sexo);