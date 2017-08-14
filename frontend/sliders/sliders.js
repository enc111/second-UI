function sliderLine(slider) {
    let sl = $(slider);
    sl.css('background', 'linear-gradient(to right, #4eb7a8 0%, #4eb7a8 ' + sl.val() + '%, #e5e5e5 ' + sl.val() + '%, #e5e5e5 100%)');
}

function sliderOutput(slider) {
    el = $(slider);
    width = el.width();
    newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
    offset = -1.3;
    if (newPoint < 0) { newPlace = 0;  }
    else if (newPoint > 1) { newPlace = width; }
    else { newPlace = width * newPoint + offset; offset -= newPoint;}//
    el.next("output").css({
        left: newPlace - el.val() / 4,
        marginLeft: offset + "%"
    }).text(el.val());
}

$( document ).ready(function() {

    sliderOutput(".sliders__first_range1");
    $(".sliders__first_range1").on('input', function() {
        sliderOutput(this);
    });

    sliderLine(".sliders__second_range2");
    $(".sliders__second_range2").on('input', function () {
        sliderLine(this);
    });
});


