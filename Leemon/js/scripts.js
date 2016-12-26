﻿/*------------ Background slideshow ------------*/
$('#intro').backstretch([
    "img/bg/01.jpg",
    "img/bg/02.jpg",
    "img/bg/03.jpg"
], { fade: 750, duration: 4000 });

/*---------- Countdown ----------*/
var now = new Date();
var countTo = 25 * 24 * 60 * 60 * 1000 + now.valueOf();
$('.timer').countdown(countTo, function (event) {
    $(this).find('.days').text(event.offset.totalDays);
    $(this).find('.hours').text(event.offset.hours);
    $(this).find('.minutes').text(event.offset.minutes);
    $(this).find('.seconds').text(event.offset.seconds);
});