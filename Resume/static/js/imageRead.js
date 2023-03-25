function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageField').attr('src', e.target.result);
            $('#imageField-1').attr('src', e.target.result);
            temp_image_upload();
        };
        reader.readAsDataURL(input.files[0]);
    }
}
