import * as $ from 'jquery'


$( document ).ready(function() { // 6,32 5,38 2,34
    $(".percentages .pie").each(function(index) {
            $("#"+$(this).attr('id')).circliful({
                animation: 0,
                foregroundBorderWidth: 16,
                foregroundColor: '#e75735',
                backgroundBorderWidth: 0,
                percent: Number(this.id),
                percentageTextSize: 25,
                noPercentageSign: 1
            });
    })

});