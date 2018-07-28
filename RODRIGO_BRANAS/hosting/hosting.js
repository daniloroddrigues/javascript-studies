/**
 * Created by damty on 13/01/2018.
 */

sum(2, 2);

// Interpretador javascript sobe toda e qualquer que começe
// com function
function sum(x, y) {
    var total = x + y;
    return console.log(total);
}

heyGretting();

function heyGretting() {
    // var greatting;  o interpretador javascript sobe a variável para cima, mas sem declarala
    // por isso aque ainda fica undefined.
    console.log(gretting);
    var gretting = "Hey";
}

// function expression
var car = function () {
    return 'Hey car!';
};

console.log(car());

console.log(cars);
var cars = (function () {
    return 'Hey cars!';
})();

console.log(cars);
