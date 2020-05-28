var categories = [];
var products = [];

/**
 * @returns {Array<string>} the currently selected categories
 */
function getSelectedCategories() {
    return categories.filter(category => category.state == true).map(category => category.name);
}

function getMatchedProducts() {
    return products.filter(product => product.matched == true).map(product => product.name)
}

function showProducts() {
    selected = getSelectedCategories();
    matched = getMatchedProducts();
    for (product of document.getElementsByClassName('sales-product')) {
        if (
            (intersection(selected, product.classList).length == 0 && selected.length > 0) ||
            (!matched.includes(product.id))
        ) {
            product.classList.add('filtered');
        } else {
            product.classList.remove('filtered');
        }
    }
}

function toggleCategory(toggler) {
    const index = categories.findIndex(category => category.name == toggler)
    console.log(index)
    categories[index]['state'] = !categories[index]['state'];
    var toggle =
    document.getElementById(toggler)
    toggle.classList.toggle('btn-secondary');
    toggle.classList.toggle('btn-primary')
    showProducts();
}

function getAlphanumericChars(s) {
    const match = s.match(/([0-9a-zA-Z])/g);
    if (match) {
        return match.join("");
    }
    return "";
}

function search() {
    const query = document.getElementById("search").value
    for ([index, product] of products.entries()) {
        if (getAlphanumericChars(product.name).includes(getAlphanumericChars(query))) {
            products[index].matched = true;
        } else {
            products[index].matched = false;
        }
    }
    showProducts();
}

window.onload = function () {
    for (category of document.getElementsByClassName("sales-category")) {
        this.categories.push(
            {name: category.id, state: false}
        );
    }

    for (product of document.getElementsByClassName("sales-product")) {
        this.products.push(
            {name: product.id, matched: false}
        );
    }
}
