'use strict';
angular.module('trader').factory('Instrument',function(){
	function Instrument(defaults){
		this.symbol = defaults.symbol || '';
		this.name = defaults.name || '';
		this.lastTrade = defaults.lastTrade || 0;
	}
	return Instrument;
});