import * as $ from 'jquery'
import 'moment'
import 'lodash'

$(document).ready(function() {

    $('.calendar__content').clndr({
        template: $('#template-calendar').html(),
        weekOffset: 1,
        daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    });
    var curDay = $('.today').text();
    $('.calendar__day-header').text(curDay);

});
