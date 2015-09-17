angular.module('myApp')
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .when('/resume', {
                templateUrl: 'resume/resume.html',
                controller: 'resumeController'
            })
            .when('/contact', {
                templateUrl: 'contact/contact.html',
                controller: 'contactController'
            })
            .when('/dataScience', {
                templateUrl: 'blogs/dataScience.html',
                controller: 'dataScienceController'
            })
            .when('/ui', {
                templateUrl: 'blogs/ui.html',
                controller: 'uiController'
            })
            .when('/education', {
                templateUrl: 'blogs/education.html',
                controller: 'educationController'
            })
            .otherwise({ redirectTo: '/' });
    });