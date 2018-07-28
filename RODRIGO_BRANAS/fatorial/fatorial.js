/**
 * Created by damty on 13/01/2018.
 */

bookTitle = 'Litter book';
console.log(bookTitle);

var displayBook = (function () {
    var _bookTitle = 'Small book';

    var _getBookTitle = function () {
        return _bookTitle;
    };

    return {
        getBookTitle: _getBookTitle
    };
})();

console.log(displayBook.getBookTitle());
console.log(bookTitle);