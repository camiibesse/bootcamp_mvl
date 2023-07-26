var cantidadDeGatos = 3; 
var emojisDeGatos = ["😺", "😸", "😹"]; 
for (var i = 1; i <= cantidadDeGatos; i++) { 
  var emoji = emojisDeGatos[(i - 1) % 3]; 
  console.log("A: Gato #" + i + ": " + emoji); 
}   
