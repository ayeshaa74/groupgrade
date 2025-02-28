document.addEventListener("DOMContentLoaded", function () {
    const studentNames = ["Ayesha", "Sara", "Jasmeen", "Eman"];

    document.getElementById("studentB").textContent = studentNames[0];
    document.getElementById("studentC").textContent = studentNames[1];
    document.getElementById("studentD").textContent = studentNames[2];
    document.getElementById("studentE").textContent = studentNames[3];

    const userBtn = document.getElementById("user-btn");
    const dropdown = document.getElementById("dropdown-menu");

    if (!userBtn || !dropdown) {
        console.error("❌ ERROR: Missing elements in the DOM!");
        return;
    }

    userBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdown.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!userBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});


document.getElementById("user-btn").addEventListener("click", function () {
    let dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("dropdown-menu");
    let button = document.getElementById("user-btn");

    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
