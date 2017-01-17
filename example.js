var draw = require('./canvas')
var record = require('./')()

var acc
;(function next() {
  setTimeout(function () {
    acc = record(Math.random())
    next()
  }, Math.pow(Math.random(), 2)*1000)
})()

var canvas = document.createElement('canvas')
document.body.appendChild(canvas)

var ctx = canvas.getContext('2d')
//ctx.rotate(Math.PI*0.1)
//ctx.translate(-0, 50)
setInterval(function (e) {
  ctx.fillStyle = 'red'
  ctx.clearRect(0, 0, 300, 100) //canvas.width, canvas.height)
  draw(ctx, canvas.width, canvas.height, acc[0])
  draw(ctx, canvas.width, canvas.height, acc[1])
}, 1000)



