/**
 * Created by damty on 09/01/2018.
 */


// RFC 2822 - https://www.ietf.org/rfc/rfc2822.txt
// ISO 8601 - https://www.w3.org/TR/NOTE-datetime

// var data1 = new Date();
// var data2 = Date.parse('2014/12/25');
// var data3 = Date.parse('12/25/2014');
// var data4 = Date.parse('25/12/2014');
//
// var data5 = new Date('2014-12-25T10:30:00');
// var data6 = new Date('2014-12-25T10:30:00-02:00');
//
//
// var data7 = new Date(2014, 12, 25);
var natal = new Date(2014, 12, 25, 10, 30, 0);

// console.log(data1);
// console.log(data2); // devolve em milisegundos 1419472800000
// console.log(data3); // devolve em milisegundos 1419472800000
// console.log(data4); // NaN
// console.log(data5); // Thu Dec 25 2014 10:30:00 GMT-0200 (Horário brasileiro de verão)
// console.log(data6); // Thu Dec 25 2014 10:30:00 GMT-0200 (Horário brasileiro de verão)
// console.log(data7); // Sun Jan 25 2015 00:00:00 GMT-0200 (Horário brasileiro de verão)
console.log(natal); // Sun Jan 25 2015 10:30:00 GMT-0200 (Horário brasileiro de verão)
console.log(natal.getYear()); // anos 90, 91, 98.... 99 - ano final 115;
console.log(natal.getFullYear()); // 2015
console.log(natal.getMonth()); // 0
console.log(natal.getDay()); // 0
console.log(natal.getDate()); // 25


