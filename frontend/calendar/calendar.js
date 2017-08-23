import 'moment'
import 'lodash'
$(document).ready(function() {

    $('.clndr-controls').clndr({

        weekOffset: 1,
        daysOfTheWeek: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    });
});