//btnReset
var reset = document.querySelector("#btnReset")
var btnDo = document.querySelector("#btnDo")
var btnGo = document.querySelector("#btnGo")


//all boxes
var boxes = document.querySelectorAll("td")

//clear boxes
function clrBoxes() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].textContent = "";
    }
    verbs = ['1','2','3']
}

reset.addEventListener('click', clrBoxes);

//change verbs
var verbs = ['1', '2', '3']

function verbDo() {
  verbs = ['do', 'did', 'done'];
}

function verbGo() {
  verbs = ['go', 'went', 'gone'];
}

btnDo.addEventListener('click',verbDo);
btnGo.addEventListener('click',verbGo);


// change box value

function changeBoxes(){
  if (this.textContent === '') {
    this.textContent = verbs[0];
  } else if (this.textContent === verbs[0]) {
    this.textContent = verbs[1];
  } else if (this.textContent === verbs[1]) {
    this.textContent = verbs[2];
  } else {
    this.textContent = '';
  }
}

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', changeBoxes)
}
