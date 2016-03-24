var INCOMINGINC = require('./models/IncomingINC');
var OUTGOINGINC = require('./models/OutgoingINC');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/INCOMINGINC/:date', function(req, res){
		INCOMINGINC.find(function(err,IncomingINC){
			if(err)
				res.send(err);

			res.json(IncomingINC);
		});
	});

	app.get('/api/OUTGOINGINC/:date', function(req, res){
		OUTGOINGINC.findOne(function(err, OutgoingINC){
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