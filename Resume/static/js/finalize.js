const finalize_section = {
    "social_links": "",
    "publications": "",
    "image": ""
}
const social_links = []
const publications = []

function social_tick(st) {
    var $this = $(st);
    var social_tick_id = $this.attr('id');
    let disable_status_1 = document.getElementById("ldLink").disabled;
    let disable_status_2 = document.getElementById("fbLink").disabled;
    let disable_status_3 = document.getElementById("twLink").disabled;
    let button = document.querySelector("#finish_button");

    if (social_tick_id === "ldTick") {
        if (disable_status_1 === true) {
            document.getElementById("ldLink").disabled = false;
            document.getElementById('ldLink_error').innerHTML = "This field can not be empty";
            button.disabled = true;
        } else {
            document.getElementById("ldLink").disabled = true;
            document.getElementById('ldLink_error').innerHTML = "";
            button.disabled = false;
        }
    } else if (social_tick_id === "fbTick") {
        if (disable_status_2 === true) {
            document.getElementById("fbLink").disabled = false;
            document.getElementById('fbLink_error').innerHTML = "This field can not be empty";
            button.disabled = true;
        } else {
            document.getElementById("fbLink").disabled = true;
            document.getElementById('fbLink_error').innerHTML = "";
            button.disabled = false;
        }
    } else {
        if (disable_status_3 === true) {
            document.getElementById("twLink").disabled = false;
            document.getElementById('twLink_error').innerHTML = "This field can not be empty";
            button.disabled = true;
        } else {
            document.getElementById("twLink").disabled = true;
            document.getElementById('twLink_error').innerHTML = "";
            button.disabled = false;
        }
    }
}

$('#ldLink').keyup(function () {
    let ld_link = document.getElementById("ldLink").value;
    let ld_link_here = document.getElementById("ldlinkhere");
    ld_link_here.href = ld_link;
    let button = document.querySelector("#finish_button");
    if (ld_link === '') {
        document.getElementById('ldLink_error').innerHTML = "This field can not be empty";
        button.disabled = true;
    } else {
        document.getElementById('ldLink_error').innerHTML = "";
        button.disabled = false;
    }
});
$('#fbLink').keyup(function () {
    let fb_link = document.getElementById("fbLink").value;
    let fb_link_here = document.getElementById("fblinkhere");
    fb_link_here.href = fb_link;
    let button = document.querySelector("#finish_button");
    if (fb_link === '') {
        document.getElementById('fbLink_error').innerHTML = "This field can not be empty";
        button.disabled = true;
    } else {
        document.getElementById('fbLink_error').innerHTML = "";
        button.disabled = false;
    }
});
$('#twLink').keyup(function () {
    let tw_link = document.getElementById("twLink").value;
    let tw_link_here = document.getElementById("twlinkhere");
    tw_link_here.href = tw_link;
    let button = document.querySelector("#finish_button");
    if (tw_link === '') {
        document.getElementById('twLink_error').innerHTML = "This field can not be empty";
        button.disabled = true;
    } else {
        document.getElementById('twLink_error').innerHTML = "";
        button.disabled = false;
    }
});

function finalize_section_function() {
    let links = {}
    links["linkedin"] = data_list['ldLink']
    links["facebook"] = data_list['fbLink']
    links["twitter"] = data_list['twLink']

    social_links[0] = links;

    finalize_section["social_links"] = social_links;
//
    // var publication_title = document.getElementById("publication_title").value;
    // var publication_year = document.getElementById("publication_year").value;
    // var publication_link = document.getElementById("publication_link").value;
    //
    // if (publication_title != '') {
    //     var publication = {}
    //     publication["title"] = publication_title;
    //     publication["year"] = publication_year;
    //     publication["link"] = publication_link;
    // }
    // var publication_list = []
    // publication_list[0] = publication;
    // publications[0] = publication_list;
    //
    // finalize_section["publications"] = publications[0];
    finalize_section["image"] = data_list["user_image"];
}
