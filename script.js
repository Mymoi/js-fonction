//Exercice : Cours Initiation Javascript - Les fonctions 
//DEFI : calcul de prix lors de solde, d'une boutique en ligne

/* Prix des produits sans réduction */
let chaise = 120.50
let table = 1200.99
let vase = 420.01
let canape = 12585.55

// let nom = "ta voiture est jaune"
// const regex2 = /jaune/i;
/* Fonction qui calcul le prix soldé : en paramètres le produit et le taux de réduction */
function reducPrice(chaise, rate) {
let calcPrice 
calcPrice = chaise * (1-rate)
//console.log (` Le prix avec réduction est ${newCalcPrice.replace(regex, ',')} € `)
return calcPrice
}
// let priceProduct = prompt ("Donner le prix avant reduction, de la chaise : ")
// reducPrice(priceProduct)
//let product = prompt ("Quel est le produit : ")

//let newPrice = reducPrice(chaise, 0.25)
let euroPrice = reducPrice(chaise, 0.25) + "€"
let newEuroPrice = euroPrice.replace(".", ",")

console.log(`Le prix de la chaise avec réduction est ${newEuroPrice} `)


