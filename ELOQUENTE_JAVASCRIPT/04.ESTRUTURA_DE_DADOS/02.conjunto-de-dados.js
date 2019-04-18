var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]); // 3
console.log(listOfNumbers[1 - 1]); // 2
console.log(listOfNumbers[listOfNumbers.length - 1]); // 11

function getLastItem(args) {
  var localArgs = args;
  return localArgs[localArgs.length - 1];
}

// closure
var getLastItem = function(args) {
  var localArgs = args;
  return localArgs[localArgs.length - 1];
};

getLastItem(args => {
  return localArgs[localArgs.length - 1];
});
