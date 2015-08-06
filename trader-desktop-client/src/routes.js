angular.module('myApp')
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .when('/contact', {
                templateUrl: 'contact/contact.html',
                controller: 'contactController'
            })
            .when('/resume', {
                templateUrl: 'contact/contact.html',
                controller: 'contactController'
            })
            .when('/hobbies', {
                templateUrl: 'contact/contact.html',
                controller: 'contactController'
            })
            .otherwise({ redirectTo: '/' });
    });