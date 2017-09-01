import * as $ from 'jquery'


$( document ).ready(function() { // 6,32 5,38 2,34
    $(".percentages_pie").each(function(index) {
            $("#"+$(this).attr('id')).circliful({
                animation: 0,
                foregroundBorderWidth: 78,
                foregroundColor: '#e75735',
                backgroundBorderWidth: 0,
                percent: Number(this.id),
                pointSize: 85,
			    pointColor: '#ffffff',
                percentageTextSize: 75,
                percentageY: 125,
                noPercentageSign: 1
            });
    })

});