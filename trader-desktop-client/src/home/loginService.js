'use strict';
angular.module('myApp').service('loginService', function(){
        
    /*this.getAll = function(){
        var defered = $q.defer();
        var httpPromise = $http({method :'get', url :'http://localhost:8080/users'});
        httpPromise.then(function(response){
            var result = [];
            for(var i=0;i<response.data.length;i++){
                result.push(new User(response.data[i]));
            }
            defered.resolve(result);
        });
        return defered.promise;
    };*/
});