describe('Dashboard Controller Testing', function () {

    'use strict';
    var _controller,
        _rootScope,
        _scope,
        _location,
        _instrumentService,
        _orderService,
        _randomize,
        _OrderEventsService,
        _OrderEventType;

    beforeEach(function () {
        // Load the app's main module
        module('trader.dashboard');

        // Inject the necessary components
        inject(function ($controller, $rootScope) {
            _scope = $rootScope.$new();
            _rootScope = {
                userName : ''
            };
            _location = {
                path : function () {}
            };
            _instrumentService = {
                getAll : function(){
                    return {then: function(){}};
                }
            };
            _orderService = {
                getAll : function(){
                    return {then: function(){}};
                }
            };
            _randomize = {
                randomizeAndAddOrder : function(){}
            };
            _OrderEventType = {
                created : function(){return [];},
                placed : function(){return [];},
                executed : function(){return [];}
            };
            _OrderEventsService = {
                on : function(_OrderEventType){return [];}
            };
            _controller = function () {
                return $controller('DashboardController', {$rootScope: _rootScope, $scope: _scope, $location: _location,instrumentService : _instrumentService,
                 orderService : _orderService, randomize : _randomize, OrderEventsService : _OrderEventsService, OrderEventType : _OrderEventType});
            };

        });
    });

/*    it('should be defined', function () {
        expect(_controller()).toBeDefined();
    });*/
    
});