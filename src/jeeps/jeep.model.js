var moongose = require( 'mongoose' );

var jeepSchema = moongose.Schema( {
	'jeepId'      : String,
	'origin'      : String,
	'destination' : String,
	'coordinates' : Array
} );

module.exports = moongose.model( 'Jeep', jeepSchema );