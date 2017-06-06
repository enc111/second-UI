import * as $ from 'jquery'
import Chart from 'chart.js'

var ctx = document.getElementById("multi").getContext('2d');
var multi = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [12, 20, 20, 30],
            backgroundColor: [
                '#747474',
                '#e75735',
                '#4eb7a8',
                '#e5e5e5'
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutoutPercentage: 60
    }
});