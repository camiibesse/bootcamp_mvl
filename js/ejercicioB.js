var cantidadDeGatos = 7; 
var cantidadDePasos = 4;
var emojiDeGato = "🐈"; 
var emojiDePaso = "🐾"; 
for (var i = 1; i <= cantidadDeGatos; i++) {
  var pasos = ""; 
  for (var j = 1; j <= cantidadDePasos; j++) { 
    pasos += emojiDePaso; 
  }
  console.log("Gato #" + i + ": " + emojiDeGato + " " + pasos); 
}
