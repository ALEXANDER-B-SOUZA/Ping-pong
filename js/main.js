/* declarando variáveis*/
const canvasEl = document.getElementById("canvas");
const Ctx = canvasEl.getContext("2d");
const espessura = 15;
const raquete = 10;

/* Criando a mesa.*/
const campo = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function() {
    Ctx.fillStyle = 'blue';
    Ctx.fillRect (0, 0, this.w , this.h);
  } ,
}

/*Criando a linha do meio da mesa.*/
const linha = {
  w: 15,
  h: campo.h,
  draw: function() { 
    Ctx.fillStyle = 'white';
    Ctx.fillRect (campo.w / 2 - this.w / 2, 0, this.w, this.h);
  } ,
}

/* Criando raquete direita.*/
const raqdireita = {
 x: raquete,
 y: 300,
 w: linha.w,
 h: 200,
draw: function() {
    Ctx.fillStyle = 'white';
    Ctx.fillRect(this.x, this.y, this.w, this.h);
  } ,
}

/*Criando raquete esquerda*/
const raqesquerda = {
 x: campo.w -linha.w - espessura,
 y: 300,
 w: linha.w,
 h: 200,
draw: function() {
    Ctx.fillStyle = 'white';
    Ctx.fillRect(this.x, this.y, this.w, this.h);
  } ,
}

/*Criando a bola.*/
const bola = {
 x: 400,
 y: 240,
 r: 25,
draw: function() {
    Ctx.fillStyle = 'white';
    Ctx.beginPath()
    Ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    Ctx.fill()
  } ,
}

function setup(){
  canvasEl.width = window.innerWidth
  canvasEl.height = window.innerHeight
  Ctx.width = window.innerWidth
  Ctx.height = window.innerHeight
}


function draw(){
    campo.draw()
    linha.draw()
    raqdireita.draw()
    raqesquerda.draw()
    bola.draw() 
    
  }

setup()
draw()

