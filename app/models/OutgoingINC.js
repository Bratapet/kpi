// grab the mongoose module
var mongoose = require('mongoose');

// define our outgoing model
// module.exports allows us to pass this to other files when it is called
// model takes 3 arguments, ModelName, Schema, and collection, if name is same as collection it auto infers it 
module.exports = mongoose.model('OutgoingINC', {
	"organization"		: {type : String, default: ''},
	"from"				: {type : String, default: ''},
	"date"				: {type : String, default: ''},
	"uknown1"			: {type : String, default: ''},
	"uknown2"			: {type : String, default: ''},
	"assignedto"		: {type : String, default: ''},
	"INCnr"				: {type : String, default: ''},
	"nr"				: {type : String, default: ''},
	"creationsource"	: {type : String, default: ''},
	"changeevent"		: {type : String, default: ''},
	"category"			: {type : String, default: ''},
	"categorytype"		: {type : String, default: ''}
}, 'outgoingincs');