const submit1 = document.getElementById('player-name1');

const submit2 = document.getElementById('player-name2');


submit1.addEventListener("submit", (event) => {
    // Prevents the form from being submitted and the data sent to a server
    event.preventDefault();
    let player1 = document.getElementById("player-name1");
    let playerName1 = player1.value;
    alert("Player 1: ");
}