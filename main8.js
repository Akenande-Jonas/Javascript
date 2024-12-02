// Caractère
var MaDiv = document.getElementById("MaDiv");
MaDiv.innerHTML = "Coucou je suis là!";
// Fonction
function ModifText(texte){
alert("attention changement de Madiv");
MaDiv.innerHTML=texte;
}
// Fonction appliqué
ModifText("Coucou je suis là!");