var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3976);

app.get('/',function(req,res){
	res.render('home');
});

app.get('/loopback', function(req,res){
	var qParams = [];
	for (var p in req.query){
		qParams.push({'name':p, 'value': req.query[p]})
	}
	var context = {};
	context.dataListURL = qParams;
	context.reqType = req.method;
	res.render('loopback', context);
});

app.post('/loopback', function(req,res){

	var qParamsURL = [];
	for (var p in req.query){
		qParamsURL.push({'name':p, 'value': req.query[p]})
	}
	var qParamsBody = [];
	for (var p in req.body){
		qParamsBody.push({'name':p,'value':req.body[p]})
	}
	var context = {};
	context.dataListURL = qParamsURL;
	context.dataListBody = qParamsBody;
	context.reqType = req.method;
	res.render('loopback', context);
});

app.use(function(req,res){
	res.status(404);
	res.render('404');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
