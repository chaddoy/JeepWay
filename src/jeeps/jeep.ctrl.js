'use strict';

var Jeep = require( './jeep.model' );

var JeepCtrl = function () { };
JeepCtrl.prototype = ( function () {

	return {

		'find' : function ( request, reply ) {
			Jeep.find( function ( err, jeeps ) {
				if ( err ) {
					return console.error( err );
				}

				console.log( jeeps );
				reply( jeeps );
			} );
		},

		'findById' : function ( request, reply ) {
			Jeep.findOne( {
				'_id' : request.params.id
			}, function ( err, jeeps ) {
				if ( err ) {
					return console.error( err );
				}

				console.log( jeeps );
				reply( jeeps );
			} );
		},

		'insert' : function ( request, reply ) {
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
		},

		'update' : function ( request, reply ) {
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
		},

		'delete' : function ( request, reply ) {
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

	};

} )( );

var jeepCtrl = new JeepCtrl();
module.exports = jeepCtrl;
