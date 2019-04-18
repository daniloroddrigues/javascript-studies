// Métodos

var doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

var n = "0123456789";
console.log(n.charAt(2) - 1);
// → 1

n = "" - 1;
console.log(typeof n);
// → -1 number

n = "" + 1;
console.log(typeof n);
// → "1" string

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
// → ["Mack", "the", "Knife"]
console.log(mack.join(" "));
// → Mack the Knife
console.log(mack.pop());
// → Knife
console.log(mack);
// → ["Mack", "the"]

var utilitsArray = function(args) {
    var lo
}