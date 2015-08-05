'use strict';
angular.module('trader.dashboard').service('orderService', function($http,$q,Order){
        
    this.getAll = function(){
        var defered = $q.defer();
        var httpPromise = $http({method :'get', url :'http://localhost:8080/orders'});
        httpPromise.then(function(response){
            var result = [];
            for(var i=0;i<response.data.length;i++){
                result.push(new Order(response.data[i]));
            }
            defered.resolve(result);
        });
        return defered.promise;
    };
    this.add = function(order){
        $http.post('http://localhost:8080/orders',JSON.stringify(order));
    };
    this.deleteOrders = function(){
        $http({
            url:'http://localhost:8080/orders',
            method:'DELETE'
        });
    };
});