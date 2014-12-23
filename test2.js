var http = require('http');

var options = {
  hostname: '73.161.74.206',
  port: 5000,
  path: '/api/connection',
  method: 'GET'
  headers: {
      Content-Type: application/json, 
  }
  X-Api-Key: '1C7A2DC310AE4BCB977F0C7413F32359',
  // headers: {
  //   Content-Type: application/json
  // }
};

var req = http.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});