//Exercice : Cours Initiation Javascript - Les fonctions 
//Calcul de volume

const height = prompt('Hauteur du parallélépipèdes ');
const width = prompt('Largeur du parallélépipèdes ');
const depth = prompt('Profondeur du parallélépipèdes ');;

const volume = cube(height, width, depth);


function cube(height,width,depth) {
  return height * width * depth
}
console.log (`Le volume du parallélépipèdes est ${volume}`)