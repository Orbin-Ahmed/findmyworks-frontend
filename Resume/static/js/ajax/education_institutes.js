function editEductation(key, id) {
    let value = document.querySelector('#institute_name' + id).value;
    let institute = document.querySelector('option[value="' + value + '"]').label;

    let concentration = document.getElementById('concentration' + id).value;
    let major = document.getElementById('education_board' + id).value;
    let result = document.getElementById('result' + id).value;
    let address = document.getElementById('Address' + id).value;
    let tempBody = {
        "institute": institute,
        "concentration": concentration,
        "major": major,
        "result": result,
        "address": address,
        "id": id
    }
    let body = [tempBody]
    console.log(institute)
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/education-institutes/',
        headers: {'Authorization': "Token " + key},
        type: 'POST',
        data: JSON.stringify(body),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            location.href = "/profile"
            alert("Success")
        },
        error: function (data) {
            alert(JSON.stringify(data))
        }
    });
}

function deleteEductation(key, id) {
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/education-institutes/' + id + '/',
        headers: {'Authorization': "Token " + key},
        type: 'DELETE',
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            location.href = "/profile"
        },
        error: function (data) {
            alert(JSON.stringify(data))
        }
    });
}

function deleteSkills(key, id) {
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/skills/' + id + '/',
        headers: {'Authorization': "Token " + key},
        type: 'DELETE',
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            location.href = "/profile"
        },
        error: function (data) {
            alert(JSON.stringify(data))
        }
    });
}

function deleteProjects(key, id) {
    $.ajax({
        url: 'https://backend.findmyworks.com/project/api/v1/projects/' + id + '/',
        headers: {'Authorization': "Token " + key, 'Content-Type': 'application/json'},
        type: 'DELETE',
        success: function (data) {
            location.href = "/profile"
        },
        error: function (data) {
            alert(JSON.stringify(data))
        }
    });
}

function addProjectsSponser(key, id) {
    let price = document.getElementById("project_sponsor_amount").value;
    let sponsors_due_date = document.getElementById("project_sponsor_date").value;
    let sponsor_description = document.getElementById("project_sponsor_description").value;
    let body = {"price": price, "sponsors_due_date": sponsors_due_date, "sponsor_description": sponsor_description}
    $.ajax({
        url: 'https://backend.findmyworks.com/project/api/v1/projects/' + id + '/add-project-sponsorship/',
        headers: {'Authorization': "Token " + key},
        type: 'POST',
        data: body,
        success: function (data) {
            includeHtml(data);
        },
        error: function (data) {
            alert(JSON.stringify(data))
        }
    });
}

function includeHtml(data) {
    document.getElementById("post_project_sponsor_description").innerHTML = data.sponsor_description;
    let due_date = new Date(data.sponsors_due_date).toDateString();
    let due_date_f = new Date(data.sponsors_due_date);
    let today = new Date();
    let Difference_In_Time = due_date_f.getTime() - today.getTime();
    document.getElementById("sponsor_due_date").innerHTML = parseInt(Difference_In_Time / (1000 * 3600 * 24));
    document.getElementById("post_project_sponsor_date").innerHTML = due_date;
    document.getElementById("post_project_sponsor_amount").innerHTML = data.price;
}

function temp_image_upload() {
    {
        let file_data = $('#file').prop('files')[0];
        let form_data = new FormData();
        form_data.append('image', file_data);
        $.ajax({
            url: 'https://backend.findmyworks.com/resume/api/v1/related-information-image/',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function (response) {
                let data = JSON.parse(response);
                data_list['user_image'] = data.image
                console.log(response);
            },
            error: function (response) {
                console.log(response);
            }
        });
    }
}

// function temp_image_upload() {
//     let file_data = $('#file').prop('files')[0];
//     let reader = new FileReader();
//     reader.onload = function (e) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('POST', `https://webp-codec.appspot.com/image`, true);
//         xhr.setRequestHeader('Content-Type', 'image/jpeg');
//         xhr.responseType = 'arraybuffer';
//         xhr.onload = function () {
//             if (this.status === 200) {
//                 let form_data = new FormData();
//                 form_data.append('image', this.response);
//                 $.ajax({
//                     url: 'https://backend.findmyworks.com/resume/api/v1/related-information-image/',
//                     dataType: 'text',
//                     cache: false,
//                     contentType: false,
//                     processData: false,
//                     data: form_data,
//                     type: 'post',
//                     success: function (response) {
//                         let data = JSON.parse(response);
//                         data_list['user_image'] = data.image;
//                         console.log("Web p");
//                         console.log(response);
//                     },
//                     error: function (response) {
//                         console.log(response);
//                     }
//                 });
//             }
//         };
//         xhr.send(file_data);
//     };
//     reader.readAsDataURL(file_data);
// }
function addProjectsActivity(key, pid) {
    let description = document.getElementById("description").value;
    let body = {"project": pid, "description": description}
    $.ajax({
        url: 'https://backend.findmyworks.com/project/api/v1/project-activities/',
        headers: {'Authorization': "Token " + key},
        type: 'POST',
        data: body,
        success: function (data) {
            document.getElementById("description").value = "";
            location.href = '/profile';
        },
        error: function (data) {
        }
    });
}


function addEductation(key) {
    let value = document.querySelector('#new-institute_name').value;
    let institute_id = document.querySelector('option[value="' + value + '"]').label;
    let concentration = document.getElementById('new-concentration').value;
    let major = document.getElementById('new-education_board').value;
    let result = document.getElementById('new-result').value;
    let address = document.getElementById('new-Address').value;
    let start_date = document.getElementById('study_start_date').value;
    let end_date = document.getElementById('study_end_date').value;
    let currently_studying = false;
    if (end_date == '') {
        end_date = null;
        currently_studying = true;
    }
    let tempBody = {
        "institute": institute_id,
        "concentration": concentration,
        "major": major,
        "result": result,
        "address": address,
        "start_date": start_date,
        "end_date": end_date,
        "currently_studying": currently_studying,
    }
    let body = [tempBody]
    console.log(tempBody)
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/education-institutes/',
        headers: {'Authorization': "Token " + key},
        type: 'POST',
        data: JSON.stringify(body),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            location.href = "/profile"
            alert("Success")
        },
        error: function (data) {
            alert(JSON.stringify(data))
        }
    });
}

function addSkill(key) {
    let skill = document.getElementById("new-skill").value.toLowerCase();
    console.log(skill)
    let tempBody = {"name": skill}
    let body = [tempBody]
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/skills/',
        headers: {'Authorization': "Token " + key},
        type: 'POST',
        data: JSON.stringify(body),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            location.href = "/profile"
            // console.log(data)
        },
        error: function (data) {
            // console.log(data)
        }
    });
}


function temporaryImage(key) {
    var file_data = $('#imageUpload').prop('files')[0];
    var form_data = new FormData();
    form_data.append('image', file_data);
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/related-information-image/',
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'post',
        success: function (response) {
            let data = JSON.parse(response);
            console.log(data.image);
            imageFinalUpload(key, data.image);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function imageFinalUpload(key, imageUrl) {
    let body = {"image": imageUrl}
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/finalize-related-information/',
        headers: {'Authorization': "Token " + key},
        type: 'POST',
        data: JSON.stringify(body),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            // console.log(data)
        },
        error: function (data) {
            // console.log(data)
        }
    });
}

function update_workinfo(key, wid) {
    let name = document.getElementById("company_name" + wid).value;
    let designation = document.getElementById("designation" + wid).value;
    let city = document.getElementById("city" + wid).value;
    let country = document.getElementById("country" + wid).value;
    let start_date = document.getElementById("start_date" + wid).value;
    let end_date = document.getElementById("end_date" + wid).value;
    let currently_working = false;
    if (end_date == "") {
        currently_working = true;
        end_date = null;
    } else {
        currently_working = false;
    }
    console.log(end_date)
    let tempBody = {
        'id': wid,
        "name": name,
        'designation': designation,
        'city': city,
        'country': country,
        'start_date': start_date,
        'end_date': end_date,
        'currently_working': currently_working
    }
    let body = [tempBody]
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/professional-institutes/',
        headers: {'Authorization': "Token " + key},
        type: 'POST',
        data: JSON.stringify(body),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            location.href = "/profile"
        },
        error: function (data) {
            console.log(data)
        }
    });
}

function delete_workinfo(key, wid) {
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/professional-institutes/' + wid + '/',
        headers: {'Authorization': "Token " + key},
        type: 'DELETE',
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            location.href = "/profile"
        },
        error: function (data) {
            console.log(data)
        }
    });
}

function delete_achievements(key, aid) {
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/achievements/' + aid + '/',
        headers: {'Authorization': "Token " + key},
        type: 'DELETE',
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            location.href = "/profile"
        },
        error: function (data) {
            console.log(data)
        }
    });
}

function update_achievements(key, aid) {
    let title = document.getElementById("title" + aid).value;
    let description = document.getElementById("description" + aid).value;
    let link = document.getElementById("link" + aid).value;
    let links = [link]
    let start_date = document.getElementById("project_start_date" + aid).value;
    let end_date = document.getElementById("project_end_date" + aid).value;
    let currently_working = false;
    if (end_date == "") {
        currently_working = true;
        end_date = null;
    } else {
        currently_working = false;
    }
    console.log(end_date)
    let tempBody = {
        'id': aid,
        "title": title,
        'description': description,
        'links': links,
        'start_date': start_date,
        'end_date': end_date,
        'currently_working': currently_working
    }
    let body = [tempBody]
    $.ajax({
        url: 'https://backend.findmyworks.com/resume/api/v1/achievements/',
        headers: {'Authorization': "Token " + key},
        type: 'POST',
        data: JSON.stringify(body),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            location.href = "/profile"
            // console.log(data)
        },
        error: function (data) {
            console.log(data)
        }
    });
}
