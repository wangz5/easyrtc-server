easyrtc-server 
======================


Create https server
 
auth:
	openssl genrsa -out key.pem 1024
	openssl req -new -key key.pem -out cert.csr
	openssl x509 -req -days 7304 -in cert.csr -signkey key.pem -out cert.pem
	rm cert.csr
	
example:
	var express = require('express');
	var https = require('https');
	var http = require('http');
	var fs = require('fs');
	
	var options = {
	  key: fs.readFileSync('key.pem'),
	  cert: fs.readFileSync('cert.pem')
	};
	var app = express();
	// Create an HTTP service.
	
	app.get('/', function(req, res){
		res.send('hello world');
	});
	
	http.createServer(app).listen(8000,function(){
		console.log("Http request Succ!On 8000");
	});
	// Create an HTTPS service identical to the HTTP service.
	https.createServer(options, app).listen(8001,function(){
		console.log("Https request Succ!On 8001");
	});
	
	
forever	
	keep node thread live.
	
supervisor
	Can auto refresh when files change.
	