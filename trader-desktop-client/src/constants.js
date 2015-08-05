angular.module('myApp.contact')
    .constant('ServerUrl', 'http://localhost:8080')
    .constant('OrderEventType', {
        created: 'orderCreatedEvent',
        placed: 'placementCreatedEvent',
        executed: 'executionCreatedEvent',
        cleared: 'allOrdersDeletedEvent'
    });