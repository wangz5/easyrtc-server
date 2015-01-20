

/**
 * 配置项
 */
var http_port  		= 8088;									// Port of Http Server
var https_port  	= 8089;									// Port of Https Server
var workDir 	= __dirname+"/../EasyRTCClient/"; 			//Dir of Server by dir of file 

//const MAX_FILE_SIZE  =40000;		//File transfer Maxsize(kb)!

var zqnb      = require("zqnb");  				// Zqnb Extend module


var logger = zqnb.log4js.getLogger('Server');
zqnb.startServer(http_port,https_port,workDir);

zqnb.startService();




