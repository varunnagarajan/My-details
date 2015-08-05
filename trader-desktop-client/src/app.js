(function () {

    'use strict';
    angular.module('trader.login', []);
    angular.module('trader.dashboard', []);
    angular.module('trader', [

        'ngRoute',
        'ngResource',
        'ngSanitize',
        'mgcrea.ngStrap',
        'trader.templates',
        'trader.login',
        'trader.dashboard',
        'btford.socket-io',
    ])
        .run(function ($log) {
            $log.log('Trader Application is working');
        });
})();
