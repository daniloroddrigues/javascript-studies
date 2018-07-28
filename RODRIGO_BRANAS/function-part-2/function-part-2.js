/**
 * Created by damty on 04/01/2018.
 */


// Escopo Global - tudo declarado no mesmo local;
/**
 var counter = 0;
 var add = function () {
    return ++counter;
};

 console.log(add());
 console.log(add());
 console.log(add());

 var itens = [];
 var add = function (item) {
    itens.push(item);
    return itens;
};

 console.log(add('A'));
 console.log(add('B'));
 console.log(add('C'));

 console.log(add());
 */

/**
 // Object counter;
 var counter = {
        value: 0,
        add: function () {
            return ++this.value;
        }
    };

 console.log(counter.add());
 console.log(counter.add());
 console.log(counter.add());

 //  Object Itens
 var itens = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};

 console.log(itens.add('A'));
 console.log(itens.add('B'));
 console.log(itens.add('C'));

 console.log(counter.add());
 */

/**
 //Posso acessar a variavel dessa forma
 var counter = {
    value: 0,
    add: function () {
        return ++this.value;
    }
};

 console.log(counter.add());
 console.log(counter.add());
 console.log(counter.add());

 counter.value = undefined;
 console.log(counter.add()); // NaN
 */

//** Factory function
// var createCounter = function () {
//     var value = 0;
//     return {
//         add: function () {
//             return ++value;
//         }
//     };
// };

// var counter = createCounter();

// console.log(counter.value);
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());

//** Constructor Function operation New
// var Counter = function () {
//     var value = 0;
    // for public use 'this'
//     this.add = function () {
//         return ++value;
//     };
// };

// var counterNew = new Counter();
// console.log(counterNew.value);
// console.log(counterNew.add());
// console.log(counterNew.add());
// console.log(counterNew.add());

//** Module Pattern
//var counter = (function () {
//        var value = 0;

//        return {
//            add: function () {
//                return ++value;
//            },
//            reset: function () {
//                value = 0;
//            }
//        };

//})();// 'instancia' altomaticamente sem precisar criar um outro objeto.

// console.log(counter.value);
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.add());
// counter.reset();
// console.log(counter.add());

//** Revealing Module Pattern
var counter = (function () {

        // 'private' use _
        var _value = 0;

        // 'private'
        var _add = function () {
            return ++value;
        };

        // 'private'
        var _reset = function () {
            value = 0;
        };

        // functions public
        return {
            add: _add,
            reset: _reset
        }

})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());