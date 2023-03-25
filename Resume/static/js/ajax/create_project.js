// $('#test4').submit(e => {
//     e.preventDefault();
//     makecall4();
// })

// let makecall4 = async () => {
//     const text = document.getElementById('page_post4').value;
//     const fileReader = new FileReader();
//     const file = document.getElementById('page_image4').files[0];

//     fileReader.onloadend = async () => {
//         const photoData = new Blob([fileReader.result], {type: 'image/jpg'});
//         const formData = new FormData();
    
//         formData.append('access_token', 'EAAHthYOYeZAEBAGY6TGo7hQgfecQCIk2RiZAV7aGZCOw0FUghJx1tz9YZAx6ZCmfAsYJyBQJBGjFZBlZAXH5niPMZCdWbN8lb1TuZA2dunOHuWL0hP1xjK7hyE1mZAE8kkFUmm31D83ptYjGUArDOpw2CLwfga0iJuQpGpGBj96rZCGqG9mciPHtukHl35FA6M103pqKS0JFBkY208HBGjQK12FZCldkgtOrG5sZD');
//         formData.append('attachments', photoData);
//         formData.append('message', text);

//         let response = await fetch(`https://graph.facebook.com/v14.0/105525375626340/photos`, {
//             body: formData,
//             method: 'post'
//         });
//         response = await response.json();
//         console.log(response);
//     };
//     fileReader.readAsArrayBuffer(file);
// }