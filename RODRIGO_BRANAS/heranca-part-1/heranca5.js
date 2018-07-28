/**
 * Created by damty on 10/01/2018.
 */

// Shadowing
var homem = {
    sexo: 'masculino'
};

var joao = {
    nome: 'Joao',
    idade: 20,
    sexo: 'feminino'
};

delete joao.sexo;

// [[Prototype]]
Object.setPrototypeOf(joao, homem);

console.log(joao);
console.log(joao.sexo);

// O for in faz o loop dentro do prototipo ou seja homem tambem vai ser impresso
// por fazer referencia a joao
for(var property in joao) {

    // caso para não imprimir a propriedade - prototype
    // if(!joao.hasOwnProperty(property))
    //    continue;

    console.log(property);
}