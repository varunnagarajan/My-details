angular.module('trader')
	.directive('sapeMessage', function () {
        'use strict';
        return {
            restrict: 'E',
            scope: {
                message: '@'
            },
            template: '<h2>{{ message }}</h2>'
        };
    });