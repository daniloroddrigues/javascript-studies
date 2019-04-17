// #Mínimo

// 0, 1
function min(vmin, vmax) {
  // 10 < 1
  if (vmin < vmax) {
    return console.log(vmin + " < " + vmax + " = " + vmin);
  } else {
    return console.log(vmin + " > " + vmax + " = " + vmax);
  }
}

min(10, 1);

// Usando Recurção
function min(vmin, vmax) {
  if (vmin < vmax) {
    return vmin;
  } else {
    return min(vmax, vmin);
  }
}

min(0, 10); // 0
min(10, 0); // 0

// Min Usando Closure + Recurção
var min = function(vmin, vmax) {
  var localVmin = vmin;
  var localVmax = vmax;

  // 20 < 10
  // 10 < 20
  if (localVmin < localVmax) {
    return localVmin;
  } else {
    // 10, 20
    return min(localVmax, localVmin);
  }
};

min(20, 10); // 10
min(-20, 10); // -20
