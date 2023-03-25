// basic value
const name = document.getElementById('name');
const profession = document.getElementById('profession');
const dateOfBirth = document.getElementById('date_of_birth');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const address = document.getElementById('address');

// education modal value
const education_institute_name = document.getElementById('new-institute_name');
const education_concentration = document.getElementById('new-concentration');
const education_major = document.getElementById('new-education_board');
const education_result = document.getElementById('new-result');
const education_address = document.getElementById('new-Address');
const education_start_date = document.getElementById('study_start_date');
const education_end_date = document.getElementById('study_end_date');

// work value
const work_company_name = document.getElementById('new-company_name');
const work_company_designation = document.getElementById('new-designation');
const work_company_start_date = document.getElementById('new-start_date');
const work_company_end_date = document.getElementById('new-end_date');
const work_company_city = document.getElementById('new-city');
const work_company_country = document.getElementById('new-country');

// Achievements value
const achievements_title = document.getElementById('title');
const achievements_link = document.getElementById('link');
const achievements_start_date = document.getElementById('start_date');
const achievements_end_date = document.getElementById('end_date');
const achievements_description = document.getElementById('description');

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Word count validation function
function isValidWordCountAll_description(varName, minLength, maxLength) {
    let text = varName.value;
    let wordCount = text.split(" ");
    return !(wordCount.length > maxLength || wordCount.length < minLength);
}

function isValidWordCountAll_bio(varName, minLength, maxLength) {
    let text = varName.value;
    let wordCount = text.trim();
    return !(wordCount.length > maxLength || wordCount.length < minLength);
}



function isValidWordCountAll(minLength, minWordLimit, maxWordLimit) {
    var text = name.value;
    var wordCount = text.split(" ");

    if (wordCount.length < minWordLimit || wordCount.length > maxWordLimit) {
        return false;
    }

    for (var i = 0; i < wordCount.length; i++) {

        if (wordCount[i].length < minLength) {
            return false;
        }
    }
    return true;
}


// number block in profile name

name.addEventListener("input", function (event) {
    this.value = this.value.replace(/[0-9!@#%&*()_+=,<>/?;:'"^${}~`|-]/, "");
});
// number block in profile name end



// Alphabet blocking function

phone.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.]/g, "");
    if (this.value.startsWith("0")) {
        this.value = this.value.slice(1);
    }
})

// Alphabet blocking function
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


// modal validation start

// basic validation
const basic_validation = (qualifiedName, value) => {
    const nameValue = name.value.trim();
    const professionValue = profession.value.trim();
    const dateValue = dateOfBirth.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();

    // name validation condition

    if (nameValue === '') {
        setError(name, 'Name field cant be empty');
        return false;


    } else if (!isValidWordCountAll(3, 2, 5)) {
        setError(name, ' Name Should be at-least 2 - 5 words and 3 characters');
        return false;

    } else {
        setSuccess(name);
    }

    // Profession validation condition

    if (professionValue === '') {
        setError(profession, 'Profession field cannot be empty');

    } else if (professionValue.length < 4) {
        setError(profession, 'Should contain at-least 4 characters');
        return false;

    } else {
        setSuccess(profession);
    }

    // date validation condition

    if (dateValue === '') {
        setError(dateOfBirth, 'Please choose a date');
        return false;

    } else {
        setSuccess(dateOfBirth);
    }

// phone validation condition

    if (phoneValue === '') {
        setError(phone, 'This field cannot be empty');
        return false;

    } else if (phoneValue.length !== 10) {
        setError(phone, 'Should contain 10 number');
        return false;

    } else if (!/^[0-9]+$/.test(phoneValue)) {
        setError(phone, 'Should contain only numbers ');
        return false;

    } else {
        setSuccess(phone);
    }

    // email validation condition

    if (emailValue === '') {
        setError(email, 'Please enter an email');
        return false;

    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Invalid e-mail');
        return false;

    } else {
        setSuccess(email);
    }

    // Address validation condition

    if (addressValue === '') {
        setError(address, 'This field cannot be empty');
        return false
    } else {
        setSuccess(address);
        return true;
    }
}

// education validation
function education_validation(key) {
    const institute_name = education_institute_name.value.trim();
    const levelOfStudyValue = education_concentration.value.trim();
    const majorValue = education_major.value.trim();
    const resultValue = education_result.value.trim();
    const startDateValue = education_start_date.value.trim();
    const endDateValue = education_end_date.value.trim();
    const instituteAddressValue = education_address.value.trim();

    if (institute_name === '') {
        setError(education_institute_name, 'You must choose an option');
        return false;
    } else {
        setSuccess(education_institute_name);
    }
    // level of study validation condition
    if (levelOfStudyValue === '') {
        setError(education_concentration, 'You must choose an option');
        return false;
    } else {
        setSuccess(education_concentration);
    }

    // major validation condition
    if (majorValue === '') {
        setError(education_major, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(education_major);
    }

    // result validation condition
    if (resultValue === '') {
        setError(education_result, 'This field cannot be empty');
        return false;
    } else if (!/^\d+\.\d{2}$/.test(resultValue) || parseFloat(resultValue) > 5.0) {
        setError(education_result, "Please enter a valid CGPA");
        return false;
    } else {
        setSuccess(education_result);
    }

    // Education Date validation condition
    if (startDateValue === '') {
        setError(education_start_date, 'Please choose a start date');
        return false;
    } else {
        setSuccess(education_start_date);
    }

    if (endDateValue !== '') {
        let date1 = new Date(startDateValue).getTime();
        let date2 = new Date(endDateValue).getTime();
        if (date1 > date2) {
            setError(education_end_date, 'End date can not be smaller than start date');
            return false;
        } else {
            setSuccess(education_end_date);
        }
    }

    // Institution Address validation condition
    if (instituteAddressValue === '') {
        setError(education_address, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(education_address);
        addEductation(key)
        return true;
    }

}

// skill validation
function skill_validation(key) {
    const skill_value = document.getElementById('new-skill');
    const skillValue = skill_value.value.trim();
    if (skillValue === '') {
        setError(skill_value, 'Skill name field cant be empty');
        return false;

    } else {
        setSuccess(skill_value);
        addSkill(key);
        return true;
    }
}

// work validation
function work_validation() {
    const company_name = work_company_name.value.trim();
    const company_designation = work_company_designation.value.trim();
    const company_start_date = work_company_start_date.value.trim();
    const company_end_date = work_company_end_date.value.trim();
    const company_city = work_company_city.value.trim();
    const company_country = work_company_country.value.trim();

    // company_name
    if (company_name === '') {
        setError(work_company_name, 'This field can not be empty');
        return false;
    } else {
        setSuccess(work_company_name);
    }

    // company_designation
    if (company_designation === '') {
        setError(work_company_designation, 'This field can not be empty');
        return false;

    } else {
        setSuccess(work_company_designation);
    }

    // company_start_date
    if (company_start_date === '') {
        setError(work_company_start_date, 'Start date can not be empty');
        return false;
    } else {
        setSuccess(work_company_start_date);
    }
    // company_start_date
    if (company_end_date !== '') {
        let date1 = new Date(company_start_date).getTime();
        let date2 = new Date(company_end_date).getTime();
        if (date1 > date2) {
            setError(work_company_end_date, 'End date can not be smaller than start date');
            return false;
        } else {
            setSuccess(work_company_end_date);
        }
    }
    // company city
    if (company_city === '') {
        setError(work_company_city, 'This field can not be empty');
        return false;
    } else {
        setSuccess(work_company_city);
    }

    // company country
    if (company_country === '') {
        setError(work_company_country, 'This field can not be empty');
        return false;
    } else {
        setSuccess(work_company_country);
    }
}

// Achievements validation
function achievements_validation() {
    const title = achievements_title.value.trim();
    const link = achievements_link.value.trim();
    const start_date = achievements_start_date.value.trim();
    const end_date = achievements_end_date.value.trim();
    const description = achievements_description.value.trim();

    // achievements_name
    if (title === '') {
        setError(achievements_title, 'This field can not be empty');
        return false;
    } else {
        setSuccess(achievements_title);
    }

    // // achievements_designation
    //
    // if (link === '') {
    //     setError(achievements_link, 'This field can not be empty');
    //     return false;
    //
    // } else {
    //     setSuccess(achievements_link);
    // }

    // achievements_start_date
    if (start_date === '') {
        setError(achievements_start_date, 'Start date can not be empty');
        return false;
    } else {
        setSuccess(achievements_start_date);
    }
    // achievements_end_date
    if (end_date !== '') {
        let date1 = new Date(start_date).getTime();
        let date2 = new Date(end_date).getTime();
        if (date1 > date2) {
            setError(achievements_end_date, 'End date can not be smaller than start date');
            return false;
        } else {
            setSuccess(achievements_end_date);
        }
    }
    // achievements description
    if (description === '') {
        setError(achievements_description, 'This field can not be empty');
        return false;
    } else {
        setSuccess(achievements_description);
        return true;
    }
}

// modal validation end
// profile validation start
// education validation
function education_profile_validation(key, id) {

    const levelOfStudy = document.getElementById('concentration' + id);
    const major = document.getElementById('education_board' + id);
    const result = document.getElementById('result' + id);
    const instituteAddress = document.getElementById('Address' + id);

    const levelOfStudyValue = levelOfStudy.value.trim();
    const majorValue = major.value.trim();
    const resultValue = result.value.trim();
    const instituteAddressValue = instituteAddress.value.trim();
    //
    // level of study validation condition
    if (levelOfStudyValue === '') {
        setError(levelOfStudy, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(levelOfStudy);
    }

    // major validation condition
    if (majorValue === '') {
        setError(major, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(major);
    }

    // result validation condition
    if (resultValue === '') {
        setError(result, 'This field cannot be empty');
        return false;
    } else if (!/^\d+\.\d{2}$/.test(resultValue) || parseFloat(resultValue) > 5.0) {
        setError(result, "Please enter a valid CGPA");
        return false;
    } else {
        setSuccess(result);
    }

    // Institution Address validation condition
    if (instituteAddressValue === '') {
        setError(instituteAddress, 'This field cannot be empty');
        return false;
    } else {
        setSuccess(instituteAddress);
        editEductation(key, id)
        return true;
    }
}

// work validation
function work_profile_validation(key, id) {
    const company_name = document.getElementById('company_name' + id);
    const company_designation = document.getElementById('designation' + id);
    const company_start_date = document.getElementById('start_date' + id);
    const company_end_date = document.getElementById('end_date' + id);
    const company_city = document.getElementById('city' + id);
    const company_country = document.getElementById('country' + id);

    const company_name_value = company_name.value.trim();
    const company_designation_value = company_designation.value.trim();
    const company_start_date_value = company_start_date.value.trim();
    const company_end_date_value = company_end_date.value.trim();
    const company_city_value = company_city.value.trim();
    const company_country_value = company_country.value.trim();

    // company_name
    if (company_name_value === '') {
        setError(company_name, 'This field can not be empty');
        return false;
    } else {
        setSuccess(company_name);
    }

    // company_designation
    if (company_designation_value === '') {
        setError(company_designation, 'This field can not be empty');
        return false;

    } else {
        setSuccess(company_designation);
    }

    // company_start_date
    if (company_start_date_value === '') {
        setError(company_start_date, 'Start date can not be empty');
        return false;
    } else {
        setSuccess(company_start_date);
    }

    // company_start_date
    if (company_end_date_value !== '') {
        let date1 = new Date(company_start_date_value).getTime();
        let date2 = new Date(company_end_date_value).getTime();
        if (date1 > date2) {
            setError(company_end_date, 'End date can not be smaller than start date');
            return false;
        } else {
            setSuccess(company_end_date);
        }
    }
    // company city
    if (company_city_value === '') {
        setError(company_city, 'This field can not be empty');
        return false;
    } else {
        setSuccess(company_city);
    }

    // company country
    if (company_country_value === '') {
        setError(company_country, 'This field can not be empty');
        return false;
    } else {
        setSuccess(company_country);
        update_workinfo(key, id)
        return true;
    }
}

// Achievements validation
function achievements_profile_validation(key, id) {
    const title_id = document.getElementById('title' + id);
    const link_id = document.getElementById('link' + id);
    const start_date_id = document.getElementById('project_start_date' + id);
    const end_date_id = document.getElementById('project_end_date' + id);
    const description_id = document.getElementById('description' + id);

    const title = title_id.value.trim();
    const link = link_id.value.trim();
    const start_date = start_date_id.value.trim();
    const end_date = end_date_id.value.trim();
    const description = description_id.value.trim();

    // achievements_name
    if (title === '') {
        setError(title_id, 'This field can not be empty');
        return false;
    } else {
        setSuccess(title_id);
    }

    // achievements_designation
    // if (link === '') {
    //     setError(link_id, 'This field can not be empty');
    //     return false;
    //
    // } else {
    //     setSuccess(link_id);
    // }

    // achievements_start_date
    if (start_date === '') {
        setError(start_date_id, 'Start date can not be empty');
        return false;
    } else {
        setSuccess(start_date_id);
    }

    // achievements_end_date
    if (end_date !== '') {
        let date1 = new Date(start_date).getTime();
        let date2 = new Date(end_date).getTime();
        if (date1 > date2) {
            setError(end_date_id, 'End date can not be smaller than start date');
            return false;
        } else {
            setSuccess(end_date_id);
        }
    }

    // achievements description
    if (description === '') {
        setError(description_id, 'This field can not be empty');
        return false;
    } else if (!isValidWordCountAll_description(description_id, 30, 100)) {
        setError(description_id, 'Minimum Limit : 30 | Maximum Limit : 100 Words');
        return false;
    } else {
        setSuccess(description_id);
        update_achievements(key, id)
        return true;
    }
}

// profile validation end
// validationInput end tag
function bio_validation(key, id, min, max) {
    let bio_area = document.getElementById(id);
    if (!isValidWordCountAll_bio(bio_area, 100 , 1200)) {
        setError(bio_area, 'Bio should be between 100 to 1200 characters');
        return false;
    }
    else {
        setSuccess(bio_area);
        temporaryImage(key);
        return true;
    }
}
