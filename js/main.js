/* declarando variáveis*/
const canvasEl = document.getElementById("canvas");
const Ctx = canvasEl.getContext("2d");
const espessura = 15;
const raquete = 10;
const mouse = { x: 0, y: 0 }

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
 y: campo.h / 2,
 w: linha.w,
 h: 200,
 _move: function(){
  this.y = mouse.y
 },
draw: function() {
    Ctx.fillStyle = 'white';
    Ctx.fillRect(this.x, this.y, this.w, this.h);
    this._move()
  } ,
}

/*Criando raquete esquerda*/
const raqesquerda = {
 x: campo.w -linha.w - espessura,
 y: campo.h / 2,
 w: linha.w,
 h: 200,
 _move: function(){
  this.y = bola.y
 },
draw: function() {
    Ctx.fillStyle = 'white';
    Ctx.fillRect(this.x, this.y, this.w, this.h);
    this._move()
  },
}

/*Criando a bola.*/
const bola = {
 x: campo.w / 2,
 y: campo.h / 2,
 r: 20,
 velocidade: 3,
 direçãox: 1,
 direçãoy: 1,
 _posição: function(){
  if (this.x > campo.w - this.r - raqdireita.w - espessura){
    if (this.y -this.r > raqdireita.y && this.y - this.r < raqdireita.y + raqdireita.h){
      this._revertex()
    } else{

    }
  }

  if (this.x < this.r + raqesquerda.w + espessura){
    if (this.y + this.r > raqesquerda.y && this.y - this.r < raqesquerda.y + raqesquerda.h){
      this._revertex()
    } else{

    }
  }


  if(
    (this.y - this.r < 0 && this.direçãoy < 0) ||
    (this.y > campo.h - this.r && this.direçãoy > 0)
    ){
    this._revertey()
  }
 },

 _revertex: function (){
  this.direçãox *= -1
 },

 _revertey: function (){
  this.direçãoy *= -1
 }, 
 _move: function(){
  this.x += this.direçãox * this.velocidade
  this.y += this.direçãoy * this.velocidade
 },
draw: function() {
    Ctx.fillStyle = 'white';
    Ctx.beginPath()
    Ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    Ctx.fill()
    this._posição()
    this._move()
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

  window.animateFrame = (function (){
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimateFrame ||
      window.mozRequestAnimateFrame ||
      window.oRequestAnimateFrame ||
      window.msRequastAnimateFrame ||
      function (callback){
        return window.setTimeout(callback, 1000 /60)
      }
    )
      })()

      function main(){
        animateFrame(main)
        draw()
      }

setup()
main()

canvasEl.addEventListener('mousemove', function(e){
  mouse.x = e.pageX
  mouse.y = e.pageY
})