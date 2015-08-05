'use strict';
angular.module('trader').service('instrumentService', function($http,$q,Instrument){
        
    this.getAll = function(){
        var defered = $q.defer();
        var httpPromise = $http({method :'get', url :'http://localhost:8080/instruments'});
        httpPromise.then(function(response){
            var result = [];
            for(var i=0;i<response.data.length;i++){
                result.push(new Instrument(response.data[i]));
            }
            defered.resolve(result);
        });
        return defered.promise;
    };
});