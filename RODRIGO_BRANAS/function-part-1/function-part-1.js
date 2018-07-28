/**
 var tier = 'nsfw deck';
 var output = 'Você receberá ';

 switch(tier) {
	
	case 'deck of legends':
		output += 'um cartão customizado';
		
	case 'collector\'s deck':
		output += 'uma versão assinda de Exploding Kittens deck, ';
	
	case 'nsfw deck':
		output += 'uma cópia de NSFW (Not Safe for Work) Exploding Kittens card game e';
		
	default:
		output += 'uma cópia de Exploding Kittens card game.';
	
}

 console.log(output);


 var x = 1;
 while(x <= 10000) {
	console.log( x + ' missiping!');
	x++;
}
 */


// Objects JavaScript
var produto = {nome: 'Sapato', preco: 150};

var formulaImpostoA = function (preco) {
    return preco * 0.1;
};

var formulaImpostoB = function (preco) {
    return preco * 0.2;
};

var calcularPreco = function (produto, formulaImpostoA) {
    return produto.preco + formulaImpostoA(produto.preco);
};

// console.log(calcularPreco(produto, formulaImpostoA));
// console.log(calcularPreco(produto, formulaImpostoB));


var getIdade = function (extra) {
    return extra ? this.idade + extra : this.idade;
};

var pessoa = {
    nome: 'Danilo Silva Rodrigues',
    idade: 27,
    dataDeNascimento: '1990-12-31',
    setNome: function (nome) {
        this.nome = nome;
    },
    setIdade: function (idade) {
        this.idade = idade;
    },
    setDataDeNascimento: function (data) {
        this.dataDeNascimento = data;
    },
    getNome: function () {
        return this.nome;
    },
    getIdade: function () {
        return this.idade;
    },
    getDataDeNascimento: function () {
        return this.dataDeNascimento;
    }
};

// console.log(getIdade());
// console.log(pessoa.getIdade());

// Call and Apply

// console.log(getIdade());
// console.log(pessoa.getIdade(4));
// console.log(getIdade.call(pessoa, 7));
// console.log(getIdade.apply(pessoa, [7]));

// Fuções Construtoras vs Funções Fábrica

// Funções Fábricas
var createPeople = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

console.log(createPeople('danilo', 27));

// Funções Construtoras
var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

console.log(new Pessoa('danilo', 27));
