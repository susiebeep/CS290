var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3978);

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mysql = require('mysql');
var pool = mysql.createPool({
  host  : 'classmysql.engr.oregonstate.edu',
  user  : 'cs290_hibberts',
  password: '3975',
  database: 'cs290_hibberts'
});

module.exports.pool = pool;

app.use(express.static('public'));

app.get('/',function(req,res){
	var context = {};
	pool.query("SELECT *, DATE_FORMAT(date, \"%m-%d-%Y\") AS date FROM workouts", function(err, rows, fields){
		if(err){
		next(err);
		return;
    }
    context.results = rows;
	if (Object.keys(rows).length > 0){
		context.cols1 = Object.keys(rows[0]);
		context.cols = context.cols1.slice(1, 6);
	}	
	res.render('home', context);
	})
});

app.post('/insert',function(req,res,next){
	var context = {};
	if(req.body.name == ""){
		return;
	}	
	pool.query("INSERT INTO workouts (`name`, `reps`, `weight`, `date`, `lbs`) VALUES (?, ?, ?, ?, ?)", [req.body.name, req.body.reps, req.body.weight, req.body.date, req.body.lbs], function(err, result){
	if(err){
		next(err);
		return;
    }
	pool.query("SELECT *, DATE_FORMAT(date, \"%m-%d-%Y\") AS date FROM workouts", function(err, rows, fields){
		if(err){
		next(err);
		return;
    }
	res.json(rows);
  });
});
});

app.post('/delete',function(req,res,next){
	var context = {};
	pool.query("DELETE FROM workouts WHERE id=?", [req.body.id], function(err, result){
	if(err){
		next(err);
		return;
    }
   	pool.query("SELECT *, DATE_FORMAT(date, \"%m-%d-%Y\") AS date FROM workouts", function(err, rows, fields){
		if(err){
		next(err);
		return;
    }
	res.json(rows);
  });
});
});


app.post('/update',function(req,res,next){
  var context = {};
  pool.query("UPDATE workouts SET name=?, reps=?, weight=?, date=?, lbs=? WHERE id=? ",
    [req.body.name, req.body.reps, req.body.weight, req.body.date, req.body.lbs, req.body.id],
    function(err, result){
    if(err){
      next(err);
      return;
    }
		pool.query("SELECT *, DATE_FORMAT(date, \"%m-%d-%Y\") AS date FROM workouts", function(err, rows, fields){
			if(err){
			next(err);
			return;
			}
			res.json(rows);
		});
      });
    });


app.get('/reset-table',function(req,res,next){
	var context = {};
	pool.query("DROP TABLE IF EXISTS workouts", function(err){
    var createString = "CREATE TABLE workouts("+
    "id INT PRIMARY KEY AUTO_INCREMENT,"+
    "name VARCHAR(255) NOT NULL,"+
    "reps INT,"+
    "weight INT,"+
    "date DATE,"+
    "lbs BOOLEAN)";
    pool.query(createString, function(err){
    context.results = "Table reset";
    res.render('home', context);
    })
  });
});


app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Config started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});