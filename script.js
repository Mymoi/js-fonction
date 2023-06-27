//Exercice : Cours Initiation Javascript - Les fonctions 
//DEFI : calcul de prix lors de solde, d'une boutique en ligne

/* Prix des produits sans réduction */
let chaise = 120.50
let table = 1200.99
let vase = 420.01
let canape = 12585.55

let rate = 0.25
let product = chaise

/* Fonction qui calcul le prix soldé : en paramètres le produit et le taux de réduction */
function reducPrice(product, rate) {
  let calcPrice 
  calcPrice = product * (1-rate)
  return calcPrice
}

let chaisePrice = reducPrice(chaise, 0.25)
// console.log(`Le prix de la chaise :
// sans réduction est ${chaise}€
// avec réduction est ${chaisePrice}€ `)
// let priceProduct = prompt ("Donner le prix avant reduction, de la chaise : ")
// let reducPorcentage = prompt ("Donner le pourcentage de réduction : ")
//  function rate (n) {
//   if (Number.isInteger(n)) {
//     return n / 100
//   }
//   else if (Number.isNaN(n)) {
//     console.log ("Ce n'est pas un nombre")
//   }
//   else return
// }



// Prix avec les précisions : , et €
function euroPrice (chaisePrice) {
  let euroChaisePrice = chaisePrice + " "
  let newChaisePrice = euroChaisePrice.replace (".", ",")
  return newChaisePrice
}
//console.log(`Chaise prix sans réduction : ${chaise} € `)
//avec réduction est ${euroPrice (chaisePrice)}€ `)


//Prix arrondi à l'entier supérieur
function roundSalePrice (chaisePrice) {
  let roundChaisePrice = Math.ceil(chaisePrice)
  return roundChaisePrice
}
//console.log(`Chaise soldé à prix rond : ${roundSalePrice (chaisePrice)} € `)

// Calcul du prix soldé pour chaque produit : chaise table vase canapé
const listProduc = ["chaise","table","vase","canape"]
const prices = [120.50,1200.99,420.01,12585.55]
let initPrice
let item
let priceSale
let reducRate = 0.25
console.log(`Voici les produits soldés à ${reducRate * 100} % :`) 
for (let i = 0; i < listProduc.length; i++) {
  item = listProduc[i]
  initPrice = prices[i] * 1
  priceSale = reducPrice(initPrice, reducRate)
  roundPrice = roundSalePrice (priceSale)
  console.log(`${item} : ${roundPrice} € ` )
}
