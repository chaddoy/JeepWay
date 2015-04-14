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
		'method'  : 'GET',
		'path'    : '/jeep/{id}',
		'handler' : function ( request, reply ) {
			Jeep.findOne( {
				'_id' : request.params.id
			}, function ( err, jeeps ) {
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
			var jeep = new Jeep( {
				'jeepId'      : request.payload.jeepId,
				'origin'      : request.payload.origin,
				'destination' : request.payload.destination,
				'coordinates' : request.payload.coordinates
			} );

			jeep.save( function ( err, jeep ) {
				if ( err ) {
					return console.error( err );
				}

				console.log( jeep );
				reply( jeep );
			} );
		}
	},
	{
		'method'  : 'PUT',
		'path'    : '/jeep/{id}',
		'handler' : function ( request, reply ) {
			Jeep.findOneAndUpdate(
			// query
			{ '_id' : request.params.id },

			// update
			request.payload,

			// options
			{ 'new' : true },

			// callback
			function ( err, jeep ) {
				if ( err ) {
					return console.error( err );
				}

				console.log( jeep );
				reply( 'updated' );
			} );
		}
	},
	{
		'method'  : 'DELETE',
		'path'    : '/jeep/{id}',
		'handler' : function ( request, reply ) {
			Jeep.findOneAndRemove(
			// query
			{ '_id' : request.params.id },

			// callback
			function ( err ) {
				if ( err ) {
					return console.error( err );
				}

				reply( 'deleted' );
			} );
		}
	}
];
