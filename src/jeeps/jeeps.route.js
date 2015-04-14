'use strict';

var jeepCtrl = require( './jeep.ctrl' );

module.exports = [
	{
		'method'  : 'GET',
		'path'    : '/jeeps',
		'handler' : jeepCtrl.find
	},

	{
		'method'  : 'GET',
		'path'    : '/jeep/{id}',
		'handler' : jeepCtrl.findById
	},

	{
		'method'  : 'POST',
		'path'    : '/jeep',
		'handler' : jeepCtrl.insert
	},

	{
		'method'  : 'PUT',
		'path'    : '/jeep/{id}',
		'handler' : jeepCtrl.update
	},

	{
		'method'  : 'DELETE',
		'path'    : '/jeep/{id}',
		'handler' : jeepCtrl.delete
	}
];
