var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(9000, '0.0.0.0', function() {
	console.log("server starting on 9000");
});
