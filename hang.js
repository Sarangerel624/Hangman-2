const alphaments = document.getElementById("alphaments");
const zuraas = document.getElementById("lines");
const keyboard = document.getElementById("keyboard")
const failScore = document.getElementById("failScore")
const hangmanImg = document.getElementById("img");
const winButton = document.getElementById("reBtn");
const loseButtom = document.getElementById("restartBtn")
const alphaArray = ["A", "B", "C","D", "E", "F", "G","H", "I", "J", "K","L", "M", "N", "O", "P", "Q","R", "S","T", "U","V", "W", "X", "Y","Z"];
const clickedAlpha = [];
let score = 0;
function makeAlpha() {
    for(let i = 0; i < alphaArray.length; i++) {
        const newBtn = document.createElement("button");
        newBtn.innerText = alphaArray[i];
        newBtn.classList.add("alphaBtn")
        alphaments.appendChild(newBtn);

        newBtn.addEventListener("click", function() {
            clickedAlpha.push(alphaArray[i]);
            workLines()
            console.log(clickedAlpha)

            if(!currentWord.includes(alphaArray[i])) {
                score++;
                failScore.innerHTML = score;
                hangmanImg.src = `./images/${score}.png`;
                gameOver()
             }
              newBtn.disabled= true;
        })
       
    }

}

makeAlpha();

const randomWordsArray = ["COMPUTER", "SHINE", "DOLLAR", "STAR SIGN", "HARBOUR", "ROM", "STANFORD"];
let randomWords = Math.floor(Math.random() * randomWordsArray.length);
let currentWord = randomWordsArray[randomWords];

function workLines() {
    let displayWord = "";
    for(let i = 0; i < currentWord.length; i++) {
        if(currentWord[i]=== " " || clickedAlpha.includes(currentWord[i])){
            displayWord += currentWord[i];
        }else {
            displayWord += "_  ";
        }
    }

    zuraas.innerHTML = displayWord;
    console.log(currentWord)

    if(currentWord === displayWord){
    document.getElementsByClassName("win")[0].style.visibility = "visible";
    disableAllButtons();
    winButton.addEventListener("click", function () {
    window.location.reload();
})
  }
}
workLines()

function gameOver() {
   if (score <= 7) {
  hangmanImg.src = `./images/${score}.png`;
   } else {
  hangmanImg.src = "./images/8.png";
   }


   
}
function disableAllButtons() {
    const allButtons = document.querySelectorAll(".alphaBtn");
    allButtons.forEach(btn => btn.disabled = true);
}




loseButtom.addEventListener("click", function () {
         window.location.reload();

     })