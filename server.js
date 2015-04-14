'use strict';

var Hapi = require( 'hapi' );
var Good = require( 'good' );
var _    = require( 'underscore' );

// routes
var jeepsRoute = _.union( require( './src/routes/jeeps' ) );

var server = new Hapi.Server();
server.connection( {
	'port' : 3000
} );

server.route( {
	'method'  : 'GET',
	'path'    : '/',
	'handler' : function ( request, reply ) {
		reply( 'JeepWay' );
	}
} );

server.route( jeepsRoute );

server.register( {
	'register' : Good,
	'options'  : {
		'reporters' : [
			{
				'reporter' : require( 'good-console' ),
				'events'   : {
					'log'      : '*',
					'response' : '*'
				}
			}
		]
	}
}, function ( err ) {
	if ( err ) {
		throw err;
	}

	if ( !module.parent ) {
		server.start( function () {
			server.log( 'info', 'Server running at: ' + server.info.uri );
		} );
	}
} );
