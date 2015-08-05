'use strict';
angular.module('trader.login').factory('User',function(){
	function User(defaults){
		this.id = defaults.id || 500;
		this.name = defaults.name || '';
	}
	return User;
});