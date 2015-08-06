(function () {

    'use strict';
    angular.module('myApp.login', []);
    angular.module('myApp.contact', []);
    angular.module('myApp', [

        'ngRoute',
        'ngResource',
        'ngSanitize',
        'mgcrea.ngStrap',
        'myApp.login',
        'myApp.contact',
    ])
        .run(function ($log) {
            $log.log('My application has loaded');
        });
})();
