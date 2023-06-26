//Exercice : Cours Initiation Javascript - Les fonctions 
//Mettre le début d'un mot en majuscule et le reste en minuscule

let WORD = prompt("Taper un mot : ")

function wordCase(word) {
    let fistLetterWord = word.substring(0,1)
    let otherLetterWord = word.substring(1)
    console.log("Votre mot :  " + fistLetterWord.toUpperCase() + otherLetterWord.toLowerCase());
}

wordCase()