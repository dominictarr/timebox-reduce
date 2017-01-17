
var CircularReduce = require('circular-buffer-reduce')
var stats = require('statistics/mutate')

var SECOND=1000
var MINUTE = SECOND*60
var HOUR = MINUTE*60
var DAY = HOUR*24

function getTs (data) { return data.ts }
function reduce (acc, data) { return stats(acc, data.value) }

module.exports = function () {
  var data = {ts: null, value:null}
  var reduces = [
    CircularReduce(getTs, reduce, SECOND, 60),
    CircularReduce(getTs, reduce, MINUTE, 60)
//    CircularReduce(getTs, reduce, HOUR, 24)
//    CircularReduce(getTs, reduce, DAY, 30)
  ]
  var acc = [,,,]
  return function (value) {
    var ts = Date.now()
    data.ts = Date.now()
    data.value = value
    for(var i = 0; i < reduces.length; i ++)
      acc[i] = reduces[i](acc[i], data)
    return acc
  }
}

