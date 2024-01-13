// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Fetch data from 'file.json'
    fetch('file.json')
        .then(res => res.json())
        .then(json => {

            // Check if the current page is 'index.html'
            if (window.location.pathname.includes("index.html")) {

                // Navbar scroll color changing functionality
                window.addEventListener("scroll", function () {
                    // Get the navbar element by ID
                    let navbar = document.getElementById("navbar");
                    let scrollThreshold = 520;

                    // Change navbar color based on scroll position
                    if (window.scrollY > scrollThreshold) {
                        navbar.classList.add("scrolled");
                    } else {
                        navbar.classList.remove("scrolled");
                    }
                });

                // Loop to populate recommended items on the index page
                for (let i = 0; i < 10; i++) {
                    let container = document.getElementById("recommended");

                    // Create and append column
                    let col = document.createElement("div");
                    col.classList.add("col", "py-5", "px-3");
                    container.appendChild(col);

                    // Create and append card
                    let card = document.createElement("div");
                    card.id = json[i].id;
                    card.classList.add("card");
                    col.appendChild(card);

                    // Set up click event to navigate to details page
                    card.onclick = function () {
                        window.location.href = "details.html?id=" + encodeURIComponent(json[i].id);
                    }

                    // Create and append image
                    let img = document.createElement("img");
                    img.classList.add("card-img-top");
                    img.src = json[i].image;
                    card.appendChild(img);
                    
                    // Create and append card body
                    let card_body = document.createElement("div");
                    card_body.classList.add("card-body");
                    card.appendChild(card_body);

                    // Create and append card title
                    let card_title = document.createElement("h5");
                    card_title.classList.add("card-title");
                    card_title.innerHTML = json[i].title;
                    card_body.appendChild(card_title);

                    // Create and append card price
                    let card_price = document.createElement('p');
                    card_price.className = "card-text";
                    let small = document.createElement('small');
                    small.className = "text-body-secondary";
                    small.innerHTML = `Price : ${json[i].price}$`;
                    card_price.appendChild(small);
                    card_body.appendChild(card_price);
                }
            }

            // Check if the current page is 'categories.html'
            if (window.location.pathname.includes("categories.html")) {

                // Navbar scroll color changing functionality
                window.addEventListener("scroll", function () {
                    let navbar = document.getElementById("navbar");
                    let scrollThreshold = 335;

                    // Change navbar color based on scroll position
                    if (window.scrollY > scrollThreshold) {
                        navbar.classList.add("scrolled");
                    } else {
                        navbar.classList.remove("scrolled");
                    }
                });

                // Get category from the URL
                let params = new URLSearchParams(window.location.search);
                let category = params.get("category");
                let container = document.getElementById("container");

                // Set the category name in the HTML
                let category_name = document.getElementById("category_name");
                category_name.innerHTML = category + "  clothing";

                // Loop to populate items based on the selected category
                for (let j = 0; j < json.length; j++) {

                    if (json[j].category == category) {
                        // Create and append column
                        let col = document.createElement("div");
                        col.classList.add("col", "py-5", "px-3");
                        container.appendChild(col);

                        // Create and append card
                        let card = document.createElement("div");
                        card.id = json[j].id;
                        card.classList.add("card");
                        col.appendChild(card);

                        // Set up click event to navigate to details page
                        card.onclick = function () {
                            window.location.href = "details.html?id=" + encodeURIComponent(json[j].id);
                        }

                        // Create and append image
                        let img = document.createElement("img");
                        img.classList.add("card-img-top");
                        img.src = json[j].image;
                        card.appendChild(img);

                        // Create and append card body
                        let card_body = document.createElement("div");
                        card_body.classList.add("card-body");
                        card.appendChild(card_body);

                        // Create and append card title
                        let card_title = document.createElement("h5");
                        card_title.classList.add("card-title");
                        card_title.innerHTML = json[j].title;
                        card_body.appendChild(card_title);

                        // Create and append card price
                        let card_price = document.createElement('p');
                        card_price.className = "card-text";
                        let small = document.createElement('small');
                        small.className = "text-body-secondary";
                        small.innerHTML = `Price : ${json[j].price}$`;
                        card_price.appendChild(small);
                        card_body.appendChild(card_price);
                    }
                }
            }

            // Check if the current page is 'details.html'
            if (window.location.pathname.includes("details.html")) {

                // Get the item ID from the URL
                let params = new URLSearchParams(window.location.search);
                let id = params.get("id");
                let container = document.getElementById("container");

                // Loop to find the item with the matching ID
                for (let k = 0; k < json.length; k++) {
                    if (json[k].id == id) {
                        // Set details for the selected item
                        let img = document.getElementById("img");
                        img.src = json[k].image;

                        let title = document.getElementById("title");
                        title.innerHTML = json[k].title;

                        let description = document.getElementById("description");
                        description.innerHTML = json[k].description;

                        let price = document.getElementById("price");
                        price.innerHTML = `Price : ${json[k].price}$`;

                        let rating = document.getElementById("rating");
                        rating.innerHTML = `Rating : ${json[k].rating.rate} (${json[k].rating.count})`;

                        break;
                    }
                }
            }
        });
});
