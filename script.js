let gameBox = document.querySelector(".container .game");

const emojis = ["🦊", "🦊", "🐶", "🐶", "🐸", "🐸", "🍓", "🍓", "🦋", "🦋", "🏎️", "🏎️", "🍎", "🍎", "🚗", "🚗"]; 
let shuffleEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.classList.add("item");

    box.onclick = (e) => {
        e.target.classList.add("boxOpen");
        let boxes = document.querySelectorAll(".boxOpen");
        setTimeout(() => {
            if(boxes.length > 1) {
                if (boxes[0].innerHTML == boxes[1].innerHTML) {
                    boxes[0].classList.add("boxMatch");
                    boxes[1].classList.add("boxMatch");
                    boxes[1].classList.remove("boxOpen");
                    boxes[0].classList.remove("boxOpen");

                    if (boxes.length == emojis.length) {
                        window.location.reload();
                    }
                } else {
                    boxes[1].classList.remove("boxOpen");
                    boxes[0].classList.remove("boxOpen");
                }
            }
        }, 500);
    }

    box.innerHTML = shuffleEmojis[i];
    gameBox.appendChild(box);
}