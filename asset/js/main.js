let km = prompt (`quanti kilometri devi fare?`);
let età = prompt (`quanti anni hai?`);
console.log(età);
console.log(km);
//sconto del 20% per i minorenni e sconto del 40% per gli over 65
//calcolo da rivedere
if (età < 18) {
    var risultato = (`${((km*0.21)*20)/100}`);
} else if (età > 65) {
    var risultato = (`${((km*0.21)*40)/100}`);
} else {
    var risultato = (`${km*0.21}`);
}
console.log(risultato);
risultato = Math.round(risultato * 10) / 10;
console.log(risultato);
document.getElementById("element").innerHTML = `il prezzo da pagare è: €${risultato}`;