//Exercice : Cours Initiation Javascript - Les fonctions
const FIRST_NAME = 'Julien'
let getName = prompt('Donnez votre nom :')

function showName() {
  return FIRST_NAME
}

console.log (`Bonjour ${showName()} ${getName}`)