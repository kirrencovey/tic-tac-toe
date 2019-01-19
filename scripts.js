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

const isWinning = (player) => {
    let win = false;
    winningCombos.forEach((combo) => {
        if (player.includes(combo[0]) && player.includes(combo[1]) && player.includes(combo[2])) {
            win = true;
        }
    })
    return win;
}


const getPlayer = () => {
    if (counter % 2 !== 0) {
        return {
            player: Xs,
            identifier: "X"
        }
    } else {
        return {
            player: Os,
            identifier: "O"
        }
    }
}

const displayReplayButton = () => {
    buttonContainer.innerHTML = "<button id='replay'>Play Again!</button>";
    document.querySelector("#replay").addEventListener(
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

            counter++;

            const player = getPlayer();

            box.innerHTML = player.identifier;
            box.classList.add(player.identifier);
            player.player.push(parseInt(box.id));
            if (isWinning(player.player)) {
                window.setTimeout(() => window.alert(`${player.identifier}s win!`), 200);
                hasWon = true;
            }

            if (hasWon === true) {
                displayReplayButton();
                return;
            }

            if ((Xs.length + Os.length) === 9) {
                window.setTimeout(() => window.alert("It's a tie!"), 200);
                displayReplayButton();
                return;
            }

        }
    );
}


