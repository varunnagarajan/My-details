'use strict';
angular.module('myApp.home')
    .controller('HomeController',function($scope,$location){
        $scope.gotoResume = function(){
            $location.path('/resume');
        };
        $scope.gotoHobbies = function(){
            $location.path('/hobbies');
        };
        $scope.gotoRecognitions = function(){
            $location.path('/recognitions');
        };
        
    });