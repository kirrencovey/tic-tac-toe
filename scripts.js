const allBoxes = document.querySelectorAll(".box");

let counter = 0;

for (let box of allBoxes) {
    box.addEventListener(
        "click",
        (event) => {
            counter++;

            if (counter % 2 !== 0) {
                box.innerHTML = "X";
                box.classList.add("red");
            } else {
                box.innerHTML = "O";
                box.classList.add("blue");
            }

        }
    );
}


