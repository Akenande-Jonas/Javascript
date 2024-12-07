var compteur = 0;
var compteur2 = 0;

var MaDiv = document.getElementById("Methode2");
MaDiv.addEventListener("click", UneProcedureQuiChangeLeText);

MaDiv = document.getElementById("Methode3");
MaDiv.addEventListener("mouseover", UneProcedureQuiSurvole);

MaDiv = document.getElementById("Methode4");
MaDiv.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement) {
    evenement.target.innerHTML = "J'ai appuyé sur : " + evenement.key;
}

function UneProcedureQuiChangeLeText(evenement) {
    var div = evenement.target;
    if (div.className === "div1") {
        div.className = "div4";
    } else {
        div.className = "div1";
    }
}

function UneProcedureQuiSurvole(evenement) {
    var div = evenement.target;
    if (div.className === "div2") {
        div.className = "invisibility";
    } else {
        div.className = "div2";
    }
}