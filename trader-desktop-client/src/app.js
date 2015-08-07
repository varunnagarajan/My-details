(function () {

    'use strict';
    angular.module('myApp.home', []);
    angular.module('myApp.contact', []);
    angular.module('myApp', [

        'ngRoute',
        'ngResource',
        'ngSanitize',
        'myApp.templates',
        'myApp.home',
        'myApp.contact',
    ])
        .run(function ($log) {
            $log.log('My application has loaded');
        });
})();
