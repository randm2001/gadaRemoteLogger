gadaRemoteLogger=require('./index.js')

var sampleLogger=new gadaRemoteLogger({serverPort:9696})

function intervalFunc() {
  sampleLogger.logAll("you are in")
}

setInterval(intervalFunc, 1500);