(function () {

    'use strict';
    angular.module('myApp.home', []);
    angular.module('myApp.resume', []);
    angular.module('myApp.hobbies', []);
    angular.module('myApp.contact', []);
    angular.module('myApp', [

        'ngRoute',
        'ngResource',
        'ngSanitize',
        'myApp.templates',
        'myApp.home',
        'myApp.resume',
        'myApp.hobbies',
        'myApp.contact',
    ])
        .run(function ($log) {
            $log.log('My application has loaded');
        });
})();
