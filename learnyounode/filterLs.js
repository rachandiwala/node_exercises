/*
var fs = require('fs')
var dir = process.argv[2];

fs.readdir(dir, function(err, files){
  files.forEach()

if (err)



});

*/

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})




