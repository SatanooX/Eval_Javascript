// Start Using Javascript

// Partie 0

// Mini-Exrcice

function finder(recherche) {
    var tabs = ["Frank", "Sonny", "Dan", "Florian", "Tony"]
    var find = prompt("Rechercher Prenom.")
    var del = "Sa ne fonctionne pas"
    console.log(tabs)
    var recherche = tabs.find((tab) => {
        return tab === find;
    })
    if (tabs.indexOf(find) != -1) {
        console.log(recherche) //+ " est bien dans le tableux")
        del = tabs.indexOf(find);
        tabs.splice(del, 1);
        alert(recherche + " trouvé!");
        //console.log(tabs.pop(find) + " etait le dernier nom du tableaux")
        console.log(tabs)
    } else {
        alert(find + " ne pas present dans le tableau, ajoutez et ressayez");
    }
}
finder()
/*
function finder2(recherches) {
var prenoms = ["Frank", "Sonny", "Dan", "Florian", "Tony"]
var search = prompt("Rechercher Prenom.")
var sorry = "Sa ne fonctionne pas"

var recherche = prenoms.find(item => {
    if (search === item) return true;
});
console.log(recherche) //+ " est bien dans le tableux")
    var result = prenoms.filter(search);
    console.log(result)
}
//finder2()
*/