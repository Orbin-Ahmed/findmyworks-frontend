$('#proj-link1').keyup(function () {
    var proj_link = document.getElementById("proj-link1").value;
    var proj_link_here = document.getElementById("proj-link-here1");
    proj_link_here.innerHTML = proj_link;
    proj_link_here.href = proj_link;
});

function proj_change(pagination_id) {
    if (pagination_id === 'proj_btn_2') {
        document.getElementById("project_page_1").classList.add('hide');
        document.getElementById("project_page_2").classList.add('active');

        document.getElementById("project-area").classList.remove('hide');

        document.getElementById("project_page_1").classList.remove('active');
        document.getElementById("project_page_2").classList.remove('hide');

        document.getElementById('proj_page_3').classList.remove("myStep-1");
        document.getElementById('proj_page_4').classList.add("myStep-1");

    } else {
        document.getElementById("project_page_1").classList.add('active');
        document.getElementById("project_page_2").classList.add('hide');

        document.getElementById("project_page_1").classList.remove('hide');
        document.getElementById("project_page_2").classList.remove('active');

        document.getElementById('proj_page_1').classList.add("myStep-1");
        document.getElementById('proj_page_2').classList.remove("myStep-1");
    }
}

function add_project() {
    document.getElementById("project_page_1").classList.add('hide');
    document.getElementById("project_page_2").classList.add('active')
    document.getElementById("project_page_1").classList.remove('active');
    document.getElementById("project_page_2").classList.remove('hide')

    document.getElementById('proj_pagination_1').style.display = "flex"
    document.getElementById("proj_add_pg").style.display = "none";
    custom_project();
}

function custom_project() {

    $('<p class="data-in-project" id="custom-project-sec-id">' +
        '<span class="proj-title1" style="font-size: 0.8rem;">Project Title</span>' +
        '<b>' +
        '<span class="content"> ( </span>' +
        '<span class="content proj-start-date1" id="preview_project_start_date1">Start Date</span>' +
        '<span class="content"> - </span>' +
        '<span class="content project-end-date1" id="proj-end-date1">End Date</span>' +
        '<span class="content"> )</span>' +
        '</b>' +
        '</p>' +
        '<p class="content" style="margin-top:-1rem;">' +
        '<span id="proj-link1">Link:</span>' +
        '<a id="proj-link-here1" href=""></a>' +
        '</p>' +
        '<p class="content proj-description1" style="margin-top: -0.25rem;">Project Description here( If any).</p>').appendTo('#project-area');
}

function payment_gateway(id) {
    var payment_1 = document.getElementById("pay_mobile").classList.contains("active-1");
    var payment_2 = document.getElementById("pay_card").classList.contains("active-1");
    var payment_3 = document.getElementById("pay_bank").classList.contains("active-1");

    if (payment_1 == true) {
        document.getElementById("pay_mobile").classList.remove("active-1");
    } else if (payment_2 == true) {
        document.getElementById("pay_card").classList.remove("active-1");
    } else if (payment_3 == true) {
        document.getElementById("pay_bank").classList.remove("active-1");
    }
    document.getElementById(id).classList.add("active-1");

    switch_payment(id);
}

function switch_payment(id) {
    if (id == "pay_mobile") {
        document.getElementById("mobile").style.display = "block";
        document.getElementById("card").style.display = "none";
        document.getElementById("bank").style.display = "none";
    } else if (id == "pay_card") {
        document.getElementById("mobile").style.display = "none";
        document.getElementById("card").style.display = "block";
        document.getElementById("bank").style.display = "none";
    } else if (id == "pay_bank") {
        document.getElementById("mobile").style.display = "none";
        document.getElementById("card").style.display = "none";
        document.getElementById("bank").style.display = "block";
    }
}


function change_page() {
    var temp_1 = document.getElementById("payment-card-style-1").style.display;
    if (temp_1 == "flex") {
        document.getElementById("payment-card-style-1").style.display = "none";
        document.getElementById("payment-card-style-2").style.display = "flex";
    }
}

function sponsershipsPublish(id) {
    if (id == "sponsor-card-1") {
        document.getElementById("sponsor-card-2").style.display = "flex";
    } else if (id == "sponsor-card-2") {
        document.getElementById("sponsor-card-3").style.display = "flex";
    } else {
        document.getElementById("sponsor-card-2").style.display = "flex";
    }
    document.getElementById(id).style.display = "none";
}

// Drishty

const desArea = document.querySelector("#project_sponsor_description");
const desCount = document.querySelector("#des-count");
const sponsorMessage = document.querySelector("#sponsor-Message");


try {
    desArea.addEventListener("input", function () {
        const wordsDes = this.value.trim().split(/\s+/);
        const countDes = wordsDes.length > 50 ? 50 : wordsDes.length;
        if (wordsDes[0] == '') {
            desCount.textContent = `0/50`;
        } else {
            desCount.textContent = `${countDes}/50`;
        }
        desCount.classList.toggle("green", wordsDes.length <= 50);
        desCount.classList.toggle("red", wordsDes.length > 50);
        sponsorMessage.classList.toggle("desMessage", wordsDes.length < 50);
    });
} catch (err) {
}

// Amount

const amount = document.querySelector("#project_sponsor_amount");
const errorAmount = document.querySelector("#errorAmount");

try {
    amount.addEventListener("input", function (event) {
        const value = event.target.value;
        if (isNaN(value) || value === "") {
            errorAmount.textContent = "Please enter a valid number";
        } else {
            errorAmount.textContent = "";
        }
    });
} catch (err) {
}
