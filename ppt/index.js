const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choice = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choice.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Jogador: ${player}`;
    computerText.textContent = `CPU: ${computer}`;
    resultText.textContent = vencedor();

}));

function computerTurn() {
    const CpuChoice = Math.floor(Math.random() * 3) + 1;

    switch(CpuChoice) {
        case 1:
            computer = "Pedra";
            break;
        case 2:
            computer = "Papel";
            break;
        case 3:
            computer = "Tesoura";
            break;    
    }
}

function vencedor() {
    if(player == computer) {
        return "Empate!";
    }
    else if (computer == "Pedra") {
        return (player == "Papel") ? "Você venceu!" : "Você Perdeu!";
    }
    else if (computer == "Papel") {
        return (player == "Tesoura") ? "Você venceu!" : "Você Perdeu!";
    }
    else if (computer == "Tesoura") {
        return (player == "Pedra") ? "Você venceu!" : "Você Perdeu!";
    }
}