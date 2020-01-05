function filterSelection(c) {
    var x, i;
    const search = document.getElementById("search").value;
    x = document.getElementsByClassName("filterDiv");
    var regex = new RegExp(search, "i");
    if (c == "all") {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
    } else if (search === "") {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            if (x[i].className.indexOf(c) > -1) { x[i].style.display = "block"; }
        }
    } else {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            if (x[i].className.indexOf(c) > -1 && x[i].innerText.match(regex) !== null) {
                x[i].style.display = "block";
            }
        }
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function searchFilter() {
    var products = document.getElementsByClassName("filterDiv");
    const search = document.getElementById("search").value;
    var btn = document.getElementsByClassName("active");
    var regex = new RegExp(search, "i");
    if (search === "" && btn[0].innerText === "Show all") {
        for (i = 0; i < products.length; i++) {
            products[i].style.display = "block";
        }
    } else if (btn[0].innerText === "Show all") {
        for (i = 0; i < products.length; i++) {
            products[i].style.display = "none";
            if (products[i].innerText.match(regex) !== null) {
                products[i].style.display = "block";
            }
        }
    } else {
        var regex1 = new RegExp(btn[0].innerText, "i");
        for (i = 0; i < products.length; i++) {
            products[i].style.display = "none";
            if (products[i].innerText.match(regex) !== null && products[i].className.match(regex1) !== null) {
                products[i].style.display = "block";
            }
        }
    }
}

window.onload = function () {
    filterSelection("all")
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}
