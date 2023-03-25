/*
 * Copyright (c) 2023. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

function edit_toggle() {
    document.getElementById('bio_area_update').disabled = false;
    document.getElementById('bio_save_btn').disabled = false;
    document.getElementById('profile-count-container').style.display = 'block';

}

function edit_toggle_1() {
    // document.getElementById('bio_area_update').disabled = false;
    document.getElementById('basic_edit_btn').disabled = false;
    document.getElementById('name').disabled = false;
    document.getElementById('profession').disabled = false;
    document.getElementById('date_of_birth').disabled = false;
    document.getElementById('phone').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('address').disabled = false;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imageUpload").change(function () {
    readURL(this);
});


function copy_to_clipboard() {
    // Get the text field
    var copyText = document.getElementById("share-link-href");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
}

// Drishty

// profile about me character counter

const profileArea = document.querySelector("#bio_area_update");
const profileCount = document.querySelector("#profile-count");

try {
    profileArea.addEventListener("input", function () {
        const countProfile =  this.value.length;
        if (this.value == '') {
            profileCount.textContent = `0/1200`;
        } else {
            profileCount.textContent = `${countProfile}/1200`;
        }
       profileCount.classList.toggle("green", countProfile <= 1200);
        profileCount.classList.toggle("red", countProfile > 1200);
    });
} catch (err) {
}

// profile about me character counter ends here

const achArea = document.querySelector("#description");
const achCount = document.querySelector("#ach-count");
const achMessage = document.querySelector("#achMessage");

try {
    achArea.addEventListener("input", function () {
        const wordsAch = this.value.trim().split(/\s+/);
        const countAch = wordsAch.length > 100 ? 100 : wordsAch.length;
        if (wordsAch[0] == '') {
            achCount.textContent = `0/100`;
        } else {
            achCount.textContent = `${countAch}/100`;
        }
        achCount.classList.toggle("green", wordsAch.length <= 100);
        achCount.classList.toggle("red", wordsAch.length > 100);
        achMessage.classList.toggle("ach-message", wordsAch.length < 100);
    });
} catch (err) {
}


// const infoArea = document.querySelector(".info-description");
// const infoCount = document.querySelector("#info-count");
// const infoMessage = document.querySelector("#infoMessage");
//
// try {
//     infoArea.addEventListener("input", function () {
//         const wordsInfo = this.value.trim().split(/\s+/);
//         const countInfo = wordsInfo.length > 100 ? 100 : wordsInfo.length;
//         if (wordsInfo[0] === '') {
//             infoCount.textContent = `0/100`;
//         } else {
//             infoCount.textContent = `${countInfo}/100`;
//         }
//         infoCount.classList.toggle("green", wordsInfo.length <= 100);
//         infoCount.classList.toggle("red", wordsInfo.length > 100);
//         infoMessage.classList.toggle("info-message", wordsInfo.length < 100);
//     });
// } catch (err) {
// }

// left


const infoAreas = document.querySelectorAll(".info-description");

infoAreas.forEach(function (textArea) {
    const infoCountContainer = textArea.nextElementSibling;
    const infoCount = infoCountContainer.querySelector("#info-count");
    // const infoMessage = infoCountContainer.nextElementSibling;
    try {
        textArea.addEventListener("input", function () {
            let wordsInfo = this.value.trim().split(/\s+/);
            let countInfo = wordsInfo.length > 100 ? 100 : wordsInfo.length;
            if (wordsInfo[0] === '') {
                infoCount.textContent = '0/100';
            } else {
                infoCount.textContent = `${countInfo}/100`;
            }
            infoCount.classList.toggle("green", wordsInfo.length < 100);
            infoCount.classList.toggle("red", wordsInfo.length >= 100);
            // infoMessage.classList.toggle("info-message", wordsInfo.length < 100);
        });
    } catch (err) {
    }
});

// full

const fullAreas = document.querySelectorAll(".info-description");

fullAreas.forEach(function (textArea) {
    const fullCountContainer = textArea.nextElementSibling;
    const fullCount = fullCountContainer.querySelector("#full-count");
    // const fullMessage = fullCountContainer.nextElementSibling;
    try {
        textArea.addEventListener("input", function () {
            let wordsFull = this.value.trim().split(/\s+/);
            let countFull = wordsFull.length > 100 ? 100 : wordsFull.length;
            if (wordsFull[0] === '') {
                fullCount.textContent = '0/100';
            } else {
                fullCount.textContent = `${countFull}/100`;
            }
            fullCount.classList.toggle("green", wordsFull.length < 100);
            fullCount.classList.toggle("red", wordsFull.length >= 100);
            // fullMessage.classList.toggle("info-message", wordsFull.length < 100);
        });
    } catch (err) {
    }
});


// right

const rightAreas = document.querySelectorAll(".info-description");

rightAreas.forEach(function (textArea) {
    const rightCountContainer = textArea.nextElementSibling;
    const rightCount = rightCountContainer.querySelector("#right-count");
    // const fullMessage = rightCountContainer.nextElementSibling;
    try {
        textArea.addEventListener("input", function () {
            let wordsRight = this.value.trim().split(/\s+/);
            let countRight = wordsRight.length > 100 ? 100 : wordsRight.length;
            if (wordsRight[0] === '') {
                rightCount.textContent = '0/100';
            } else {
                rightCount.textContent = `${countRight}/100`;
            }
            rightCount.classList.toggle("green", wordsRight.length < 100);
            rightCount.classList.toggle("red", wordsRight.length >= 100);
            // fullMessage.classList.toggle("info-message", wordsFull.length < 100);
        });
    } catch (err) {
    }
});
