/* declarando variáveis*/
const canvasEl = document.querySelector("canvas")
const canvasCtx = canvasEl.getContext("2d")



function setup(){
  canvasEl.width = window.innerWidth
  canvasEl.height = window.innerHeight
  canvasCtx.width = window.innerWidth
  canvasCtx.height = window.innerHeight
}

function draw(){
    canvasCtx.fillStyle = "#286047"
    canvasCtx.fillRect (0, 0, window.innerWidth, window.innerHeight)
}

setup()
draw()