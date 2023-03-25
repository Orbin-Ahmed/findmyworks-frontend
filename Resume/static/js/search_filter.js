var list = document.getElementById('filter-area');

function filter_add(id) {
    var filter_name = document.getElementById(id).innerHTML;
    var temp = filter_name.replace("&amp;", "&");
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(temp));
    list.appendChild(entry);
    for (let i = 1; i < 12; i++) {
        document.getElementById('filter_' + i).style.pointerEvents = "none";
        document.getElementById('filter_' + i).classList.add("text-muted");
    }
}

function clear_filter() {
    document.getElementById('filter-area').innerHTML = '';
    for (let i = 1; i < 12; i++) {
        document.getElementById('filter_' + i).style.pointerEvents = "auto";
        document.getElementById('filter_' + i).classList.remove("text-muted");
    }
}

function show_filter(id) {
    var current_state = document.getElementById("Category_filter_content").style.display;
    let current_state_1 = document.getElementById("filter_location").style.display;
    if (id == "Category_filter" && current_state == "none") {

        document.getElementById("Category_filter_content").style.display = "block";
    }
    // location Filter
    else if (id == "Category_filter_1" && current_state_1 == "none") {

        document.getElementById("filter_location").style.display = "block";
    } else if (id == "Category_filter_1" && current_state_1 == "block") {

        document.getElementById("filter_location").style.display = "none";
    } else {
        document.getElementById("Category_filter_content").style.display = "none";
    }
}

function show_filter_1(id) {
    var current_state_2 = document.getElementById("Category_filter_fund").style.display;
    var current_state_3 = document.getElementById("Category_filter_content_1").style.display;
    // var current_state_4 = document.getElementById("Category_filter_project").style.display;
    // Fund Filter
    if (id == "Category_filter_2" && current_state_2 == "none") {

        document.getElementById("Category_filter_fund").style.display = "flex";
    } else if (id == "Category_filter_2" && current_state_2 == "flex") {

        document.getElementById("Category_filter_fund").style.display = "none";
    }
    // Time Filter
    else if (id == "Category_filter_content_1" && current_state_3 == "none") {

        document.getElementById("Category_filter_content_1").style.display = "block";
    } else if (id == "Category_filter_content_1" && current_state_3 == "block") {

        document.getElementById("Category_filter_content_1").style.display = "none";
    }
    // Project Filter
    else if (id == "Category_filter_project" && current_state_4 == "none") {

        document.getElementById("Category_filter_project").style.display = "flex";
    } else if (id == "Category_filter_project" && current_state_4 == "flex") {

        document.getElementById("Category_filter_project").style.display = "none";
    }
}

$(function () {

    $(document).on({
        mouseover: function (event) {
            $(this).find('.far').addClass('star-over');
            $(this).prevAll().find('.far').addClass('star-over');
        },
        mouseleave: function (event) {
            $(this).find('.far').removeClass('star-over');
            $(this).prevAll().find('.far').removeClass('star-over');
        }
    }, '.rate');


    $(document).on('click', '.rate', function () {
        if (!$(this).find('.star').hasClass('rate-active')) {
            $(this).siblings().find('.star').addClass('far').removeClass('fas rate-active');
            $(this).find('.star').addClass('rate-active fas').removeClass('far star-over');
            $(this).prevAll().find('.star').addClass('fas').removeClass('far star-over');
        } else {
            console.log('has');
        }
    });

});


function show_filter_3(id) {
    var current_state = document.getElementById("Category_filter_content").style.display;
    if (id == "Category_filter" && current_state == "none") {

        document.getElementById("Category_filter_content").style.display = "block";
    } else {
        document.getElementById("Category_filter_content").style.display = "none";
    }
}
