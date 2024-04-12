let userSeq = [];
let gameSeq = [];
let level = 0;
let started = false;
let color = ["blue", "green", "red", "purple"];
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let highestScore = 0;

document.addEventListener("keypress", function (){
    if(started == false){
        started = true;
        levelUp();
    }
})

let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click", function(){
        flashBtn(this);
        userSeq.push(this.getAttribute("id"));
        checkAns(userSeq.length-1);
    })
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(() => {
                levelUp();
            }, 350);
            
        }
    } else{
        document.body.classList.add("game-over");
        setTimeout(function(){
            document.body.classList.remove("game-over");
        }, 150);
        h2.innerHTML = `<h2 style="color:red">Game over!</h2> Your Score is ${level-1} <br> Press any key to restart`;
        highScore(level-1);
        resetGame();
    }
}

function levelUp(){
    level++;
    userSeq = [];
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = color[ranIdx];
    let btn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);

    flashBtn(btn);
}

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function resetGame(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}

function highScore(score){
    if(score > highestScore){
        highestScore = score;
        h3.innerText = `Highest Score = ${highestScore}`;
    } else{
        h3.innerText = `Highest Score = ${highestScore}`;
    }
    return;
}