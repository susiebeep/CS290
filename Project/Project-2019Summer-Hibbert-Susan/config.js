var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3975);

app.use(express.static('public'));
app.use(express.static('views/images'));

app.get('/',function(req,res){
	res.render('home');
});

app.get('/fav-dogs',function(req,res){
  res.render('fav-dogs');
});

app.get('/form',function(req,res){
	res.render('form');
});

app.get('/download',function(req,res){
	res.render('download');
});

app.get('/link',function(req,res){
	res.render('link');
});

app.get('/subscribe',function(req,res){
	res.render('subscribe');
});

app.listen(app.get('port'), function(){
	console.log('Config started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});