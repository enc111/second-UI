import * as $ from 'jquery'
import * as gmap3 from 'gmap3'

$( document ).ready(function() {
    $('#map').gmap3({

        address: "San Francisco, 1259 California Str.",
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    })
   .marker({
        position: [37.7912, -122.4151],
        icon: require('./marker.png')
    });

});
