/*
 * Copyright (c) 2023. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

function return_to_back(event) {
    history.back();
    // The popstate event is fired each time when the current history entry changes.
    // var r = confirm("You pressed a Back button! Are you sure?!");
    //
    // if (r == true) {
    //     // Call Back button programmatically as per user confirmation.
    //     history.back();
    //     // Uncomment below line to redirect to the previous page instead.
    //     // window.location = document.referrer // Note: IE11 is not supporting this.
    // } else {
    //     // Stay on the current page.
    //     history.pushState(null, null, window.location.pathname);
    // }

    history.pushState(null, null, window.location.pathname);
}

function return_to_back_prompt(event) {
    // The popstate event is fired each time when the current history entry changes.
    var r = confirm("You pressed a Back button! Are you sure?! Your data will be lost.");

    if (r == true) {
        // Call Back button programmatically as per user confirmation.
        history.back();
        // Uncomment below line to redirect to the previous page instead.
        // window.location = document.referrer // Note: IE11 is not supporting this.
    } else {
        // Stay on the current page.
        history.pushState(null, null, window.location.pathname);
    }

    history.pushState(null, null, window.location.pathname);
}
