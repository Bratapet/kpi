var INCOMINGINC = require('./models/IncomingINC');
var OUTGOINGINC = require('./models/OutgoingINC');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.post('/api/INCOMINGINC/', function(req, res){
		
		var date = req.body['date'];
		INCOMINGINC.find({"date": new RegExp(date, "i")}, function(err,IncomingINC){
			if(err)
				res.send(err);

			res.json(IncomingINC);
		});
	});

	app.post('/api/OUTGOINGINC/', function(req, res){
		
		var date = req.body['date'];
		OUTGOINGINC.find({"date" : new RegExp(date, "i")}, function(err, OutgoingINC){
			if(err)
				res.send(err);

			res.json(OutgoingINC);
		});
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};