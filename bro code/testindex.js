

 /* javsscript practising */

let guess;
let count = 0; 
let answer;

document.getElementById("myBtn").onclick = function(){
  
    answer = document.getElementById("myGuess").value;
    guess = Math.round(Math.random() * 6 + 1);
    console.log(guess);
    count++;

    if(answer > guess){
        console.log(` '${guess}' your guess is higher`);
    }
    else if(answer < guess){
        console.log(`'${guess}' your guess is lower`);
    }
    else{
        console.log(`${count}) your take ${count} time to say answer correctly`);
    }
}