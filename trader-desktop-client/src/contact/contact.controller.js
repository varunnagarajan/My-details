'use strict';
angular.module('myApp.contact')
    .controller('contactController',function(){




        // OLD CODE TRADER APP
        /*$scope.toggleView = true;
        $scope.span=false;                  //Variable for showing error Message in span
        var sideArray = ['Buy','Sell'];     //Array for side to be randomized
        var name = [];                      //Array which holds all the symbols from instruments
        var parsedUserObject = JSON.parse($rootScope.userName);         //Variable for storing the User object after being parsed
        
        $scope.userName = parsedUserObject.name;                        //User's name
        if($rootScope.userName === undefined){
            $location.path('/');
        }

        (function(){          //This function is to fetch all instruments from server and push into name
            var instrumentPromise = instrumentService.getAll();
            instrumentPromise.then(function(result){
                $scope.instruments = result;
                for(var i=0;i<$scope.instruments.length;i++){
                    name.push($scope.instruments[i].symbol);
                }
            });
        })();

        $scope.chartLoader = function(evt){     //For loading the Chart along with the lables,axis,legend and other texts
            var xscale=d3.scale.linear()
                .domain([0,1200])
                .range([0,1000]);
            var w=1200,h=500,paddingy=10,paddingx=45,extraPaddingY=40;
            var hieghtBar=35,widthBar=1000;
            var main=d3.select('#detailsChart') //Main Svg Element
                      .append('svg')
                      .attr('width',w+200)
                      .attr('height',h);
            main.selectAll('g')                 //Adding group  and rect elements to the svg element
                .data(evt)
                .enter()
                .append('g')
                .attr('width',w)
                .attr('height',hieghtBar)
                .append('rect')
                .attr({
                id: function(d){var identity='q'+d.id; return identity;},
                x: paddingx,
                y: function(d,i){return (i*hieghtBar)+paddingy+extraPaddingY;},
                width: function(){return widthBar;},
                height: hieghtBar-paddingy,
                fill: '#FFF4CE'
            });
            main.selectAll('g')                 //Adding rectangle for placed quantity
                .data(evt)
                .append('rect')
                .attr({
                id: function(d){var identity='qp'+d.id; return identity;},
                x: paddingx,
                y: function(d,i){return (i*(hieghtBar)+paddingy+extraPaddingY);},
                width: function(d){return d.quantityPlaced/d.quantity*widthBar;},
                height: hieghtBar-paddingy,
                fill: '#FDBD5A'
            });
            main.selectAll('g')                 //Adding rectangle for executed quantity
                .data(evt)
                .append('rect')
                .attr({
                id: function(d){var identity='qe'+d.id; return identity;},
                x: paddingx,
                y: function(d,i){return (i*(hieghtBar)+paddingy+extraPaddingY);},
                width: function(d){return d.quantityExecuted/d.quantity*widthBar;},
                height: hieghtBar-paddingy,
                fill: '#FD8300'
            });
            main.selectAll('g')                 //Adding rectangle for underline towards right
                .append('rect')
                .attr({
                x: function(){return widthBar+paddingx;},
                y: function(d,i){return (i*(hieghtBar)+paddingy+22+extraPaddingY);},
                width: function(){return 0.1*(widthBar);},
                height: 3,
                fill: '#FFF4CE'
            });
            main.selectAll('g')                 //Adding text for total quantity displayed towards right
                .data(evt)
                .append('text')
                .text(function(d){
                    return d.quantity;
                })
                .attr({
                    x:function(){return paddingx+widthBar+50;},
                    y:function(d,i){return (i*hieghtBar+paddingy+12+extraPaddingY);},
                    'fill':'black'
                });
            main.selectAll('g')                 //Adding text for order Id displayed towards left
                .data(evt)
                .append('text')
                .text(function(d){
                    return d.id;
                })
                .attr({
                    x:function(){return 20;},
                    y:function(d,i){return (i*hieghtBar+paddingy+12+extraPaddingY);},
                    'fill':'black'
                });
            main.append('text')                 //Adding the Label for Y-Axos towards left
                .attr({
                    'text-anchor': 'middle',
                    x:0-h/2,
                    y:10,
                    'transform': 'rotate(-90)',
                    'font-size' : 14,
                    'fill' : 'black'
                })
                .text('Order Id');
            main.append('text')                 //Adding the Label for X-Axos towards top
                .attr({
                    'text-anchor': 'middle',
                    x: w/2 - paddingx,
                    y: 15,
                    'font-size' : 18,
                    'fill' : 'black'
                })
                .text('Order Execution Status');
            var xAxis=d3.svg.axis();            //Adding Axis
            xAxis.scale(xscale).orient('top')
                .ticks(10)
                .tickSize(3,0)
                .tickFormat(function(d){return Math.floor(d/(w*10/widthBar)) + '%';});
            main.append('g').call(xAxis)
                .attr('class','axis')
                .attr('transform','translate('+paddingx+','+extraPaddingY+')');
            main.append('text')
                .attr({
                    x:1095,
                    y:25,
                    id:'total',
                    'font-size':12,
                    'fill':'black'
                })
                .text('Total');
            var colors = [['#fff4ce',100],
              ['#fdbd5a',125],
              ['#fd8300',150]];
            d3.select('svg')
            .selectAll('svg')
            .data(colors)
            .enter().append('rect')
            .attr({
                'x':1200,
                'y':function(d){return d[1];},
                'fill': function(d){return d[0];},
                'width':20,
                'height':20,
                'class':'legendColor'
            });
            var legends = [['Total Order',115],
                  ['Placed',140],
                  ['Executed',165]];
            d3.select('svg')
            .selectAll('svg')
            .data(legends)
            .enter().append('text')
            .attr({
                'x':1225,
                'y':function(d){return d[1];}
            })
            .text(function(d){return d[0];});
        };

        $scope.chartRemover = function(){           //For removing the entire chart
            d3.selectAll('svg').data([]).exit().remove();
            //Remove all existing bars attached to the svg
        };

        $scope.chartPlacedUpdater = function(id,placedQuantity,totalQuantity){  //For updating bar on placing of order
            //Change only the parameters of the existing bar
            d3.select('#'+'qp'+id)
              .attr({
                width: function(){return placedQuantity/totalQuantity*1000;}
            });
        };

        $scope.chartExecutedUpdater = function(id,executedQuantity,totalQuantity){  //For updating bar on execution of order
            d3.select('#'+'qe'+id)
              .attr({
                width: function(){return executedQuantity/totalQuantity*1000;}
            });
        };

        $scope.renderOrders = function(){       //This function is to fetch the order list when loading the dashboard page
            var orderPromise = orderService.getAll();
            orderPromise.then(function(result){
                $scope.orders=result;
                $scope.chartLoader(result);
            });
        };

        $scope.renderOrders();

        $scope.toggleViewToChart = function(){  //For Toggling View Between Table and Chart
            if($scope.toggleView === true){
                $scope.toggleView = false;
            }
        };

        $scope.toggleViewToTable = function(){  //For Toggling View Between Table and Chart
            if($scope.toggleView === false){
                $scope.toggleView = true;
            }
        };

        $scope.addOrder = function (numOrders) { //Function to validate and execute trades
            if(numOrders>100 || numOrders<0){
                $scope.span=true;
                return;
            }
            else{
                $scope.span=false;
                randomize.randomizeAndAddOrder(numOrders,sideArray,name,parsedUserObject); // For randomizing and adding the order
            }
        };

        $scope.deleteAllOrders =function(){ //Function to delete all the orders/trades from the server
            orderService.deleteOrders();
        };
        
        OrderEventsService.on(OrderEventType.created, function(order) { //Websockets creating an order
            $scope.orders.push(order);
            $scope.chartRemover();
            $scope.chartLoader($scope.orders);
        });
        
        OrderEventsService.on(OrderEventType.placed, function(order) {  //Websockets placing an order
            for(var i=0;i<$scope.orders.length;++i){
                if($scope.orders[i].id === order.orderId){
                    $scope.orders[i].quantityPlaced += order.quantityPlaced;
                    $scope.orders[i].status = order.status;
                    $scope.chartPlacedUpdater(order.orderId,$scope.orders[i].quantityPlaced,$scope.orders[i].quantity);
                }
            }
        });
        
        OrderEventsService.on(OrderEventType.executed,function(order){  //Websockets executing an order
            for(var i=0;i<$scope.orders.length;++i){
                if($scope.orders[i].id === order.orderId){
                    $scope.orders[i].quantityExecuted += order.quantityExecuted;
                    $scope.orders[i].status = order.status;
                    $scope.chartExecutedUpdater(order.orderId,$scope.orders[i].quantityExecuted,$scope.orders[i].quantity);
                }
            }
        });

        OrderEventsService.on(OrderEventType.cleared,function(){  //Websockets removing all orders
            $scope.orders = [];
            $scope.chartRemover();
        });*/
}); //End of Controller