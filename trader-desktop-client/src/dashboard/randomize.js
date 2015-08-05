'use strict';
angular.module('trader.dashboard').service('randomize', function(Order,orderService){
    this.randomizeAndAddOrder = function(numOrders,sideArray,name,parsedUserObject){
        for(var i=0;i<numOrders;++i){
            var defaults={
                side : sideArray[Math.floor(Math.random()+0.5)],//random
                symbol: name[Math.floor(Math.random()*name.length)],//random
                quantity :  Math.floor(Math.random()*(1000-500)+500),
                limitPrice : Math.floor(Math.random()*(5000-1000)+1000),//random
                traderId :  parsedUserObject.id//random
            };
            var newOrder = new Order(defaults);
            orderService.add(newOrder);
        }
    };
});