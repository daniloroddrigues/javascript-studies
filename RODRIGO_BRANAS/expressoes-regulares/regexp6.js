/**
 * Created by damty on 08/01/2018.
 */

var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
var telefone1 = '(63) 99393-9999';
var telefone2 = '(63) 9393-9999';

console.log(regExp.test(telefone1));
console.log(regExp.test(telefone2));