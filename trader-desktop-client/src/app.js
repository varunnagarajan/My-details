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
        'btford.socket-io',
    ])
        .run(function ($log) {
            $log.log('Application has loaded');
        });
})();
