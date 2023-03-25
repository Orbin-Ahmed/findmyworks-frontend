// Large Image 1
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        // images validation
        const errorMessage = document.querySelector("#errorImage_4");
        const image = input.files[0];
        const {size, width} = image;
        console.log(size);
        if (size > 10000000) {
            errorMessage.textContent =
                "Formet not supported";
        } else {
            errorMessage.textContent = "";
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}

$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});


// Small Image 1
function readURL_1(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap-1').hide();

            $('.file-upload-image-1').attr('src', e.target.result);
            $('.file-upload-content-1').show();

            $('.image-title').html(input.files[0].name);
        };

        // images validation
        const errorMessage = document.querySelector("#errorImage");
        const image = input.files[0];
        const {size, width} = image;
        console.log(size);
        if (size > 10000000) {
            errorMessage.textContent =
                "Formet not supported";
        } else {
            errorMessage.textContent = "";
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        removeUpload_1();
    }
}

function removeUpload_1() {
    $('.file-upload-input-1').replaceWith($('.file-upload-input-1').clone());
    $('.file-upload-content-1').hide();
    $('.image-upload-wrap-1').show();
}

$('.image-upload-wrap-1').bind('dragover', function () {
    $('.image-upload-wrap-1').addClass('image-dropping');
});
$('.image-upload-wrap-1').bind('dragleave', function () {
    $('.image-upload-wrap-1').removeClass('image-dropping');
});

// Small Image 2
function readURL_2(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap-2').hide();

            $('.file-upload-image-2').attr('src', e.target.result);
            $('.file-upload-content-2').show();

            $('.image-title').html(input.files[0].name);
        };

        // images validation
        const errorMessage = document.querySelector("#errorImage_1");
        const image = input.files[0];
        const {size, width} = image;
        console.log(size);
        if (size > 10000000) {
            errorMessage.textContent =
                "Formet not supported";
        } else {
            errorMessage.textContent = "";
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        removeUpload_2();
    }
}

function removeUpload_2() {
    $('.file-upload-input-2').replaceWith($('.file-upload-input-2').clone());
    $('.file-upload-content-2').hide();
    $('.image-upload-wrap-2').show();
}

$('.image-upload-wrap-2').bind('dragover', function () {
    $('.image-upload-wrap-2').addClass('image-dropping');
});
$('.image-upload-wrap-2').bind('dragleave', function () {
    $('.image-upload-wrap-2').removeClass('image-dropping');
});


// Small Image 3
function readURL_3(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap-3').hide();

            $('.file-upload-image-3').attr('src', e.target.result);
            $('.file-upload-content-3').show();

            $('.image-title').html(input.files[0].name);
        };

        // images validation
        const errorMessage = document.querySelector("#errorImage_2");
        const image = input.files[0];
        const {size, width} = image;
        console.log(size);
        if (size > 10000000) {
            errorMessage.textContent =
                "Formet not supported";
        } else {
            errorMessage.textContent = "";
            reader.readAsDataURL(input.files[0]);
        }

    } else {
        removeUpload_3();
    }
}

function removeUpload_3() {
    $('.file-upload-input-3').replaceWith($('.file-upload-input-3').clone());
    $('.file-upload-content-3').hide();
    $('.image-upload-wrap-3').show();
}

$('.image-upload-wrap-3').bind('dragover', function () {
    $('.image-upload-wrap-3').addClass('image-dropping');
});
$('.image-upload-wrap-3').bind('dragleave', function () {
    $('.image-upload-wrap-3').removeClass('image-dropping');
});


// Small Image 4
function readURL_4(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap-4').hide();

            $('.file-upload-image-4').attr('src', e.target.result);
            $('.file-upload-content-4').show();

            $('.image-title').html(input.files[0].name);
        };

        // images validation
        const errorMessage = document.querySelector("#errorImage_3");
        const image = input.files[0];
        const {size, width} = image;
        console.log(size);
        if (size > 10000000) {
            errorMessage.textContent =
                "Formet not supported";
        } else {
            errorMessage.textContent = "";
            reader.readAsDataURL(input.files[0]);
        }


    } else {
        removeUpload_4();
    }
}

function removeUpload_4() {
    $('.file-upload-input-4').replaceWith($('.file-upload-input-4').clone());
    $('.file-upload-content-4').hide();
    $('.image-upload-wrap-4').show();
}

$('.image-upload-wrap-4').bind('dragover', function () {
    $('.image-upload-wrap-4').addClass('image-dropping');
});
$('.image-upload-wrap-4').bind('dragleave', function () {
    $('.image-upload-wrap-4').removeClass('image-dropping');
});


// Starting project description and title validation here -Drishty
function validateForm() {
    let inputField = document.getElementById("inputField").value;
    let titleField = document.getElementById("titleField").value;
    let errorMessage_1 = document.getElementById("errorMessage1");
    let errorMessage_2 = document.getElementById("errorMessage2");


    let pDescription_count = inputField.split(" ").length;
    let pTilte_count = titleField.split(" ").length;

    let count = 0;
    if ( pTilte_count < 2 || pTilte_count > 7) {
        errorMessage_1.innerHTML = "Error: Word count must be at least 2 and maximum 7.";
        errorMessage_1.classList.add("show");
        count = count + 1;
        console.log(pTilte_count);
    } else {
        errorMessage_1.classList.remove("show");
    }
    if (pDescription_count < 120 || pDescription_count > 200) {
        errorMessage_2.innerHTML = "Error: Word count must be at least 120 and maximum 200.";
        errorMessage_2.classList.add("show");
        count = count + 1;
        console.log(pDescription_count);
    } else {
        errorMessage_2.classList.remove("show");
    }
    if (count == 0) {
        return true;
    } else {
        return false;
        count = 0;
    }
}

document.querySelector("form").addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

// word-counter

const textArea = document.querySelector("#titleField");
const wordCount = document.querySelector("#word-count");

textArea.addEventListener("input", function () {
    const words = this.value.trim().split(/\s+/);
    const count = words.length > 7 ? 7 : words.length;
    if (words[0] == '') {
        wordCount.textContent = `0/7`;
    } else {
        wordCount.textContent = `${count}/7`;
    }
    wordCount.classList.toggle("green", words.length <= 7);
    wordCount.classList.toggle("red", words.length > 7);
});

// end


const textArea1 = document.querySelector("#inputField");
const wordCount1 = document.querySelector("#word-count1");

textArea1.addEventListener("input", function () {
    const words1 = this.value.trim().split(/\s+/);
    const count1 = words1.length > 200 ? 200 : words1.length;
    if (words1[0] == '') {
        wordCount1.textContent = `0/200`;
    } else {
        wordCount1.textContent = `${count1}/200`;
    }
    wordCount1.classList.toggle("green", words1.length <= 200);
    wordCount1.classList.toggle("red", words1.length > 200);
});
