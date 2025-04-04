let sub1 = document.getElementById('submit1');
let sub2 = document.getElementById('submit2');

sub1.addEventListener("click", (event) => {
    event.preventDefault();
    let player1 = document.getElementById("player1Input");
    let playerName1 = player1.value;
    console.log("Player 1: " + playerName1);
});

sub2.addEventListener("click", (event) => {
    event.preventDefault();
    let player2 = document.getElementById("player2Input");
    let playerName2 = player2.value;
    console.log("Player 2: " + playerName2);
});

document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll("td");
    const currentPlayerText = document.getElementById("currentPlayer");
    let currentPlayer = "X"; // Player 1 starts
  
    cells.forEach(function (cell) {
      cell.addEventListener("click", function () {
        if (cell.textContent !== "X" && cell.textContent !== "O") {
          cell.textContent = currentPlayer;
  
          // Switch player
          if (currentPlayer === "X") {
            currentPlayer = "O";
            currentPlayerText.textContent = "Player 2's Turn (O)";
          } else {
            currentPlayer = "X";
            currentPlayerText.textContent = "Player 1's Turn (X)";
          }
        }
      });
    });
  });
  
