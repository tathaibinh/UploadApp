var http = require("http");
var url = require("url");

function start(route,handle){
	function onRequest(request,response){
		// var postData = "";
		var pathname = url.parse(request.url).pathname;
		// var query = url.parse(request.url).query;
		console.log("Request for pathname" + pathname + " received.");
		// request.setEncoding("utf8");
		// request.addListener("data", function(postDataChunk){
		// 	postData += postDataChunk;
		// 	console.log("Received POST data chunk '"+ postDataChunk + "'.");
		// });
		// console.log("Request for query" + query + " received.");
		// request.addListener("end", function(){
		route(handle, pathname,response, request);
			// console.log("**********"+pathname);	
	
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");	
}

exports.start = start;
