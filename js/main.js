/* declarando variáveis*/
const canvasEl = document.getElementById("canvas");
const Ctx = canvasEl.getContext("2d");
const espessura = 15;


function setup(){
  canvasEl.width = window.innerWidth
  canvasEl.height = window.innerHeight
  Ctx.width = window.innerWidth
  Ctx.height = window.innerHeight
}

function draw(){
    Ctx.fillStyle = 'blue';
    Ctx.fillRect (0, 0, window.innerWidth, window.innerHeight);

    Ctx.fillStyle = 'white';
    Ctx.fillRect (window.innerWidth / 2 - espessura / 2, 0, espessura, window.innerHeight);
}

setup()
draw()

