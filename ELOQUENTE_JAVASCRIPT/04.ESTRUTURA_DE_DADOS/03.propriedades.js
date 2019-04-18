function triangle(n) {
  var localN = n;
  var hash = "#";
  var str = "";
  var listHash = [];

  if (localN == undefined || localN == null) {
    localN = 8;
  }

  for (var i = 0; i < localN; i++) {
    listHash.push((str += hash));
  }

  var showListHash = function() {
    for (var i = 0; i < listHash.length; i++) {
      console.log(listHash[i]);
    }
  };

  return {
    showListHash: showListHash
  };
}

var t = triangle(10);
console.log(t.showListHash);
t.showListHash() // # ...

t["showListHash"]
//   ƒ () {
//     for (var i = 0; i < listHash.length; i++) {
//       console.log(listHash[i]);
//     }
//   }
