'use strict';
angular.module('trader.login')
    .controller('HomeController',function($rootScope,$scope,loginService,$location){
    $rootScope.userName='';
    var userPromise = loginService.getAll();
    userPromise.then(function(result){
        $scope.users=result;
    });
    $scope.passName = function(){
        $rootScope.userName = angular.element('#userSelect')[0].value;
        if($rootScope.userName === '--Select A User--'){
            $location.path('/');
        }
        else{
            $location.path('/dashboard');
        }
    };
});