//Finnding elements
const form = document.querySelector(`form`);
const container=document.querySelector(`.container-element`);
const input = form.querySelector(`#guessingGame`);
const button = form.querySelector(`#myButton`);
const para1= form.querySelector(`#para1`);
const remainAttemps= form.querySelector(`#ramainAttemps`);
const lostWon= document.createElement(`p`)

let totalAttempts = 5;
let remain = 0;
let totalWon= 0;
let totalLost = 0;

form.addEventListener(`submit`, (e)=> {
    e.preventDefault();
    
    remain++;
    if(remain>5){
        input.disabled = true;
        button.disabled = true;
    }if(remain<6){
        let guessingGame = Number(input.value)
        checkResult(guessingGame);
        remainAttemps.innerHTML=`remaing attemps: ${totalAttempts-remain}`;
    }
    input.value = '';
});




const checkResult=(input)=> {

const randomNumbers= randomNumber(5);

    
if(input == randomNumbers){
        para1.innerHTML=`you have won ${input}, random number was:${randomNumbers}`
        totalWon++;
    }else{
    para1.innerHTML=`You have lost,Random number was: ${randomNumbers}` 
    totalLost++;
    }
    lostWon.innerHTML=`Won:${totalWon},Lost:${totalLost}`;
    lostWon.classList.add(`lagre-text`);
    container.appendChild(lostWon);

}
const randomNumber=(limit)=> {
    return Math.floor(Math.random()*limit)+1;
}
