describe('HomeController Testing', function () {

    'use strict';
    var _controller,
        _rootScope,
        _scope,
        _location,
        _loginService;

    beforeEach(function () {
        // Load the app's main module
        module('trader.login');

        // Inject the necessary components
        inject(function ($controller, $rootScope) {
            _scope = $rootScope.$new();
            _rootScope = {
                userName : ''
            };
            _location = {
                path : function () {}
            };
            _loginService = {
                getAll : function () {
                    return {then: function(){}};
                }
            };
            _controller = function () {
                return $controller('HomeController', {$rootScope: _rootScope, $scope: _scope, $location: _location, loginService: _loginService});
            };

        });
    });

    it('should be defined', function () {
        expect(_controller()).toBeDefined();
    });
    it('RootScope should have empty string by default',function(){
        //arrange
        //act
        _controller();
        //assert
        expect(_rootScope.userName).toBe('');
    })
});