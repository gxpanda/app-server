var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello Panda\'s First App Server');
});

app.listen(3000);