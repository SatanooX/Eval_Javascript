// JavaScript Document
/*
let tab = [25, 45, 69, 45, 54, 56,75, 45,700];
var man, max;
    max = tab[0]; 
for(i=0;i<tab.length;i++) {
    if (tab[i] >= max) {
        max = tab[i];
    }
}
console.log(max)

*/
var saisir;
let tab = [];
while (true) {
    saisir = window.prompt("Veullez Saisir Autant de nombres que vous desirez\n Utilisez '0' pour sortir du boucles!");
    if (saisir != "0") {
        tab.push(saisir) // Mettre les saisir dans le tableaux
    } else {
        break;
    }

}

var min, max;
min = tab[0];
max = tab[0];
for (i = 0; i < tab.length; i++) {
    if (tab[i] < min) {
        min = tab[i]
    } else {
        max = tab[i];
    }
}
console.log("Voici le Nombre Minimum : " + min)
console.log("Voici le Nombre Maximum : " + max)
