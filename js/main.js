/* declarando variáveis*/
const canvasEl = document.getElementById("canvas");
const Ctx = canvasEl.getContext("2d");
const espessura = 15;
const raquete = 10;

function setup(){
  canvasEl.width = window.innerWidth
  canvasEl.height = window.innerHeight
  Ctx.width = window.innerWidth
  Ctx.height = window.innerHeight
}

function draw(){
    /* Criando a mesa.*/
    Ctx.fillStyle = 'blue';
    Ctx.fillRect (0, 0, window.innerWidth, window.innerHeight);
    /*Criando a linha do meio da mesa.*/
    Ctx.fillStyle = 'white';
    Ctx.fillRect (window.innerWidth / 2 - espessura / 2, 0, espessura, window.innerHeight);
    /* Criando raquete direita.*/
    Ctx.fillStyle = 'white';
    Ctx.fillRect(raquete, 300, espessura, 200);
    /*Criando raquete esquerda*/
    Ctx.fillStyle = 'white';
    Ctx.fillRect(window.innerWidth - espessura - raquete, 300, espessura, 200);
}

setup()
draw()

