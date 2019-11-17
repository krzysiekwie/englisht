//btnReset
var reset = document.querySelector("#btnReset");
var btnDo = document.querySelector("#btnDo");
var btnGo = document.querySelector("#btnGo");

//all boxes
var boxes = document.querySelectorAll("td");

//clear boxes
function clrBoxes() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
        boxes[i].style.background = "none";
    }
    verbs = ["present", "past", "3rd form"];
}

reset.addEventListener("click", clrBoxes);

//change verbs
var verbs = ["present", "past", "3rd form"];
var color = "";

function verbDo() {
    verbs = ["do", "did", "done"];
    color = "lightgreen";
}

function verbGo() {
    verbs = ["go", "went", "gone"];
    color = "lightblue";
}

btnDo.addEventListener("click", verbDo);
btnGo.addEventListener("click", verbGo);

// change box value

function changeBoxes() {
    if (this.textContent === "") {
        this.textContent = verbs[0];
        this.style.background = color;
    } else if (this.textContent === verbs[0]) {
        this.textContent = verbs[1];
        this.style.background = color;
    } else if (this.textContent === verbs[1]) {
        this.textContent = verbs[2];
        this.style.background = color;
    } else {
        this.textContent = "";
        this.style.background = "none";
    }
}

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", changeBoxes);
}