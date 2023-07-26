var cantidadDeGatos = 16; 
var cantidadDePasos = 3; 
var emojiDeGato = "🐈"; 
var emojiDeGatoFeliz = "🐈😺";
var emojiDePaso = "🐾";
for (var i = 1; i <= cantidadDeGatos; i++) {
  var pasos = "";
  for (var j = 1; j <= cantidadDePasos; j++) {
    pasos += emojiDePaso;
  }
  var gato = "";
  if (i % 2 == 0) {
    gato = emojiDeGatoFeliz;
  } else {
    gato = emojiDeGato;
  }
  console.log("Gato #" + i + ": " + gato + " " + pasos);
}
