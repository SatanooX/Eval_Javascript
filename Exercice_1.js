// JavaScript Document

var saisir, PU, QTECOM, PAP, PORT, REM, TOT, TPORT; // Prix par unité, Quantité D'un commande, Prix à payer, Port Et Remise
PU = window.prompt("Veullez Entrez Un prix Unitaire");
QTECOM = window.prompt("Veillez Saisir Les Quantité Commandée")
PORT = 0.02
TOT = PU * QTECOM
TPORT = TOT * PORT
REM = TOT * 5 / 100
REMT = TOT * 10 / 100
if (TPORT < 6) {
    TPORT = 6
}
if (TOT > 500) {
    document.getElementById('shopping').innerHTML = "Le prix total : " + TOT + "€"   //Les Conditions
    document.getElementById('port').innerHTML = "Le frais de port est de : " + 0 + "€"
    document.getElementById('remise').innerHTML = "Mais vous avez une remise de : " + REMT + "€";
    PAP = TOT - REMT
    document.getElementById('total').innerHTML = "Le prix a payer : " + PAP;
} else if (TOT >= 100 && TOT <= 200) {
    document.getElementById('shopping').innerHTML = "Le prixx total : " + TOT + "€"
    document.getElementById('port').innerHTML = "Le frais de port est de : " + TPORT + "€"
    document.getElementById('remise').innerHTML = "Vous avez une remise de : " + REM + "€";
    PAP = TOT - REM + TPORT
    document.getElementById('total').innerHTML = "Le prix a payer : " + PAP;
} else if (TOT < 100) {
    document.getElementById('shopping').innerHTML = "Le prixo totale : " + TOT + "€"
    document.getElementById('port').innerHTML = "Le frais de port est de : " + TPORT + "€"
    document.getElementById('remise').innerHTML = "Pas de remise :" + 0 + "€";
    PAP = TOT + TPORT
    document.getElementById('total').innerHTML = "Le prix a payer : " + PAP;
} else if (TOT < 500) {
    document.getElementById('shopping').innerHTML = "Le prixz totale : " + TOT + "€"
    document.getElementById('port').innerHTML = "Le frais de port est de : " + TPORT + "€"
    document.getElementById('remise').innerHTML = "Vous avez une remise de : " + REMT + "€";
    PAP = TOT - REMT + TPORT
    document.getElementById('total').innerHTML = "Le prix a payer : " + PAP;
} else {
    console.log("Merci")
}