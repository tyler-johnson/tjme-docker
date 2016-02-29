process.env.NODE_ENV = "production";

require("@mrgalaxy/tjme")().listen(80, function() {
	var addr = this.address();
	console.log("tylerjohnson.me listening at http://%s:%s", addr.address, addr.port);
	console.log("Enter Ctrl-C to stop the server.");
}).on("error", function(e) {
	console.error(e.stack || e);
	process.exit(1);
});
