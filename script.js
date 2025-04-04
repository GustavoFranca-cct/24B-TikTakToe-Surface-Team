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
