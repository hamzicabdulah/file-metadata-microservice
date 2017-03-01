var express = require('express');
var app = express();
var multer  = require('multer');

app.post('/get-file-size', multer({dest: './uploads/'}).single('file'), function(req, res){
	console.log('Checked size of ' + req.file.originalname);
	res.send({size: req.file.size});
});

app.get('/:anything', function(req, res) {
    res.redirect('/');
});

app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening on port 8080');
});