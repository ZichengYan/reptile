var http=require("http")
var server=http.createServer()

server.on("request",function (req,res) {
	// 在这里向另一个服务器发送请求,如何写代码
}).listen(4000);

