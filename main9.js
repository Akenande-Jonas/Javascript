function ModifText(texte){
    var div=document.getElementsByName("div");
    alert("je vais modifier les div");
    for(var i=0;i<div.length;i++){
    div[i].innerHTML=texte;
    }
    }
    ModifText("Hello");