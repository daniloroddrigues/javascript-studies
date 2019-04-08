// A pilha de camada
// funções são colocadas na pilha de execução
// call stack (pilha de chamadas)

// loop de funções
// out of stack space
// too much recursion
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??