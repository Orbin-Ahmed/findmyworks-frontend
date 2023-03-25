const data_list = {}


function setMyCookies() {
    const allInput = document.querySelectorAll(".input");

    allInput.forEach(value => {
        objAppend(value.id, value.value);
    });
}

function objAppend(key_name, value) {
    data_list[key_name] = value;
}