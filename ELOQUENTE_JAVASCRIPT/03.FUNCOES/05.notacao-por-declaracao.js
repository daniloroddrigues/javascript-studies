// Notação por declaração

function square(x) {
  return x * x;
}


// Dessa forma ainda execuda a função future
// porque são movidas para o todo
console.log(future());

function future() {
  return "x * x";
}
