

function resume_print_area() {
    // var test = document.getElementById('user_data');
    // test.preventDefault();
    document.getElementById('resume_page_layout').style.display = 'none';
    document.getElementById('download_prompt').style.display = 'block';
    // document.getElementById('resume_1').style.display = 'block';
    // document.getElementById('resume_2').style.display = 'block';

    // document.getElementById('print_btn').style.display = 'block';
    var test = Array.from(document.querySelectorAll('#myResume_1')).pop();
    test.style.display = 'block';
}

// function printDiv(divName) {
//     var printContents = document.getElementById(divName).innerHTML;
//     var originalContents = document.body.innerHTML;

//     document.body.innerHTML = printContents;

//     window.print();

//     document.body.innerHTML = originalContents;
// }
function print_test() {
    document.getElementById('my_header_style').style.display = "none";
    window.print();
}

// function PrintElem(elem) {
//     Popup($('<div/>').append($(elem).clone()).html());
// }

// function Popup(data) {
//     var mywindow = window.open('', 'my div', 'height=595,width=842');
//     mywindow.document.write('<html><head><title>my div</title>');
//     mywindow.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">');
//     mywindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Orbin23/CssRepo/css/myMain.css" >');
//     mywindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Orbin23/CssRepo/css/resume.css" >');
//     mywindow.document.write('');
//     mywindow.document.write('</head><body >');
//     mywindow.document.write(data);
//     mywindow.document.write('</body></html>');
//     setTimeout(function () {
//         // mywindow.print();
//         // mywindow.close();
//     }, 1000);
//     //  mywindow.close();

//     return true;
// }


// function PrintElem(elem) {
//     printDiv($('#' + elem).html());
// }

// function printDiv(data) {
//     var mywindow = window.open('', 'new div', 'height=400,width=600');
//     mywindow.document.write('<html><head><title></title>');
//     mywindow.document.write('<link rel="stylesheet" href="./Resume/static/css/bootstrap.min.css">' +
//         '<link rel="stylesheet" href="./Resume/static/css/myMain.css>' +
//         '<link rel="stylesheet" href="./Resume/static/css/progress.css>' +
//         '<link rel="stylesheet" href="./Resume/static/css/resume.css>');
//     mywindow.document.write('</head><body >');
//     mywindow.document.write(data);
//     mywindow.document.write('</body></html>');
//     mywindow.document.close();
//     mywindow.focus();
//     setTimeout(function () { mywindow.print(); mywindow.close(); }, 1000);

//     return true;
// }

function PrintElem(elem1, elem2)
{
    var mywindow = window.open('', 'PRINT', 'height=600,width=600');

    mywindow.document.write('<html><head>');
    mywindow.document.write('<meta charset="utf-8">');
    mywindow.document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
    mywindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" type="text/css" media="print"/>');
    mywindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Orbin23/fmw_static_files@main/profile.css" type="text/css" media="print"/>');
    mywindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Orbin23/fmw_static_files@main/profile_resume.css" type="text/css" media="print"/>');
    mywindow.document.write('<style>');
    mywindow.document.write('* {');
    mywindow.document.write('-webkit-print-color-adjust: exact !important;');
    mywindow.document.write('color-adjust: exact !important;');
    mywindow.document.write('print-color-adjust: exact !important;');
    mywindow.document.write('}');
    mywindow.document.write('body {');
    mywindow.document.write('margin: 10mm 0mm 10mm 0mm;');
    mywindow.document.write('zoom: 80%;');
    mywindow.document.write('size: A4;');
    // mywindow.document.write('font-size: 26pt;!important;');
    // mywindow.document.write('page-break-inside: avoid;');
    mywindow.document.write('}');
    mywindow.document.write('</style>');
    mywindow.document.write('</head><body>');
    mywindow.document.write(document.getElementById(elem1).innerHTML);
    mywindow.document.write(document.getElementById(elem2).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus();
    setTimeout(function () {
    mywindow.print();
    mywindow.close();
    }, 1000)
    return true;
}

// var j = jQuery.noConflict(true);

// // define a function that you can call as an EventListener or whatever you want ...
// function Print_Specific_Element() {
//     // the element's id must be unique ..
//     // you can't print multiple element, but can put them all in one div and give it an id, then you will be able to print them !
//     // use the 'j' alias to call PrintThis, with its compatible version of jquery
//     j('#resume-print').printThis({
//         importCSS: true, // to import the page css
//         importStyle: true, // to import <style>css here will be imported !</style> the stylesheets (bootstrap included !)
//         loadCSS: true, // to import style="The css writed Here will be imported !"
//         canvas: true // only if you Have image/Charts ...
//     });
// }
