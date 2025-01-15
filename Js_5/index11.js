

function envoyerUntruc() {
    let valeurDeMonChamp = document.getElementById("leNom");
    let valeurDeMonChamp2 = document.getElementById("lePrenom");
    fetch("http://192.168.65.179:8080/AddMedecin",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"nom": valeurDeMonChamp.value,"prenom":valeurDeMonChamp2.value})
        })
        .then(function(res){ 
            return res.json(); // Convertir la réponse en JSON et l'envoi à then data 
        })
        .then(function(data) { 
            let ladiveMagique = document.getElementById("idQuelconque");
            ladiveMagique.innerHTML = "Bien ajouté à l'ID N°"+data.insertId; 
        })
        .catch(function(err){ console.log(err) })  
}

var monBouton = document.getElementById("lebuton"); 
monBouton.addEventListener("click", envoyerUntruc);


fetch('http://192.168.65.179:8080/Route1', {
    headers: {
        Accept: 'application/json'
    }
}).then(response => {
    if (response.ok) {
        return response.json()
    } else {
        throw new Error('Erreur serveur', { cause: response })
    }
}).then(result => {
    console.log('La liste des articles : ', result)
    let ladiveMagique = document.getElementById("idQuelconque");
    ladiveMagique.innerHTML = JSON.stringify(result);
}).catch(error => {
    console.error('Une erreur est survenue', error)
})

