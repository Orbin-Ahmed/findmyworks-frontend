const custom_section_data = [];
const id_store_array = [];
var label_value;

function add_sec(cSec_checkbox, div_id) {
    var $this = $(cSec_checkbox);
    var custom_check_id = $this.attr('id');
    if (custom_check_id == "custom_sec1_check") {
        document.getElementById("custom_sec2_check").disabled = true;
        document.getElementById("custom_sec3_check").disabled = true;
        document.getElementById("custom_sec4_check").disabled = true;
    } else if (custom_check_id == "custom_sec2_check") {
        document.getElementById("custom_sec1_check").disabled = true;
        document.getElementById("custom_sec3_check").disabled = true;
        document.getElementById("custom_sec4_check").disabled = true;
    } else if (custom_check_id == "custom_sec3_check") {
        document.getElementById("custom_sec1_check").disabled = true;
        document.getElementById("custom_sec2_check").disabled = true;
        document.getElementById("custom_sec4_check").disabled = true;
    } else if (custom_check_id == "custom_sec4_check") {
        document.getElementById("custom_sec1_check").disabled = true;
        document.getElementById("custom_sec2_check").disabled = true;
        document.getElementById("custom_sec3_check").disabled = true;
    } else {
        document.getElementById("custom_sec2_check").disabled = true;
        document.getElementById("custom_sec3_check").disabled = true;
        document.getElementById("custom_sec1_check").disabled = true;
        document.getElementById("custom_sec4_check").disabled = true;
    }
    var final_custom_id = custom_check_id.replace('_check', '');
    var final_label_id = custom_check_id.replace('check', 'label');
    document.getElementById(final_custom_id).disabled = false;
    label_value = document.getElementById(final_label_id).innerHTML;
    new_sec(label_value);
    document.getElementById(custom_check_id).disabled = true;
    var insert_id = custom_check_id.replace('_check', '_content');
    document.getElementById(insert_id).disabled = false;
}

function add_education() {
    document.getElementById("education_page").classList.add('hide')
    document.getElementById("education_page").classList.remove('active')
    document.getElementById("education_page_1").classList.add('active')
    document.getElementById("education_page_1").classList.remove('hide')

    document.getElementById('education_pagination_1').style.display = "flex"
    document.getElementById("education_add_pg").style.display = "none";

    custom_education();
}

function add_work_hist() {
    document.getElementById("work_history_1").classList.add('hide');
    document.getElementById("work_history_2").classList.add('active');
    document.getElementById("work_history_1").classList.remove('active');
    document.getElementById("work_history_2").classList.remove('hide');

    document.getElementById('work_pagination_1').style.display = "flex"
    document.getElementById("work_add_pg").style.display = "none";

    custom_work_history();
}

function add_conent(sec_conent, checkbox_id) {
    message_list = [];
    var $this = $(sec_conent);
    var conent_id = $this.attr('id');
    var final_content_id = conent_id.replace('_content', '');
    message = document.getElementById(final_content_id).value

    message_list.push(message);

    var paragraph = document.createElement("P");
    paragraph.innerHTML = message;
    paragraph.setAttribute('class', 'custom_content');
    document.getElementById('flex_div').appendChild(paragraph);

    document.getElementById(conent_id).disabled = true;

    var section_data = {"name": label_value, "values": message_list}
    custom_section_data.push(section_data);
    let temp_list = ['custom_sec1_check', 'custom_sec2_check', 'custom_sec3_check', 'custom_sec4_check', 'custom_sec5_check']
    id_store_array.push(checkbox_id);
    console.log(id_store_array)
    for (let i = 0; i < temp_list.length; i++) {
        if (id_store_array.includes(temp_list[i])) {
            document.getElementById(temp_list[i]).disabled = true;
        } else {
            document.getElementById(temp_list[i]).disabled = false;
        }
    }
}

function new_sec(label_name) {
    var div = document.createElement('div');
    var line1 = document.createElement("HR");
    var line2 = document.createElement("HR");
    div.innerHTML = label_name;
    div.setAttribute('class', 'custom_title');
    line1.setAttribute('class', 'horizontal-line-1');
    line2.setAttribute('class', 'horizontal-line-1');
    document.getElementById("flex_div").appendChild(line1);
    document.getElementById("flex_div").appendChild(div);
    document.getElementById("flex_div").appendChild(line2);
}

function final_section_push() {
    data_list["Custom_section"] = custom_section_data;
}

function custom_section() {
    var field_name = document.getElementById('custom_section_name').value;

    $(
        '<div class="row d-flex justify-content-between mt-3">' +
        '<div class="col-md-4">' +
        '<input class="form-check-input" type="checkbox" value="" id="custom_sec5_check" onclick="add_sec(this);">' +
        '<label class="form-check-label" style="padding-left:0.3125rem" for="Currently_study" id="custom_sec5_label">' + field_name + '</label>' +
        '</div>' +
        '<div class="col-md-6">' +
        '<input type="text" class="form-control custom_sec5" value="" id="custom_sec5" placeholder="Insert Section Body Here" disabled>' +
        '</div>' +
        '<div class="col-md-2" style="margin-right: -1.8rem;">' +
        '<button class="btn insert_button" type="button" id="custom_sec5_content" onclick="add_conent(this, \'custom_sec5_check\');">Insert</button>' +
        '</div>' +
        '</div>').appendTo('#new_section');
    document.getElementById('custom_section_name').value = ""
    document.getElementById('custom_section_name').disabled = true
    document.getElementById('button-addon2_cus_sec').disabled = true
}


function custom_education() {

    $(
        '<div class="card-body h-100" id="custom-edu-sec-id">' +
        '<p class="bold-sub myMargin" style="margin-bottom: 0.5rem;">' +
        '<b>' +
        '<span id="degree1">BBA</span>' +
        '<span> : </span>' +
        '<span class="major1">HRM</span>' +
        '<span class="content"> ( </span>' +
        '<span class="content study_start_date1" id="preview_edu_start_date1">Start Date</span>' +
        '<span class="content"> - </span>' +
        '<span class="content study_end_date1" id="st_end_date1">End Date</span>' +
        '<span class="content"> )</span>' +
        '</b>' +
        '</p>' +
        '<p class="content myMargin">' +
        '<span>Result: </span>' +
        '<span class="result1"></span>' +
        '</p>' +
        '<p class="content myMargin Institute_name1" id="inst_name1">Shanto-Mariam University Of Creative Tech</p>' +
        '<p class="content myMargin Institute_Address1">Plot: 1, Road: 30, Sector: 11, Uttara, Dhaka-1230</p>' +
        '<ul class="list-header curriculam-list" id="curriculam-area">' +
        '</ul>' +
        '</div>').appendTo('#education_sec_2');
}

function custom_work_history() {

    $(
        '<p class="bold-sub" id="custom-work-sec-id">' +
        '<b class="designation1">Designation</b>' +
        '<span class="content">( </span>' +
        '<span class="content company_start_date1" id="preview_company_start-date1">Start Date</span>' +
        '<span class="content"> - </span>' +
        '<span class="content company_end_date1" id="jb_end_date1">End Date</span>' +
        '<span class="content">)</span>' +
        '</p>' +
        '<p class="content" style="margin-top: -1rem;">' +
        '<span class="company1">XYZ Ltd</span>,' +
        '<span class="city_country1">Dhaka</span>' +
        '</p>').appendTo('#work_sec_2');
}
