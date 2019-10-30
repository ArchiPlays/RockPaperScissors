let userScore = 0;
let computerScore = 0;
const user = document.getElementById('user-score');
const comp = document.getElementById('computer-score');
const scoreboard = document.querySelector('.scoreboard');
const result = document.querySelector('#result-p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

const getCpuChoice = () => {
    const choices = ["r", "p", "s"]
    const cpuChoice = choices[Math.floor(Math.random() * 3)];
    return cpuChoice;
}

getCpuChoice();

const game = (choice) => {
    const cpuChoice = getCpuChoice();
    let winner;
    if(choice == "r" && cpuChoice == "r"){
        winner = "none";
        result.textContent = "It's a tie! Rock and rock!"
    } else if(choice == "r" && cpuChoice == "p"){
        winner = "cpu";
        result.textContent = "Computer wins! Paper (CPU) covers rock (user)!"
        computerScore = computerScore + 1;
        comp.textContent = "" + computerScore;
    } else if(choice == "r" && cpuChoice == "s") {
        winner = "user";
        result.textContent = "You win! Rock (User) breaks Scissors (CPU)!"
        userScore = userScore + 1;
        user.textContent = "" + userScore;
    } else if(choice == "p" && cpuChoice == "r"){
        winner = "user";
        result.textContent = "You win! Paper (User) covers rock (CPU)!"
        userScore = userScore + 1;
        user.textContent = "" + userScore;
    } else if(choice == "p" && cpuChoice == "p"){
        winner = "none";
        result.textContent = "It's a tie! Paper and paper!"
    } else if(choice == "p" && cpuChoice == "s") {
        winner = "cpu";
        result.textContent = "Computer wins! Scissors (CPU) cuts paper (user)!"
        computerScore = computerScore + 1;
        comp.textContent = "" + computerScore;
    } else if(choice == "s" && cpuChoice == "r"){
        winner = "cpu";
        result.textContent = "Computer wins! Rock (CPU) breaks scissors (user)!"
        computerScore = computerScore + 1;
        comp.textContent = "" + computerScore;
    } else if(choice == "s" && cpuChoice == "p"){
        winner = "user";
        result.textContent = "You win! Scissors (User) cut paper (CPU)!"
        userScore = userScore + 1;
        user.textContent = "" + userScore;
    } else if(choice == "s" && cpuChoice == "s") {
        winner = "none";
        result.textContent = "It's a tie! Scissors and scissors!"
    }
}

const main = () => {
    rock.addEventListener('click', () => {
        game("r")
    });

    paper.addEventListener('click', () => {
        game("p")
    });

    scissors.addEventListener('click', () => {
        game("s")
    });
}

main();