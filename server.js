var express = require('express');
var multer  = require('multer');
 
var app = express();

app.post('/upload', multer({dest: './uploads/'}).single('file'), function(req, res){
	console.log(req.file);
	res.send({size: req.file.size});
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening on port 8080');
});