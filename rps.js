let userScore = 0;
let comScore = 0;
const userScoreSpan = document.getElementById("userScore");
const comScoreSpan = document.getElementById("comScore");
const scoreBoardDiv = document.querySelector(".scoreBoard");
const resultP = document.querySelector(".result p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComChoice(){
    const choices = ['r', 'p', 's'];
    const ranNum = Math.floor(Math.random() * 3);
    return choices[ranNum];
}

function convertWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function wins(userChoice, comChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    comScoreSpan.innerHTML = comScore;
    resultP.innerHTML = convertWord(userChoice) + " beats " + convertWord(comChoice) + ". You won!";
}

function lose(userChoice, comChoice){
    comScore++;
    userScoreSpan.innerHTML = userScore;
    comScoreSpan.innerHTML = comScore;
    resultP.innerHTML = convertWord(userChoice) + " loses to " + convertWord(comChoice) + ". You lost!";
}

function draw(){
    resultP.innerHTML = "It's a tie! Try again.";
}

function game(userChoice){
    const comChoice = getComChoice();
    switch (userChoice + comChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, comChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, comChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, comChoice);
            break;
    }
}

game(userScore);

function checkWin(){
    if (userScore == 3 ){
        alert("Congratulations! You won the game!! 🥳");
    }else {
        alert("You lost the game! Try again!");
    }
}

checkWin(userScore);

function main(){
    rockDiv.addEventListener('click', function(){
        game("r");
    })
    paperDiv.addEventListener('click', function(){
        game("p");
    })
    scissorsDiv.addEventListener('click', function(){
        game("s");
    })
    if (userScore == 3) return "Congratulations! You won the game!!";
    return "You lost the game! Try again!";
}

main();