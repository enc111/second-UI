$(function() {
    var el, newPoint, newPlace, offset;
    $(".sliders__first_range1").on('input', function() {
        el = $(this);
        width = el.width();
        newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
        offset = 0;
        if (newPoint < 0) { newPlace = 0;  }
        else if (newPoint > 1) { newPlace = width; }
        else { newPlace = width * newPoint + offset; offset -= newPoint;}
        el.next("output").css({
            left: newPlace,
            marginLeft: offset + "%"
        }).text(el.val());
    });
    $(".slider__ruler_number").text($(".slider__ruler_number").attr('id'));

});

$(".sliders__second_range2").on('input', function () {
    $( this ).css( 'background', 'linear-gradient(to right, #4eb7a8 0%, #4eb7a8 '+this.value +'%, #e5e5e5 ' + this.value + '%, #e5e5e5 100%)' );
});

