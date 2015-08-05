angular.module('myApp')
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .when('/Contact', {
                templateUrl: 'contact/contact.html',
                controller: 'contactController'
            })
            .otherwise({ redirectTo: '/' });
    });