

document.getElementById("rock").onclick=playerThrowsRock
document.getElementById("paper").onclick=playerThrowsPaper
document.getElementById("scissor").onclick=playerThrowsScissor
const rockImg = document.getElementById("rock")
const paperImg = document.getElementById("paper")
const scissorImg = document.getElementById("scissor")
const botRockImg = document.getElementById("bot-rock")
const botPaperImg = document.getElementById("bot-paper")
const botScissorImg = document.getElementById("bot-scissor")
document.getElementById("restart").onclick=restart
let gameReset = true

function playerThrowsRock() {
  if(gameReset){
    paperImg.style.display = "none"
    scissorImg.style.display = "none"
    let botThrow = botThrows()
    gameReset = false
    checkWin("rock",botThrow)
  }
}
function playerThrowsPaper() {
  if(gameReset){
    rockImg.style.display = "none"
    scissorImg.style.display = "none"
    let botThrow = botThrows()
    gameReset = false
    checkWin("paper",botThrow)
  }
}
function playerThrowsScissor() {
  if(gameReset){
    paperImg.style.display = "none"
    rockImg.style.display = "none"
    let botThrow = botThrows()
    gameReset = false
    checkWin("scissor",botThrow)
  }
}

function botThrows() {
  let rando = Math.floor(Math.random() * 3)
  if(rando == 1){
    botRockImg.style.display = "inline"
    return "rock"
  } else if (rando == 2){
    botPaperImg.style.display = "inline"
    return "paper"
  } else {
    botScissorImg.style.display = "inline"
    return "scissor"
  }
}

function checkWin(p,b) {
  if(p == b){
    document.querySelector('.result').innerHTML = "We Tied!"
  } else if(p == 'rock' && b == 'scissor' || p == 'scissor' && b == 'paper' || p == 'paper' && b == 'rock') {
    document.querySelector('.result').innerHTML = "You Won!"
  } else {
    document.querySelector('.result').innerHTML = "I win, Better Luck Next Time!"
  }

  document.getElementById("restart").style.display = "inline"
  document.getElementById("logo").style.display = "none"
}

function restart() {
  gameReset = true
  rockImg.style.display = "inline"
  paperImg.style.display = "inline"
  scissorImg.style.display = "inline"
  botRockImg.style.display = "none"
  botPaperImg.style.display = "none"
  botScissorImg.style.display = "none"
  document.getElementById("restart").style.display = "none"
  document.getElementById("logo").style.display = "inline"
  document.querySelector('.result').innerText = ""
}
