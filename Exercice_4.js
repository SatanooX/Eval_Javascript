// Start Using Javascript

// Mini-Exrcice
var Jeune, Moyen, Vieux;
Jeune = []
Moyen = []
Vieux = []
var saisir, centaine, a;
a = 0
centaine = 100;

while (true) {       //Boucles
    saisir = parseInt(window.prompt("Veullez Saisir Autant de ages que vous desirez"));  // Conditions commerce apres
    if (saisir >= centaine) {
        console.log("Vous avez " + saisir + " ans" + " / " + "Ancien")
        break;
    } else if (saisir < 20) {
        Jeune.push(saisir)
        //console.log("Category Jenune\n=========================")
        console.log("Vous avez " + saisir + " ans" + " / " + "Jeune")
    } else if (saisir >= 20 && saisir <= 40) {
        Moyen.push(saisir)
        //console.log("Category Moyens\n=========================")
        console.log("Vous avez " + saisir + " ans" + " / " + "Moyens")
    } else if (saisir > 40) {
        Vieux.push(saisir)
        //console.log("Category Vieux\n=========================")
        console.log("Vous avez " + saisir + " ans" + " / " + "Vieux")
    }
    a++;
}
//  Le Comptage!
window.alert("Voici les ages saisir et leurs categorie respectifs \n======================================\n" + "Jeune : Vous avez entrez " + (Jeune.length) + " age(es)\n" + "Moyen : Vous avez entrez " + (Moyen.length) + " age(es)\n" + "Vieux : Vous avez entrez " + (Vieux.length) + " age(es)\n" + "La chance qu'on a un ancien dans le groupe!");
