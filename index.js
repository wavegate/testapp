var express = require('express')
var app = express()

app.get('http://www.twitter.com', function (req, res) {
  console.log(req.status());
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

