/**
 * Created by damty on 08/01/2018.
 */

var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = '(63) 9393-9999';

console.log(regExp.test(telefone));