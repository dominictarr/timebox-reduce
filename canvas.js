var each = require('circular-buffer-reduce/each')
module.exports = function (ctx, width, height, acc) {
  var b = acc.max
  //scale of the canvas...
  var scaleX = width/acc.max
  var scaleY = 100
  var _value

ctx.strokeStyle = 'black'
ctx.moveTo(width, 0)
ctx.beginPath()
//ctx.rect(10, 10, 100, 100);

//ctx.stroke();
  each(acc, function (value, i) {

    //ctx.fillRect(0, 0, 1000, 1000) //canvas.width, canvas.height)
    if(i) {
//      console.log('lineTo', i, scaleX, value,scaleY)
      if(value) {
        ctx.lineTo(i*scaleX, value.mean*scaleY)
//        ctx.moveTo(i*scaleX, value.mean*scaleY)
      }
    } //else
//      ctx.moveTo(100*scaleX, 0)

    _value = value
  })

  ctx.stroke()
}

















