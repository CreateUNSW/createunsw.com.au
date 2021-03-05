window.onload = function () {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        });
    }
};


/**
 * Finds the intersection of 2 arrays
 * @param {array} a
 * @param {array|classList} b
 * @return {array} the intersection of the 2 arrays
 *
 * @see https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848
 */
function intersection(a, b) {
    if (Array.isArray(b)) {
        return a.filter(x => b.includes(x));
    } else {
        return a.filter(x => b.contains(x));
    }

}

// active link on current page function

$(document).ready(function() {
    $('.nav-link[href="/' + location.pathname.split("/")[1] + '"]').addClass('highlight');
});

// click anywhere to close the mobile menu

$(function() {
    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
});

// make external links to open in a new tab
$("document").ready(function() {
    $("a[href^='http://']").attr("target", "_blank");
    $("a[href^='https://']").attr("target", "_blank");
  });