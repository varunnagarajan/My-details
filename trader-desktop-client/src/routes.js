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
                templateUrl: 'resume/resume.html',
                controller: 'resumeController'
            })
            .when('/hobbies', {
                templateUrl: 'hobbies/hobbies.html',
                controller: 'hobbiesController'
            })
            .when('/recognitions', {
                templateUrl: 'recognitions/recognitions.html',
                controller: 'recognitionsController'
            })
            .otherwise({ redirectTo: '/' });
    });