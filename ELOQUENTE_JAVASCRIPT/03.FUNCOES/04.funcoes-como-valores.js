// Funcões com valores
// pesqui
var safeMode = true;

var launchMisseles = function(value) {
  console.log(missilesSystem.launch("now"));
  console.log(value);
};

if (safeMode)
  launchMisseles = function(value) {
    console.log("safeMode: " + value);
  };
