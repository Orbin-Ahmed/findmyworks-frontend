var tempVariable = 1
const user_data = {
    "basic_info": "",
    "educations": "",
    "experiences": "",
    "skills": "",
    "projects": "",
    "extra_sections": "",
    "finalize": ""
}

const basic_info = {}
const educations = []
const experiences = []
const projects = []
const finalize = {}
const skills = []


const project_links = []
const project_links_1 = []
const other_skills = {}

function Cookies_writter() {
    user_data["skills"] = data_list["Skill"];
    user_data["extra_sections"] = data_list["Custom_section"];
    other_skills["other_skills"] = custom_section_data;
    basic_info_finder();
    education_info_finder();
    experiences_info_finder();
    projects_info_finder();
    //finalize_info();
    user_data["educations"] = educations;
    user_data["experiences"] = experiences;
    user_data["projects"] = projects;
}

function setListCookies() {
    // Cookies.set('resume_data', JSON.stringify(user_data), { expires: 7, path: '/' });
    Cookies.set('basic_info', JSON.stringify(basic_info), { expires: 7, path: '/', sameSite: 'none',secure: true })
    Cookies.set('education_info', JSON.stringify(educations), { expires: 7, path: '/', sameSite: 'none',secure: true })
    Cookies.set('company_info', JSON.stringify(experiences), { expires: 7, path: '/', sameSite: 'none',secure: true })
    Cookies.set('project_info', JSON.stringify(projects), { expires: 7, path: '/', sameSite: 'none',secure: true })
    Cookies.set('skills', JSON.stringify(data_list["Skill"]), { expires: 7, path: '/', sameSite: 'none',secure: true })
    Cookies.set('extra_sections', JSON.stringify(other_skills), { expires: 7, path: '/', sameSite: 'none',secure: true })
    finalize_section_function();
    Cookies.set('finalize', JSON.stringify(finalize_section), { expires: 7, path: '/', sameSite: 'none',secure: true })
}

function basic_info_finder() {
    var full_name = data_list["name"];
    var i = full_name.indexOf(' ');
    var first_name = full_name.slice(0, i).trim();
    var last_name = full_name.slice(i + 1, full_name.length).trim();


    basic_info["first_name"] = first_name;
    basic_info["last_name"] = last_name;
    basic_info["profession"] = data_list["profession"];
    basic_info["phone_number"] = data_list["phone"];
    basic_info["date_of_birth"] = data_list["date_of_birth"];
    basic_info["address"] = data_list["address"];
    basic_info["bio"] = data_list["bio"];
    basic_info["email"] = data_list["email"];

    // my style
    // basic_info["name"] = data_list["name"];
    // basic_info["profession"] = data_list["profession"];
    // basic_info["date_of_birth"] = data_list["date_of_birth"];
    // basic_info["phone"] = data_list["phone"];
    // basic_info["email"] = data_list["email"];
    // basic_info["address"] = data_list["address"];
    // basic_info["bio"] = data_list["bio"];
    // user_data["basic_info"] = basic_info;
}

function education_info_finder() {
    // Education Information
    if (typeof data_list["inst_name"] != "undefined") {
        var institute = {}

        institute["concentration"] = data_list["degree_1"];
        institute["major"] = data_list["major"];
        institute["result"] = data_list["result"];
        institute["start_date"] = data_list["study_start_date"];
        institute["end_date"] = data_list["study_end_date"];
        institute["address"] = data_list["Institute_Address"];
        institute["institute"] = data_list["inst_name"];
        institute["currently_studying"] = false;
        institute["extra_activities"] = data_list["extra_curriculam_1"];

        if (data_list["Currently_study"] === "present" || data_list["study_end_date"] === '' ) {
            institute["end_date"] = null;
            institute["currently_studying"] = true;
        }
    }
    if (typeof data_list["inst_name1"] != "undefined") {
        var institute_1 = {}
        institute_1["concentration"] = data_list["degree_2"];
        institute_1["major"] = data_list["major1"];
        institute_1["result"] = data_list["result1"];
        institute_1["start_date"] = data_list["study_start_date1"];
        institute_1["end_date"] = data_list["study_end_date1"];
        institute_1["address"] = data_list["Institute_Address1"];
        institute_1["institute"] = data_list["inst_name1"];
        institute_1["currently_studying"] = false;
        institute_1["extra_activities"] = data_list["extra_curriculam_2"];

        if (data_list["Currently_study1"] === "present" || data_list["study_end_date1"] === '') {
            institute_1["end_date"] = null;
            institute_1["currently_studying"] = true;
        }
    }
    educations[0] = institute;
    if (typeof institute_1 != "undefined"){
        educations[1] = institute_1;
    }
}

function experiences_info_finder() {
    // Experiences Information
    if (data_list["company"] !== "") {
        var company = {}

        var city_country = data_list["city_country"];
        var i = city_country.indexOf(' ');
        var city = city_country.slice(0, i).trim();
        var country = city_country.slice(i + 1, city_country.length).trim();


        company["designation"] = data_list["designation"];
        company["name"] = data_list["company"];
        company["start_date"] = data_list["company_start_date"];
        company["end_date"] = data_list["company_end_date"];
        company["city"] = city
        company["country"] = country
        company["currently_working"] = false;
        company["responsibility"] = data_list["responsibility_1"];

        if (data_list["currently_working"] === "present" || data_list["company_end_date"] === '') {
            company["end_date"] = null;
            company["currently_working"] = true;
        }
    }
    if (data_list["company1"] !== "") {
        var company_1 = {}

        var city_country1 = data_list["city_country1"];
        var j = city_country1.indexOf(' ');
        var city1 = city_country1.slice(0, j).trim();
        var country1 = city_country1.slice(j + 1, city_country1.length).trim();


        company_1["designation"] = data_list["designation1"];
        company_1["name"] = data_list["company1"];
        company_1["start_date"] = data_list["company_start_date1"];
        company_1["end_date"] = data_list["company_end_date1"];
        company_1["city"] = city1
        company_1["country"] = country1
        company_1["currently_working"] = false;
        company_1["responsibility"] = data_list["responsibility_2"];

        if (data_list["currently_working1"] === "present" || data_list["company_end_date1"] === '') {
            company_1["end_date"] = null;
            company_1["currently_working"] = true;
        }

    }
    experiences[0] = company;

    if (data_list["company1"] !== ""){
        experiences[1] = company_1;
    }
}

function projects_info_finder() {
    // Experiences Information
    if (data_list["proj-title"] !== "") {
        var project = {}
        project_links[0] = data_list["proj-link"];

        project["title"] = data_list["proj-title"];
        project["start_date"] = data_list["proj-start-date"];
        project["end_date"] = data_list["project-end-date"];
        project["description"] = data_list["proj-description"];
        project["links"] = project_links;
        project["currently_working"] = false;

        if (data_list["current-proj"] === "present" || data_list["project-end-date"] === '') {
            project["end_date"] = null;
            project["currently_working"] = true;
        }
    }
    if (data_list["proj-title1"] !== "") {
        var project_1 = {}
        project_links_1[0] = data_list["proj-link1"];

        project_1["title"] = data_list["proj-title1"];
        project_1["start_date"] = data_list["proj-start-date1"];
        project_1["end_date"] = data_list["project-end-date1"];
        project_1["description"] = data_list["proj-description1"];
        project_1["links"] = project_links_1;
        project_1["currently_working"] = false;

        if (data_list["current-proj1"] === "present" || data_list["project-end-date1"] === '') {
            project_1["end_date"] = null;
            project_1["currently_working"] = true;
        }
    }
    projects[0] = project;
    if (data_list["proj-title1"] !== ""){
        projects[1] = project_1;
    }
}

function finalize_info() {
    finalize["user_image"] = data_list["user_image_location"]
    finalize["facebook_link"] = data_list["fbLink"]
    finalize["twitter_link"] = data_list["twLink"]
    finalize["linkdin_link"] = data_list["ldLink"]

    user_data["finalize"] = finalize;
}

function getListCookies(cookies_name) {
    var temp = Cookies.get(cookies_name);
    var data = JSON.parse(temp);
    console.log(data);
}
