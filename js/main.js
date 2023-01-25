/* declarando variáveis*/
const canvasEl = document.getElementById("canvas");
const Ctx = canvasEl.getContext("2d");



function setup(){
  canvasEl.width = window.innerWidth
  canvasEl.height = window.innerHeight
  Ctx.width = window.innerWidth
  Ctx.height = window.innerHeight
}

function draw(){
    Ctx.fillStyle = 'blue';
    Ctx.fillRect (0, 0, window.innerWidth, window.innerHeight);
}

setup()
draw()

 console.log("Deu certo");