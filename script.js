function getComputerChoice(){
const randomNumber = Math.floor(Math.random() * 3);
if (randomNumber === 0){
    return "piedra";
    }
else if (randomNumber === 1){
    return "papel";
    }
else{
    return "tijeras";
    }
}
    let humanScore = 0;
    let computerScore = 0;
    const resultsDiv = document.querySelector("#results");
    const scoreDiv = document.querySelector("#score");
 function playRound(humanChoice){
humanChoice = humanChoice.toLowerCase(); const computerChoice = getComputerChoice();
if (humanChoice === computerChoice){
resultsDiv.textContent = "¡Empate!";
}
if (humanChoice === "papel" && computerChoice === "piedra") {
    resultsDiv.textContent = "¡Gana el humano!";
humanScore++;
}
if (humanChoice === "tijeras" && computerChoice === "papel") {
    resultsDiv.textContent = "¡Gana el humano!";
humanScore++;
} 
if (humanChoice === "piedra" && computerChoice === "tijeras"){
    resultsDiv.textContent = "¡Gana el humano!";
humanScore++;}
if (humanChoice === "piedra" && computerChoice === "papel") {
    resultsDiv.textContent = "¡Gana la compu!";
computerScore++;
}
if (humanChoice === "papel" && computerChoice === "tijeras") {
    resultsDiv.textContent = "¡Gana la compu!";
computerScore++;
} 
if (humanChoice === "tijeras" && computerChoice === "piedra"){
    resultsDiv.textContent = "¡Gana la compu!";
computerScore++;
}
const scoreDiv = document.querySelector("#score");
scoreDiv.textContent = `Humano: ${humanScore} - Computadora: ${computerScore}`;
if (humanScore === 5) {
    resultsDiv.textContent = "¡Ganaste la partida!";
    piedraButton.disabled = true;
    papelButton.disabled = true;
    tijerasButton.disabled = true;
}
else if (computerScore === 5) {
    resultsDiv.textContent = "¡La computadora ganó la partida!";
    piedraButton.disabled = true;
    papelButton.disabled = true;
    tijerasButton.disabled = true;
}
}
//aqui irìa la const score div, pero bueno
const piedraButton = document.querySelector("#piedra");
const papelButton = document.querySelector("#papel");
const tijerasButton = document.querySelector("#tijeras");
piedraButton.addEventListener("click", () => {
    playRound("piedra");
});

papelButton.addEventListener("click", () => {
    playRound("papel");
});

tijerasButton.addEventListener("click", () => {
    playRound("tijeras");
});