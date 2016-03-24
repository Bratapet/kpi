// grab the mongoose module
var mongoose = require('mongoose');

// define our incominginc model
// module.exports allows us to pass this to other files when it is called
// model takes 3 arguments, ModelName, Schema, and collection, if name is same as collection it auto infers it 
module.exports = mongoose.model('IncomingINC', {
	assignedto 		: {type : String, default: ''},
	uknown1 		: {type : String, default: ''},
	assignedfrom 	: {type : String, default: ''},
	date			: {type : String, default: ''},
	organization	: {type : String, default: ''},
	uknown2			: {type : String, default: ''}
}, 'incomingincs');

