let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let displayUserScore = document.querySelector("#user-score");
let displayCompScore = document.querySelector("#comp-score");

let genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
}

let drawGame = (userChoice) => {
    console.log("Game Draw");
    msg.innerText = `Game was Draw!\nBoth Choose ${userChoice}`;
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        console.log("You win");
        msg.innerText = `You Win!\nYour ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore += 1;
        displayUserScore.innerText = userScore;
    } else {
        console.log("You Loose");
        msg.innerText = `You Lost!\n${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "blue";
        msg.style.color = "white";
        compScore += 1;
        displayCompScore.innerText = compScore;
    }
}

let playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        // Draw Game
        drawGame(userChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});