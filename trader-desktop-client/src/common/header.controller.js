'use strict';
angular.module('myApp')
    .controller('headerController',function($scope){
    	$scope.toggleNameDisplay = false;
    	$scope.showName = function(){
    		$scope.toggleNameDisplay = !$scope.toggleNameDisplay;
    		console.log($scope.toggleNameDisplay);
    	}
});