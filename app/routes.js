var INCOMINGINC = require('./models/IncomingINC');
var OUTGOINGINC = require('./models/OutgoingINC');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/INCOMINGINC', function(req, res){
		console.log(req.query['date'])
		INCOMINGINC.find(function(err,IncomingINC){
			if(err)
				res.send(err);

			res.json(IncomingINC);
		});
	});

	app.get('/api/OUTGOINGINC', function(req, res){
		console.log(req.Query['date'])
		OUTGOINGINC.find(function(err, OutgoingINC){
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