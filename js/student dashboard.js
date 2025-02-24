document.getElementById("user-btn").addEventListener("click", function () {
    let dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("dropdown-menu");
    let button = document.getElementById("user-btn");

    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});


function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    var profileIcon = document.querySelector(".profile-icon");
    var dropdown = document.getElementById("dropdownMenu");

    if (!profileIcon.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
