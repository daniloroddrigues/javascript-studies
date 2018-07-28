/**
 * Created by damty on 04/01/2018.
 */


// -------- Create array simple
// var cars = ['Ka', 'Corsa', 'Palio'];
// console.log(cars);

// -------- Or

// var cars = [];
// cars[0] = 'Ka';
// cars[1] = 'Corsa';
// cars[2] = 'Palio';
// console.log(cars);

// -------- Operator new Array

// var cars = new Array('Ka', 'Corsa', 'Palio');
// var cars = new Array(10);
// console.log(cars);

var carsCreate = (function () {
    var _cor;
    var _logo;
    var _cars = [];
    var _pos = 0;
    var _total = 0;

    // Insert Color car
    var _setCor = function (item) {
        _cor = item;
    };

    // Get Color car
    var _getCor = function () {
        return _cor;
    };

    // Insert name mark
    var _setLogo = function (item) {
        _logo = item;
    };

    // Get name mark
    var _getLogo = function () {
        return _logo;
    };

    // Add item in array cars
    var _add = function (item) {
        _cars.push(item); // adiciona no final do array
        return _cars;
    };

    // Delete final item of the array
    var _delete = function () {
        _cars.pop(); // deleta o item do final do array
        return _cars;
    };

    // Get cars - print array with all value array
    var _getCars = function () {
        return _cars;
    };

    // Add after item array cars
    var _addFirstItem = function (item) {
        _cars.unshift(item); // insere um item no começo do array
        return _cars;
    };

    // Delete after item array cars
    var _deleteFirstItem = function () {
        _cars.shift(); // deleta o primeiro item do array
        return _cars;
    };

    // Find position array ('Ferrari') = return pos
    var _findPosition = function (item) {
        _pos = _cars.indexOf(item); // retorna a posição do array

        if (_pos === -1)
            _pos = 'item nao encontrado';

        return _pos;
    };

    // Get full size array
    var _getLengthCars = function () {
        return _cars.length;
    };

    // delete or add elements in array cars using splice(pos, delete, add)
    // Adiciona remove
    var _deleteAndAddPosSplice = function (pos, del, add) {

        if (add == undefined)
            _cars.splice(pos, del);
        else
            _cars.splice(pos, del, add);

        return _cars;
    };

    // Order ASC cars
    var _order = function () {
        _cars.sort();
        return _cars;
    };


    // Ordena pelo preço do menor para o maior
    var _orderPerPriceASC = function () {

        _cars.sort(function (a, b) {
            return a.price - b.price
        });

        return _cars;

    };

    var _orderPerPrice = function () {

        _cars.sort(function (a, b) {
            return b.price - a.price;
        });

        return _cars;
    };

    // Print elements of the cars in console
    var _printElements = function () {
        _cars.forEach(function (element) {
            console.log(element);
        });
    };

    // Add Object key and value in array cars
    var _addObjectCar = function (model, name, color, price) {
        _cars.push({model: model, name: name, color: color, price: price});
        return _cars;
    };

    // Filter cars by model - return new array with model selected
    var _filterCarsByModel = function (model) {
        var newCarsByModel = [];

        // classic model foreach
        _cars.forEach(function (element) {
            if (element.model === model)
                newCarsByModel.push(element);
        });

        return newCarsByModel;
    };


    // Filter car by model witch function filter javascript
    var _filterCarsByModelFilter = function (model) {
        // syntax very simple
        var newCarsByModel = _cars.filter(function (element) {
            return element.model == model;
        });

        return newCarsByModel;
    };


    // Filtra todos os elementos for da marca passada por paramentro
    var _filterEvery = function (model) {

        var valueEvery = '';
        _cars.every(function (element) {
            // Hey todos os carros são da marca Selecionada (ex: Ford, Volvo)? se for verdadeira retorna true
            // se for falso retorna false
            return valueEvery = element.model === model;
        });

        return valueEvery;

    };

    // Se existe carros da marca passada por parâmetro (ex: Volvo, Ford, ...);
    // Os valore retornado são verdadeiros ou falso (true, false)
    var _filterSome = function (model) {

        var valueSome = '';

        _cars.some(function (element) {
            return valueSome = element.model === model;
        });

        return valueSome;
    };


    // Map retorna um novo array com os valores selecionados
    // uma repetição dos valores que existe no array.
    var _filterMap = function () {

        var valueMap = [];

        _cars.map(function (element) {
            return valueMap.push(element.model.length);
        });

        return valueMap;
    };

    // Reduce prev = valor de início de cur = valor atual ou seja price(preço);
    // Quando você quer fazer uma operação que exija soma.
    // Acumulação
    var _princeReduce = function (pricePerModel) {

        var valueReduce = 0;
        var filterModel = [];

        // Se caso não for passado parâmetro para a função
        // retorna o valor total dos preços dos carros
        if (pricePerModel === undefined || pricePerModel === ''
            || pricePerModel === null) {

            _cars.reduce(function (prev, cur) {
                return valueReduce = prev + cur.price
            }, 0);

        } else {

            // Ou volta o preço por marca passada por parâmetro (ex: 'Volvo', 'Ford' ...);
            filterModel = _cars.filter(function (element) {
                return element.model === pricePerModel;
            });

            filterModel.reduce(function (prev, cur) {
                return valueReduce = prev + cur.price;
            }, 0);

        }

        return 'R$ ' + valueReduce.toFixed(2);

    };


    // Retorna um novo array
    //   0      1       2
    // ['Ka', 'Gol', 'Corsa'];
    // cars.slice(0, 2);
    //
    // ['Ka', 'Gol']; novo array
    var _sliceArray = function (start, stop) {

        if (stop === undefined || stop === null) {
            _cars.slice(start);
        } else {
            _cars.slice(start, stop);
        }

        return _cars;
    };

    // Inverte o Array original e permanece.
    var _reverceArray = function () {
        return _cars.reverse();
    };

    // Methods
    return {
        setCor: _setCor,
        getCor: _getCor,
        setLogo: _setLogo,
        getLogo: _getLogo,
        add: _add,
        delete: _delete,
        getCars: _getCars,
        addFirstItem: _addFirstItem,
        deleteFirstItem: _deleteFirstItem,
        findPosition: _findPosition,
        getLengthCars: _getLengthCars,
        deleteAndAddPosSplice: _deleteAndAddPosSplice,
        order: _order,
        printElements: _printElements,
        addObjectCar: _addObjectCar,
        filterCarsByModel: _filterCarsByModel,
        filterCarsByModelFilter: _filterCarsByModelFilter,
        filterEvery: _filterEvery,
        filterSome: _filterSome,
        filterMap: _filterMap,
        princeReduce: _princeReduce,
        sliceAttay: _sliceArray,
        reverceArray: _reverceArray,
        orderPerPriceASC: _orderPerPriceASC,
        orderPerPrice: _orderPerPrice
    }

})();

var motosCreater = (function () {

    var _motos = [];

    var _add = function (model, name, color, price) {
        _motos.push({model: model, name: name, color: color, price: price});
        return _motos;
    };

    var _getMotos = function () {
        return _motos;
    };

    return {
        add: _add,
        getMotos: _getMotos
    }

})();


var concatItems = (function () {

    var _item = function (obj1, obj2) {
        return obj1.concat(obj2);
    };

    return {
        item: _item
    }

})();


// Functions calcular
var calcTotalProducts = (function () {

    var total = 0;
    var valueCalc;


    var _calc = function (object, model) {


        if (typeof object === 'object') {

            if (model === undefined || model === null) {

                valueCalc = 0;

                object.reduce(function (prev, cur) {

                    return valueCalc += prev + cur.price;

                }, 0);

            } else {

                valueCalc = [];

                valueCalc = object.filter(function (element) {
                    return element.model === model;
                }).reduce(function (prev, cur) {
                    return total += prev + cur.price;
                }, 0);

            }

        }

        return 'Total: ' + model + ' R$ ' + valueCalc.toFixed(2);

    };


    // Ordena ASC do menor para o maior
    var _orderPerPriceASC = function (object) {

        if (typeof object === 'object') {

            object.sort(function (a, b) {
                return a.price - b.price;
            });

        }

        return object;
    };

    // Ordena do maior para o menor
    var _orderPerPrice = function (object) {

        if (typeof object === 'object') {
            object.sort(function (a, b) {
                return b.price - a.price;
            });
        }

        return object;
    };

    var _joinCSV = function (object) {
        return object.join(',');
    };

    return {
        calc: _calc,
        orderPerPriceASC: _orderPerPriceASC,
        orderPerPrice: _orderPerPrice,
        joinCSV: _joinCSV
    }

})();


// console.log(carsCreate.setCor('Verde'));
// console.log(carsCreate.getCor());
// console.log(carsCreate.add('Palio'));
// console.log(carsCreate.add('Corola'));
// console.log(carsCreate.add('Pajero'));
// console.log(carsCreate.add('Ferrari'));
// console.log(carsCreate.findPosition('Ferrari')); // procura a posição do elemento 'Ferrari' de dentro do array
// console.log(carsCreate.getLengthCars()); // retorna a quantidade de elementos no array.

// var pos = carsCreate.findPosition('Ferrari');
// console.log(carsCreate.deleteAndAddPosSplice(pos, 1));
// console.log(carsCreate.order());
// carsCreate.printElements();

console.log(carsCreate.addObjectCar('Ford', 'Ka', 'Black', 65900));
console.log(carsCreate.addObjectCar('Ford', 'Ka Sedan', 'Red', 75000));
console.log(carsCreate.addObjectCar('Ford', 'New Fiesta', 'Black', 85000));
console.log(carsCreate.addObjectCar('Volvo', 'XC60', 'Black', 175830));
console.log(carsCreate.addObjectCar('Volvo', 'XC40', 'Silver', 145900));
console.log(carsCreate.addObjectCar('Volvo', 'XC90', 'White', 350475));

// carsCreate.printElements();
// console.log(carsCreate.filterCarsByModel('Ford')); - classic model function filter
// console.log(carsCreate.filterCarsByModelFilter('Volvo'));// Filtra por modelo do carro: nessa retorna todos os carros da marca volvo
// console.log(carsCreate.filterEvery('Ford'));// Todos os carros são da marca Ford
// console.log(carsCreate.filterSome('Volvo'));
console.log(carsCreate.filterMap());
console.log(carsCreate.princeReduce());
console.log(carsCreate.princeReduce('Volvo'));
console.log(carsCreate.princeReduce('Ford'));
console.log('sliceArray');
console.log(carsCreate.sliceAttay(0, 2));

console.log(motosCreater.add('Kawasaki', 'Ninja ZX-10RR', 'Red', 185000));
console.log(motosCreater.add('Kawasaki', 'Ninja 300', 'Blue', 285000));
console.log(motosCreater.add('Kawasaki', 'Ninja ZX-10R', 'Silver', 385930));
console.log(motosCreater.add('MV Agusta', 'Brutale 1090RR', 'Silver', 65900));
console.log(motosCreater.add('MV Agusta', 'F4', 'White', 69900));
console.log(motosCreater.add('MV Agusta', 'F3 800', 'Red', 57900));

var allVeiculos = concatItems.item(motosCreater.getMotos(), carsCreate.getCars());

console.log(allVeiculos);
console.log(calcTotalProducts.calc(allVeiculos, 'Kawasaki'));

console.log(calcTotalProducts.orderPerPriceASC(allVeiculos));
// console.log(calcTotalProducts.joinCSV(allVeiculos));
// console.log(calcTotalProducts.orderPerPrice(allVeiculos));
