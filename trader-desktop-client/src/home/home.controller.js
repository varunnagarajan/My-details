'use strict';
angular.module('myApp.home')
    .controller('HomeController',function($scope,$location){
        $scope.gotodataScience = function(){
            $location.path('/dataScience');
        };
        $scope.gotoui = function(){
            $location.path('/ui');
        };
        $scope.gotoeducation = function(){
            $location.path('/education');
        };
    });