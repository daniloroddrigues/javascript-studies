// Quebrando a execução de um Loop
// uma condição de parada

for (var i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log("par: " + i);
  } else if (i % 20 === 7) {
    console.log("impar: " + i);
    break;
  } else {
    console.log("impar: " + i);
  }
}
