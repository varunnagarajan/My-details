'use strict';
angular.module('trader.dashboard').factory('Order',function(){
	function Order(defaults){
		/*jshint maxcomplexity:12 */
		this.id = defaults.id || 0;
		this.creationTime = defaults.creationTime || '2013-04-16T22:41:51.380Z';
		this.side = defaults.side || 'Buy';
		this.symbol = defaults.symbol || '';
		this.quantity = defaults.quantity || 0;
		this.quantityPlaced = defaults.quantityPlaced || 0;
		this.quantityExecuted = defaults.quantityExecuted || 0;
		this.limitPrice = defaults.limitPrice || 0;
		this.priority = defaults.priority || 0;
		this.status = defaults.status || 'New';
		this.traderId = defaults.traderId || '';
	}
	return Order;
});