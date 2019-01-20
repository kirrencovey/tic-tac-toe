const allBoxes = document.querySelectorAll(".box");
const buttonContainer = document.querySelector("#button__container");

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

let Xs = [];
let Os = [];

let counter = 0;

let hasWon = false;


// Function to determine if a player has a winning combo

const isWinning = (player) => {
    let win = false;
    winningCombos.forEach((combo) => {
        if (player.includes(combo[0]) && player.includes(combo[1]) && player.includes(combo[2])) {
            win = true;
        }
    })
    return win;
}


// Function to return current player and identifier

const getPlayer = () => {
    if (counter % 2 !== 0) {
        return {
            playerBoxes: Xs,
            identifier: "X"
        }
    } else {
        return {
            playerBoxes: Os,
            identifier: "O"
        }
    }
}


// Function to display replay button & reload page when clicked

const displayReplayButton = () => {
    const replayButton = document.querySelector("#replay");
    replayButton.style.display = "inline";
    replayButton.addEventListener(
        "click",
        (event) => {
            window.location.reload();
        }
    )
}

for (let box of allBoxes) {
    box.addEventListener(
        "click",
        (event) => {

            // Disable interacting with clicked boxes or after a win
            if (box.classList.contains("clicked") || hasWon) {
                return;
            }

            counter++;

            const player = getPlayer();

            box.innerHTML = player.identifier;
            box.classList.add(player.identifier);
            box.classList.add("clicked");
            player.playerBoxes.push(parseInt(box.id));

            // Winning:
            if (isWinning(player.playerBoxes)) {
                window.setTimeout(() => window.alert(`${player.identifier}s win!`), 200);
                hasWon = true;
                displayReplayButton();
                return;
            }

            // It's a tie:
            if (counter === 9) {
                window.setTimeout(() => window.alert("It's a tie!"), 200);
                displayReplayButton();
                return;
            }

        }
    );
}


