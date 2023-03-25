$('.input').keyup(function () {
    var $this = $(this);
    $('.' + $this.attr('id') + '').html($this.val());
});

function select_degree(opt) {
    var value = opt.options[opt.selectedIndex].value;
    document.getElementById('degree').innerHTML = value;
    data_list["degree_1"] = value;
}

function select_degree1(opt) {
    var value = opt.options[opt.selectedIndex].value;
    document.getElementById('degree1').innerHTML = value;
    data_list["degree_2"] = value;
}

function select_institutes(opt) {
    var id = opt.options[opt.selectedIndex].value;
    var value = opt.options[opt.selectedIndex].text;
    document.getElementById('inst_name').innerHTML = value;
    data_list["inst_name"] = id;
}

function select_institutes1(opt) {
    var id = opt.options[opt.selectedIndex].value;
    var value = opt.options[opt.selectedIndex].text;
    document.getElementById('inst_name1').innerHTML = value;
    data_list["inst_name1"] = id;
}

// Salman

// function showTheDate(takeId , PreviewDate){
//
//     let getDate = document.querySelector(`#${takeId}`);
//     let showDate = document.querySelector(`#${PreviewDate}`);
//
//     getDate.addEventListener('input' , function (){
//         showDate.innerHTML = getDate.value;
//     })
//
//     showTheDate('date_of_birth' , 'date_0f_birth_preview');
// }


// Date Real time Show

let birthDate = document.getElementById('date_0f_birth_preview');
let datePicker = document.getElementById('date_of_birth');

// 1st Education
let eduStartDatePicker = document.getElementById('study_start_date');
let eduEndDatePicker = document.getElementById('study_end_date');
let previewEduStartDate = document.getElementById('edu_preview_start_date');
let previewEduEndDate = document.getElementById('st_end_date');

// 2nd education
let hiddenStartDatePicker = document.getElementById('study_start_date1');
let hiddenEndDatePicker = document.getElementById('study_end_date1');

// Company
let companyStartDatePicker = document.getElementById('company_start_date');
let companyEndDatePicker = document.getElementById('company_end_date');
let previewCompanyStartDate = document.getElementById('preview_company_start_date');
let previewCompanyEndDate = document.getElementById('jb_end_date');

// Company 2nd page
let companyStartDatePickerHidden = document.getElementById('company_start_date1');
let companyEndDatePickerHidden = document.getElementById('company_end_date1');

// Project
let projStartDatePicker = document.getElementById('proj-start-date');
let projEndDatePicker = document.getElementById('project-end-date');
let previewProjStartDate = document.getElementById('preview-proj-start-date');
let previewProjEndDate = document.getElementById('proj-end-date');

// Project 2nd page
let projStartDatePickerHidden = document.getElementById('proj-start-date1');
let projEndDatePickerHidden = document.getElementById('project-end-date1');


// Basic page birthday date
datePicker.addEventListener("input", function () {
    birthDate.innerHTML = datePicker.value;
})

// education page start end date
eduStartDatePicker.addEventListener("input", function () {
    previewEduStartDate.innerHTML = eduStartDatePicker.value;
})

eduEndDatePicker.addEventListener("input", function () {
    previewEduEndDate.innerHTML = eduEndDatePicker.value;
})

// Experience page start end date
companyStartDatePicker.addEventListener("input", function () {
    previewCompanyStartDate.innerHTML = companyStartDatePicker.value;
})

companyEndDatePicker.addEventListener("input", function () {
    previewCompanyEndDate.innerHTML = companyEndDatePicker.value;
})

// Experience 2nd page start end date

companyStartDatePickerHidden.addEventListener("input", function () {
    document.getElementById('preview_company_start-date1').innerHTML = companyStartDatePickerHidden.value;
})

companyEndDatePickerHidden.addEventListener("input", function () {
    document.getElementById('jb_end_date1').innerHTML = companyEndDatePickerHidden.value;
})

// project page start end date
projStartDatePicker.addEventListener("input", function () {
    previewProjStartDate.innerHTML = projStartDatePicker.value;
})

projEndDatePicker.addEventListener("input", function () {
    previewProjEndDate.innerHTML = projEndDatePicker.value;
})

// project 2nd page start end date
projStartDatePickerHidden.addEventListener("input", function () {
    document.getElementById('preview_project_start_date1').innerHTML = projStartDatePickerHidden.value;
})

projEndDatePickerHidden.addEventListener("input", function () {
    document.getElementById('proj-end-date1').innerHTML = projEndDatePickerHidden.value;
})
// End

// education page 2 start end date
hiddenStartDatePicker.addEventListener("input", function () {
    document.getElementById('preview_edu_start_date1').innerHTML = hiddenStartDatePicker.value;
})

hiddenEndDatePicker.addEventListener("input", function () {
    document.getElementById('st_end_date1').innerHTML = hiddenEndDatePicker.value;
})

function currently_tick(tick_opt) {

    let $tick_opt = $(tick_opt);
    let temp = $tick_opt.attr('id');

    if ($('#' + $tick_opt.attr('id')).is(":checked")) {
        if (temp === "Currently_study") {
            document.getElementById('st_end_date').innerHTML = "Present";
            document.getElementById("study_end_date").disabled = true;
            document.getElementById("study_end_date").value = '';
            document.getElementById('currently_study_error1').innerHTML = ''
            data_list[temp] = "present";
        } else if (temp === "currently_working") {
            document.getElementById('jb_end_date').innerHTML = "Present";
            document.getElementById('company_end_date').disabled = true;
            document.getElementById("company_end_date").value = '';
            document.getElementById('currently_working_error1').innerHTML = ''
            data_list[temp] = "present";
        } else if (temp === "currently_working1") {
            document.getElementById('jb_end_date1').innerHTML = "Present";
            document.getElementById('company_end_date1').disabled = true;
            document.getElementById('company_end_date1').value = '';
            document.getElementById('currently_working_error2').innerHTML = ''
            data_list[temp] = "present";
        } else if (temp === "Currently_study1") {
            document.getElementById('st_end_date1').innerHTML = "Present";
            document.getElementById("study_end_date1").disabled = true;
            document.getElementById("study_end_date1").value = '';
            document.getElementById('currently_study_error2').innerHTML = ''
            data_list[temp] = "present";
        } else if (temp === "current-proj1") {
            document.getElementById('proj-end-date1').innerHTML = "Present";
            document.getElementById("project-end-date1").disabled = true;
            document.getElementById("project-end-date1").value = '';
            document.getElementById('current_project_error1').innerHTML = ''
            data_list[temp] = "present";
        } else {
            document.getElementById('proj-end-date').innerHTML = "Present";
            document.getElementById('project-end-date').disabled = true;
            document.getElementById('project-end-date').value = '';
            document.getElementById('current_project_error2').innerHTML = ''
            data_list[temp] = "present";
        }
    } else {
        if (temp === "Currently_study") {
            document.getElementById('st_end_date').innerHTML = "End Date";
            document.getElementById("study_end_date").disabled = false;
            data_list[temp] = "";
        } else if (temp === "currently_working") {
            document.getElementById('jb_end_date').innerHTML = "End Date";
            document.getElementById('company_end_date').disabled = false;
            data_list[temp] = "";
        } else if (temp === "currently_working1") {
            document.getElementById('jb_end_date1').innerHTML = "End Date";
            document.getElementById('company_end_date1').disabled = false;
            data_list[temp] = "";
        } else if (temp === "Currently_study1") {
            document.getElementById('st_end_date1').innerHTML = "End Date";
            document.getElementById("study_end_date1").disabled = false;
            data_list[temp] = "";
        } else if (temp === "current-proj1") {
            document.getElementById('project-end-date1').innerHTML = "End Date";
            document.getElementById("project-end-date1").disabled = false;
            data_list[temp] = "";
        } else {
            document.getElementById('proj-end-date').innerHTML = "End Date";
            document.getElementById('project-end-date').disabled = false;
            data_list[temp] = "";
        }
    }

}

function resume_change_1(button_id) {
    var resume_view_0 = document.getElementById("myResume_0").style.display;
    var resume_view_1 = document.getElementById("myResume_1").style.display;
    if (resume_view_0 === "block") {
        document.getElementById("myResume_0").style.display = "none";
        document.getElementById("myResume_1").style.display = "block";
        document.getElementById("resume_btn_2").disabled = true;
        document.getElementById("resume_btn_1").disabled = false;
        document.getElementById('resume_page_1').classList.remove("myStep-1");
        document.getElementById('resume_page_2').classList.add("myStep-1");
    } else {
        document.getElementById("myResume_0").style.display = "block";
        document.getElementById("myResume_1").style.display = "none";
        document.getElementById("resume_btn_2").disabled = false;
        document.getElementById("resume_btn_1").disabled = true;
        document.getElementById('resume_page_2').classList.remove("myStep-1");
        document.getElementById('resume_page_1').classList.add("myStep-1");
    }
}

function education_change_btn(pagination_id) {
    if (pagination_id === 'educate_btn_2') {
        document.getElementById("education_page").classList.add('hide');
        document.getElementById("education_page_1").classList.add('active');

        document.getElementById("education_page").classList.remove('active');
        document.getElementById("education_page_1").classList.remove('hide');

        document.getElementById("custom-edu-sec-id").classList.remove('hide');

        document.getElementById("curriculam-area1").classList.remove('hide');

        document.getElementById("educate_btn_3").disabled = false;
        document.getElementById("educate_btn_4").disabled = true;

        document.getElementById('educate_page_3').classList.remove("myStep-1");
        document.getElementById('educate_page_4').classList.add("myStep-1");

    } else {
        document.getElementById("education_page").classList.add('active');
        document.getElementById("education_page_1").classList.add('hide');

        document.getElementById("education_page").classList.remove('hide');
        document.getElementById("education_page_1").classList.remove('active');

        document.getElementById("educate_btn_1").disabled = true;
        document.getElementById("educate_btn_2").disabled = false;

        document.getElementById('educate_page_1').classList.add("myStep-1");
        document.getElementById('educate_page_2').classList.remove("myStep-1");
    }
}

function work_change(pagination_id) {
    if (pagination_id === 'work_btn_2') {
        document.getElementById("work_history_1").classList.add('hide');
        document.getElementById("work_history_2").classList.add('active');

        document.getElementById("work_history_1").classList.remove('active');
        document.getElementById("work_history_2").classList.remove('hide');

        document.getElementById("responsibility-area1").classList.remove('hide');
        document.getElementById("work_sec_2").classList.remove('hide');

        document.getElementById('work_page_3').classList.remove("myStep-1");
        document.getElementById('work_page_4').classList.add("myStep-1");

    } else {
        document.getElementById("work_history_1").classList.add('active');
        document.getElementById("work_history_2").classList.add('hide');

        document.getElementById("work_history_1").classList.remove('hide');
        document.getElementById("work_history_2").classList.remove('active');

        document.getElementById('work_page_1').classList.add("myStep-1");
        document.getElementById('work_page_2').classList.remove("myStep-1");
    }
}

var curriculam_area_id = document.getElementById('curriculam-area');
var curriculam_area_id_1 = document.getElementById('curriculam-area1');

var extra_curriculam = []
var extra_curriculam_1 = []


function curriculam_btn_add(id) {
    let data = document.getElementById(id).value;
    let button_id = id.concat("-button-addon2");
    if (data != '') {
        document.getElementById(button_id).disabled = false;
    } else {
        document.getElementById(button_id).disabled = true;
    }
}

function curriculam(curriculam_id) {
    var curriculam_name = document.getElementById(curriculam_id).value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(curriculam_name));
    curriculam_area_id.appendChild(entry);
    extra_curriculam.push(curriculam_name);
    document.getElementById(curriculam_id).value = "";
    let button_id = curriculam_id.concat("-button-addon2");
    document.getElementById(button_id).disabled = true;
}

function curriculam_1(curriculam_id) {
    var curriculam_name = document.getElementById(curriculam_id).value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(curriculam_name));
    curriculam_area_id_1.appendChild(entry);
    extra_curriculam_1.push(curriculam_name);
    document.getElementById(curriculam_id).value = "";
    let button_id = curriculam_id.concat("-button-addon2");
    document.getElementById(button_id).disabled = true;
}

function setExtraCurriculam() {
    data_list["extra_curriculam_1"] = extra_curriculam;
    data_list["extra_curriculam_2"] = extra_curriculam_1;
}

var responsibility_list = []
var responsibility_list_1 = []

var responsibility_area_id = document.getElementById('responsibility-area');

function responsibility(responsibility_id) {
    var responsibility_name = document.getElementById(responsibility_id).value;
    var entry1 = document.createElement('li');
    entry1.appendChild(document.createTextNode(responsibility_name));
    responsibility_area_id.appendChild(entry1);
    responsibility_list.push(responsibility_name);
    document.getElementById(responsibility_id).value = "";
    let button_id = responsibility_id.concat("-button-addon2");
    document.getElementById(button_id).disabled = true;

}

var responsibility_area_id1 = document.getElementById('responsibility-area1');

function responsibility1(responsibility_id) {
    var responsibility_name = document.getElementById(responsibility_id).value;
    var entry1 = document.createElement('li');
    entry1.appendChild(document.createTextNode(responsibility_name));
    responsibility_area_id1.appendChild(entry1);
    responsibility_list_1.push(responsibility_name);
    document.getElementById(responsibility_id).value = "";
    let button_id = responsibility_id.concat("-button-addon2");
    document.getElementById(button_id).disabled = true;
}

function setResponsibility() {
    data_list["responsibility_1"] = responsibility_list;
    data_list["responsibility_2"] = responsibility_list_1;
}

$('#proj-link').keyup(function () {
    var proj_link = document.getElementById("proj-link").value;
    var proj_link_here = document.getElementById("proj-link-here");
    proj_link_here.innerHTML = proj_link;
    proj_link_here.href = proj_link;
});

// Drishty

const bioArea = document.querySelector("#bio");
const bioCount = document.querySelector("#bio-count");

bioArea.addEventListener("input", function () {
    const wordsBio = this.value.trim().split(/\s+/);
    const countBio = wordsBio.length > 100 ? 100 : wordsBio.length;
    if (wordsBio[0] == '') {
        bioCount.textContent = `0/100`;
    } else {
        bioCount.textContent = `${countBio}/100`;
    }
    bioCount.classList.toggle("green", wordsBio.length <= 100);
    bioCount.classList.toggle("red", wordsBio.length > 100);
});


const achieveArea = document.querySelector("#proj-description");
const achieveCount = document.querySelector("#achieve-count");

achieveArea.addEventListener("input", function () {
    const wordsAchieve = this.value.trim().split(/\s+/);
    const countAchieve = wordsAchieve.length > 100 ? 100 : wordsAchieve.length;
    if (wordsAchieve[0] === '') {
        achieveCount.textContent = `0/100`;
    } else {
        achieveCount.textContent = `${countAchieve}/100`;
    }
    achieveCount.classList.toggle("green", wordsAchieve.length <= 100);
    achieveCount.classList.toggle("red", wordsAchieve.length > 100);
});

function delete_sec_page(page1_id, page2_id, pagination_id, custom_section_id, bonus_area=null) {
    document.getElementById(bonus_area).classList.add('hide')
    document.getElementById(pagination_id).classList.add('hide')
    document.getElementById(custom_section_id).classList.add('hide')
    document.getElementById(page1_id).classList.remove('hide')
    document.getElementById(page1_id).classList.add('active')
    document.getElementById(page2_id).classList.remove('active')
    document.getElementById(page2_id).classList.add('hide')
}
