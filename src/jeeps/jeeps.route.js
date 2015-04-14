'use strict';

var Jeep = require( './jeep.model' );

module.exports = [
	{
		'method'  : 'GET',
		'path'    : '/jeeps',
		'handler' : function ( request, reply ) {
			Jeep.find( function ( err, jeeps ) {
				if ( err ) {
					return console.error( err );
				}

				console.log( jeeps );
				reply( jeeps );
			} );
		}
	},
	{
		'method'  : 'POST',
		'path'    : '/jeep',
		'handler' : function ( request, reply ) {
			reply( request.payload );
		}
	}
];
