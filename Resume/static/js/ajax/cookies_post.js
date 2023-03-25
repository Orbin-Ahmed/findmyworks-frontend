// function resume_post() {

//     var token = 'Token' + 
//     $.ajax({
//         headers: {'Authorization': 'Token'},
//         url: 'http://13.215.64.186/dj-rest-auth/login/',
//         type: 'POST',
//         data: JSON.stringify({ 
//             "email": email,
//             "password": password
//         }),
//         contentType: 'application/json',
//         dataType: 'json', 
//         success: function(data) {
//             sessionStorage.setItem('key', JSON.stringify(data.key));
//             location.href = "/"
//         },
//         error: function(data){
//             console.log(data.responseJSON.non_field_errors[0]);
//         }
//     });
// }
