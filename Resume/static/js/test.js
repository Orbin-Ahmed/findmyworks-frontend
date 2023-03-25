$(function () {
    var timer = setInterval(function () {
        $("#count_num").html(function (i, html) {

            if (parseInt(html) > 0) {
                return parseInt(html) - 1;
            }
            else {
                clearTimeout(timer);
                return window.location.href = "http://www.w3schools.com";
            }
        });

    }, 1000);



});