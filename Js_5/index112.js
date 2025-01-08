var nombreA = DonneUnNombre();
console.log('nombre A est ' + nombreA);

var nombreB = DonneUnNombre();
console.log('nombre B est ' + nombreA);

var total = DonneUnNombre();
console.log('Somme est ' + total);

function DonneUnNombre(){
    let wait = Math.floor(Math.random() * 7);
    for (let i = 1; i < wait; i++){
        sleep(1000); console.log(i+ 'seconde');
    }
    return Math.floor(Math.random() * 100);
}