$(document).ready(function(){
    $('.js--section-mission').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: "130px;"
    });
});