/*globals io*/
angular.module('myApp.contact')
    .service('OrderEventsService', function (ServerUrl, socketFactory) {

        'use strict';

        var socket = socketFactory({
            ioSocket: io.connect(ServerUrl)
        });

        this.on = function (eventType, callback) {
            socket.on(eventType, callback);
        };

    });