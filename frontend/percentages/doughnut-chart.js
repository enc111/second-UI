import * as $ from 'jquery'

$( document ).ready(function() { // 6,32 5,38 2,34
        $(".pie").circliful({
			animation: 0,
            foregroundBorderWidth: 16,
            foregroundColor: 'green',
            backgroundBorderWidth: 0,
            percent: 38,
			percentageTextSize: 25,
			noPercentageSign: 1,
			textSize: 10,
            textStyle: 'font-size: 8px;',
            textColor: '#668'
        });
	});