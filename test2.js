var http = require('http');

var options = {
  hostname: 'colab-sbx-138.oit.duke.edu',
  port: 5000,
  path: '/api/connection',
  method: 'GET',
  headers: {
      "Content-Type": "application/json", 
      "X-Api-Key": "4FE8C4FCC1964E7F9820142E519C18DB"
  }
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