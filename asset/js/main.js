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
//calcolo dello sconto

let sconto = km*0.21 - risultato;
console.log(sconto);
console.log(risultato);
sconto = Math.round(sconto * 10) / 10;
console.log(risultato);
if (età < 18){
    document.getElementById("element").innerHTML = `il prezzo da pagare è: €${sconto}`;
}
else if (età > 65){
    document.getElementById("element").innerHTML = `il prezzo da pagare è: €${sconto}`;
}
else{
    document.getElementById("element").innerHTML = `il prezzo da pagare è: €${risultato}`;
}