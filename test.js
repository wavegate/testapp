var url = "73.161.74.206:5000"; 
var http = require('http');

callback = function(res){
	var str = ''; 

	res.setEncoding('utf8');

	res.on('data', function(data){
		str = data; 
		console.log(str);
	});

	// res.on('end', function(){
	// 	console.log(str);
	// });

}

http.get(url, callback) 