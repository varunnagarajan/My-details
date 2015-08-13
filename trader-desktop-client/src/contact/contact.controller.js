'use strict';
/*globals google*/
angular.module('myApp.contact')
    .controller('contactController',function(){
        function initialize() {
            var myLatlng = new google.maps.LatLng(12.9548195, 77.7171943);
            var marker = new google.maps.Marker({
                position: myLatlng,
                title:'My house!'
            });
            var mapCanvas = document.getElementById('map');
            var mapOptions = {
                center: new google.maps.LatLng(12.9548195, 77.7171943),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);
            marker.setMap(map);
        }
        initialize();
    });