// Basic page

const name = document.getElementById('name');
const profession = document.getElementById('profession');
const dateOfBirth = document.getElementById('date_of_birth');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const adress = document.getElementById('address');
const bio = document.getElementById('bio');

//education page

const levelOfStudy = document.getElementById('levelofstudy');
const major = document.getElementById('major');
const result = document.getElementById('result');
const startDate = document.getElementById('study_start_date');
const endDate = document.getElementById('study_end_date');
const institution = document.getElementById('Institute_name');
const instituteAddress = document.getElementById('Institute_Address');

// education page 2
const levelOfStudy_1 = document.getElementById('levelofstudy1');
const major_1 = document.getElementById('major1');
const result_1 = document.getElementById('result1');
const startDate_1 = document.getElementById('study_start_date1');
const endDate_1 = document.getElementById('study_end_date1');
const instituteAddress_1 = document.getElementById('Institute_Address1');

// experience page

const designation = document.getElementById('designation');
const company = document.getElementById('company');
const city_country = document.getElementById('city_country');
const company_start_date = document.getElementById('company_start_date');
const company_end_date = document.getElementById('company_end_date');

// experience page 2
const designation_1 = document.getElementById('designation1');
const company_1 = document.getElementById('company1');
const city_country_1 = document.getElementById('city_country1');
const company_start_date_1 = document.getElementById('company_start_date1');
const company_end_date_1 = document.getElementById('company_end_date1');

// skills page

const allSkills = document.getElementById('all-skills');

// Achievements page

const projectTitle = document.getElementById('proj-title');
const projectDescription = document.getElementById('proj-description');
const project_start_date = document.getElementById('proj-start-date');
const project_end_date = document.getElementById('project-end-date');

// Achievements page
const projectTitle_1 = document.getElementById('proj-title1');
const projectDescription_1 = document.getElementById('proj-description1');
const project_start_date_1 = document.getElementById('proj-start-date1');
const project_end_date_1 = document.getElementById('project-end-date1');

// finalize page

const profileImage = document.getElementById('file');


// Email validation function

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// word and character count validation functions

function isValidWordCount(minLength) {
    var text = name.value;
    var wordCount = text.split(" ");


    if (wordCount.length < 2 || wordCount.length > 5) {
        return false;
    }

    for (var i = 0; i < wordCount.length; i++) {

        if (wordCount[i].length < minLength) {
            return false;
        }
    }
    return true;
}

// just word counter validation function

function isValidWordCount2() {
    var text = bio.value;
    var wordCount = text.split(" ");

    if (wordCount.length > 100 || wordCount.length < 10) {
        return false;
    }

    return true;
}


function isValidWordCountAll(varName, minLength, maxLength) {
    let text = varName.value;
    let wordCount = text.split(" ");

    if (wordCount.length > maxLength || wordCount.length < minLength) {
        return false;
    }
    return true;
}

// Number blocking function

name.addEventListener("input", function () {
    this.value = this.value.replace(/[0-9!@#%&*()_+=,<>/?;:'"^${}~`|-]/, "");
});

// Alphabet blocking function

phone.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.]/g, "");
    if (this.value.startsWith("0")) {
        this.value = this.value.slice(1);
    }
})

try {
    result.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9.]/g, "");
    })
} catch (err) {
}

// error massage function

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// success massage function

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//basic validation function

const validateInputs = (qualifiedName, value) => {
    const nameValue = name.value.trim();
    const professionValue = profession.value.trim();
    const dateValue = dateOfBirth.value.trim();
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    let date2 = new Date(dateValue);
    dd = String(date2.getDate()).padStart(2, '0');
    mm = String(date2.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = date2.getFullYear();
    date2 = yyyy + '-' + mm + '-' + dd;
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const adressValue = adress.value.trim();
    const bioValue = bio.value.trim();
    let button = document.querySelector("#basic_next");

    // name validation condition

    if (nameValue === '') {
        setError(name, 'Name field cant be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }


    } else if (!isValidWordCount(3)) {
        setError(name, ' Name Should be at-least 2 - 5 words and 3 characters');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }

    } else {
        setSuccess(name);
    }

    // Profession validation condition

    if (professionValue === '') {
        setError(profession, 'Profession field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }

    } else if (professionValue.length < 4) {
        setError(profession, 'Should contain at-least 4 characters');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }

    } else {
        setSuccess(profession);
    }

    // date validation condition

    let todays_date = new Date(today).getTime();
    let birth_date = new Date(date2).getTime();
    if (dateValue === '') {
        setError(dateOfBirth, 'Please choose a date');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }

    } else if (todays_date >= birth_date) {
        setError(dateOfBirth, 'Please choose a valid date');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(dateOfBirth);
    }


// phone validation condition

    if (phoneValue === '') {
        setError(phone, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }

    } else if (phoneValue.length !== 10) {
        setError(phone, 'Should contain 10 number');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }

    } else if (!/^[0-9]+$/.test(phoneValue)) {
        setError(phone, 'Should contain only numbers ');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }

    } else {
        setSuccess(phone);
    }

    // email validation condition

    if (emailValue === '') {
        setError(email, 'Please enter an email');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }

    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Invalid e-mail');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }

    } else {
        setSuccess(email);
    }

    // Address validation condition

    if (adressValue === '') {
        setError(adress, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(adress);
    }

    // Bio validation condition

    if (bioValue === '') {
        setError(bio, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else if (!isValidWordCount2(0)) {
        setError(bio, 'Bio should be between 10 to 100 words');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(bio);
        button.setAttribute("data-next", value);
        next_page();
        page_show_next('education_page');
        nextAnimation('education_page');
        setMyCookies();
        Cookies_writter();
        return true;
    }
} // validationInput end tag


// Education validation function

const validateInputs2 = (qualifiedName, value) => {
    const levelOfStudyValue = levelOfStudy.value.trim();
    const majorValue = major.value.trim();
    const resultValue = result.value.trim();
    const startDateValue = startDate.value.trim();
    const instituteAddressValue = instituteAddress.value.trim();
    let button = document.querySelector("#education_next");

    // level of study validation condition

    if (levelOfStudyValue === '') {
        setError(levelOfStudy, 'You must choose an option');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(levelOfStudy);
    }

    // major validation condition

    if (majorValue === '') {
        setError(major, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(major);
    }

    // result validation condition


    if (resultValue === '') {
        setError(result, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else if (!/^\d+\.\d{2}$/.test(resultValue) || parseFloat(resultValue) > 5.0) {

        setError(result, "Please enter a valid CGPA");
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(result);
    }

    // Education Date validation condition

    if (startDateValue === '') {
        setError(startDate, 'Please choose a start date');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(startDate);
    }
    if (endDate !== '') {
        let date1 = new Date(startDate.value).getTime();
        let date2 = new Date(endDate.value).getTime();
        if (date1 > date2) {
            setError(endDate, 'End date can not be smaller than start date');
            try {
                button.removeAttribute("data-next");
                return false;
            } catch (err) {
            }
        } else {
            setSuccess(endDate);
        }
    }

    // Institution Address validation condition

    if (instituteAddressValue === '') {
        setError(instituteAddress, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(instituteAddress);
        button.setAttribute("data-next", value);
        next_page();
        extra();
        page_show_next('work_history_1');
        nextAnimation('work_history_1');
        setMyCookies();
        setExtraCurriculam();
        Cookies_writter();
        return true;
    }

} // validationInput end tag


// Experience validation Function

const validateInputs3 = (qualifiedName, value) => {

    const designationValue = designation.value.trim();
    const companyValue = company.value.trim();
    const companyStartDateValue = company_start_date.value.trim();
    const companyEndDateValue = company_end_date.value.trim();
    const cityCountryValue = city_country.value.trim();
    let button = document.querySelector("#experience_next");


// Designation validation condition

    if (designationValue === '') {
        setError(designation, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else if (designationValue.length < 4) {
        setError(designation, 'Should contain at-least 3 characters')
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else if (/^[0-9]+$/.test(designationValue)) {
        setError(designation, 'Should not contain numbers');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(designation);
    }

// Company validation condition

    if (companyValue === '') {
        setError(company, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(company);
    }

    // Date validation

    if (companyStartDateValue === '') {
        setError(company_start_date, 'Please choose a start date');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(company_start_date);
    }
    if (companyEndDateValue !== '') {
        let date1 = new Date(company_start_date.value).getTime();
        let date2 = new Date(company_end_date.value).getTime();
        if (date1 > date2) {
            setError(company_end_date, 'End date can not be smaller than start date');
            try {
                button.removeAttribute("data-next");
                return false;
            } catch (err) {
            }
        } else {
            setSuccess(company_end_date);
        }
    }

    // city country validation condition

    if (cityCountryValue === '') {
        setError(city_country, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(city_country);
        button.setAttribute("data-next", value);
        next_page();
        exp_page();
        page_show_next('skill_add_page');
        nextAnimation('skill_add_page');
        setMyCookies();
        setResponsibility();
        Cookies_writter();
        return true
    }
}


// skill validation condition

const validateInputs4 = (qualifiedName, value) => {
    let button = document.querySelector("#skills_next");

    if (skill.length < 3) {
        setError(allSkills, 'Add at-least 3 skills');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(allSkills);
        button.setAttribute("data-next", value);
        next_page();
        extra_3('skill_add_page');
        page_show_next('project_page_1');
        nextAnimation('project_page_1');
        setMyCookies();
        final_skill_data();
        Cookies_writter();
        return true;
    }

} // validationInput end tag

const validateInputs5 = (qualifiedName, value) => {

    const projectTitleValue = projectTitle.value.trim();
    const projectDescriptionValue = projectDescription.value.trim();
    const projectStart = project_start_date.value.trim();
    const projectEnd = project_end_date.value.trim();
    let button = document.querySelector("#project_next");


// Project title validation condition

    if (projectTitleValue === '') {
        setError(projectTitle, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(projectTitle);
    }

    // Date validation

    if (projectStart === '') {
        setError(project_start_date, 'Please choose a start date');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(project_start_date);
    }
    if (projectEnd !== '') {
        let date1 = new Date(project_start_date.value).getTime();
        let date2 = new Date(project_end_date.value).getTime();
        if (date1 > date2) {
            setError(project_end_date, 'End date can not be smaller than start date');
            try {
                button.removeAttribute("data-next");
                return false;
            } catch (err) {
            }
        } else {
            setSuccess(project_end_date);
        }
    }

    // company description validation condition

    if (projectDescriptionValue === '') {
        setError(projectDescription, 'This field cannot be empty');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else if (!isValidWordCountAll(projectDescription, 29, 100)) {
        setError(projectDescription, 'Description should be between 30 to 100 words');
        try {
            button.removeAttribute("data-next");
            return false;
        } catch (err) {
        }
    } else {
        setSuccess(projectDescription);
        button.setAttribute("data-next", value);
        next_page();
        project_page();
        page_show_next('other_add_page');
        nextAnimation('other_add_page');
        setMyCookies();
        Cookies_writter();
        return true;
    }

}

// Education validation function

function education_validation(id) {
    const levelOfStudyValue = levelOfStudy_1.value.trim();
    const majorValue = major_1.value.trim();
    const resultValue = result_1.value.trim();
    const startDateValue = startDate_1.value.trim();
    const endDateValue = endDate_1.value.trim();
    const instituteAddressValue = instituteAddress_1.value.trim();

    // level of study validation condition
    if (levelOfStudyValue === '') {
        setError(levelOfStudy_1, 'You must choose an option');
        return false;
    } else {
        setSuccess(levelOfStudy_1);
    }

    // major validation condition
    if (majorValue === '') {
        setError(major_1, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(major_1);
    }

    // result validation condition
    if (resultValue === '') {
        setError(result_1, 'This field cannot be empty');
        return false;
    } else if (!/^\d+\.\d{2}$/.test(resultValue) || parseFloat(resultValue) > 5.0) {
        setError(result_1, "Please enter a valid CGPA");
        return false;
    } else {
        setSuccess(result_1);
    }

    // Education Date validation condition
    if (startDateValue === '') {
        setError(startDate_1, 'Please choose a start date');
        return false;
    } else {
        setSuccess(startDate_1);
    }


    if (endDateValue !== '') {
        let date1 = new Date(startDate_1.value).getTime();
        let date2 = new Date(endDate_1.value).getTime();
        if (date1 > date2) {
            setError(endDate_1, 'End date can not be smaller than start date');
            return false;
        } else {
            setSuccess(endDate_1);
        }
    }


    // Institution Address validation condition
    if (instituteAddressValue === '') {
        setError(instituteAddress_1, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(instituteAddress_1);
        education_change_btn(id);
        return true;
    }
}

// experience page 2
function experience_validation(id) {

    const designationValue = designation_1.value.trim();
    const companyValue = company_1.value.trim();
    const companyStartDateValue = company_start_date_1.value.trim();
    const companyEndDateValue = company_end_date_1.value.trim();
    const cityCountryValue = city_country_1.value.trim();

// Designation validation condition

    if (designationValue === '') {
        setError(designation_1, 'This field cannot be empty');
        return false;
    } else if (designationValue.length < 4) {
        setError(designation_1, 'Should contain at-least 3 characters')
        return false;
    } else if (/^[0-9]+$/.test(designationValue)) {
        setError(designation_1, 'Should not contain numbers');
        return false;
    } else {
        setSuccess(designation_1);
    }

// Company validation condition
    if (companyValue === '') {
        setError(company_1, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(company_1);
    }

    // Date validation
    if (companyStartDateValue === '') {
        setError(company_start_date_1, 'Please choose a start date');
        return false;
    } else {
        setSuccess(company_start_date_1);
    }
    if (companyEndDateValue !== '') {
        let date1 = new Date(company_start_date_1.value).getTime();
        let date2 = new Date(company_end_date_1.value).getTime();
        if (date1 > date2) {
            setError(company_end_date_1, 'End date can not be smaller than start date');
            return false;
        } else {
            setSuccess(company_end_date_1);
        }
    }

    // city country validation condition
    if (cityCountryValue === '') {
        setError(city_country_1, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(city_country_1);
        work_change(id);
        return true
    }
}

// achievements validation

function achievements_validation(id) {

    const projectTitleValue = projectTitle_1.value.trim();
    const projectDescriptionValue = projectDescription_1.value.trim();
    const projectStart = project_start_date_1.value.trim();
    const projectEnd = project_end_date_1.value.trim();

// Project title validation condition
    if (projectTitleValue === '') {
        setError(projectTitle_1, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(projectTitle_1);
    }
    // Date validation

    if (projectStart === '') {
        setError(project_start_date_1, 'Please choose a start date');
        return false;
    } else {
        setSuccess(project_start_date_1);
    }
    if (projectEnd !== '') {
        let date1 = new Date(project_start_date_1.value).getTime();
        let date2 = new Date(project_end_date_1.value).getTime();
        if (date1 > date2) {
            setError(project_end_date_1, 'End date can not be smaller than start date');
            return false;
        } else {
            setSuccess(project_end_date_1);
        }
    }

    // project description validation condition
    if (projectDescriptionValue === '') {
        setError(projectDescription_1, 'This field cannot be empty');
        return false;
    } else if (!isValidWordCountAll(projectDescription_1, 29, 100)) {
        setError(projectDescription_1, 'Description should be between 30 to 100 words');
        return false;
    } else {
        setSuccess(projectDescription_1);
        proj_change(id);
        return true;
    }

}// validationInput end tag

// finalize Validation
function ValiDateProfileImageInput(qualifiedName, value) {
    let button = document.querySelector("#finish_button");

    const profileImageValue = profileImage.files[0];

    if (!profileImageValue) {
        setError(profileImage, 'Choose an image');
        return false;
    } else if (profileImageValue.size > 10000000) {
        setError(profileImage, 'Max File size : 10MB');
        return false;
    } else {
        button.setAttribute("data-next", value);
        resume_print_area();
        setMyCookies();
        Cookies_writter();
        setListCookies();
        return true;
    }
}
