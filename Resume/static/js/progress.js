const progressTexts = document.querySelectorAll(".step p");
const progressChecks = document.querySelectorAll(".check");
const bullets = document.querySelectorAll(".bullet");

let current = 1;

function next_page() {
    bullets[current].classList.add("current_step");
    bullets[current - 1].classList.add("active");
    progressTexts[current - 1].classList.add("active");
    progressChecks[current - 1].classList.add("active");
    current += 1;
    progress_top_view();
}

function next_page_1() {
    bullets[current - 1].classList.remove("current_step");
    bullets[current - 2].classList.remove("active");
    progressTexts[current - 2].classList.remove("active");
    progressChecks[current - 2].classList.remove("active");
    current -= 1;
    progress_top_view_reverse();
}

function extra() {
    document.getElementById('education_page').classList.add('hide');
}

function exp_page() {
    document.getElementById('work_history_1').classList.add('hide');
}

function project_page() {
    document.getElementById('project_page_1').classList.add('hide');
}

function extra_3(id) {
    document.getElementById(id).classList.add('hide');
}

function extra_1() {
    document.getElementById('education_page').classList.remove('hide');
    document.getElementById('education_page').classList.add('active');
}

function exp_page_1() {
    document.getElementById('work_history_1').classList.add('active');
    document.getElementById('work_history_1').classList.remove('hide');
}

function project_page_1() {
    document.getElementById('project_page_1').classList.add('active');
    document.getElementById('project_page_1').classList.remove('hide');
}

function page_hide_prev(id) {
    document.getElementById(id).classList.add('hide');
    document.getElementById(id).classList.remove('active');
}

function page_show_next(id) {
    document.getElementById(id).classList.remove('hide');
    document.getElementById(id).classList.add('active');
}

function prevAnimation(id) {
    document.getElementById(id).classList.remove("card-animation-next");
    document.getElementById(id).classList.add("card-animation-previous");
}

function nextAnimation(id) {
    document.getElementById(id).classList.add("card-animation-next");
    document.getElementById(id).classList.remove("card-animation-previous");
}

let i = 1;
const md_step = document.querySelectorAll(".mStep");

function progress_top_view() {
    md_step[i].classList.remove('active-1');
    md_step[i].classList.add('active-1');

    md_step[i - 1].classList.remove('active-1');
    md_step[i - 1].classList.add('prev');
    i += 1;
}

function progress_top_view_reverse() {
    md_step[i - 1].classList.remove('active-1');
    md_step[i - 2].classList.remove('prev');
    md_step[i - 2].classList.add('active-1');
    i -= 1;
}
