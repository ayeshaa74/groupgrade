document.addEventListener("DOMContentLoaded", function () {
    const createBtn = document.querySelector(".create-btn");
    const grid = document.querySelector(".grid");

    createBtn.addEventListener("click", function () {
        const newCard = document.createElement("div");
        newCard.classList.add("card");

        newCard.innerHTML = `
            <h4>Module XYZ</h4>
            <p>New Assignment - Group X</p>
            <button class="view-btn">View</button>
        `;

        grid.appendChild(newCard);
        attachViewEvent(newCard.querySelector(".view-btn"));
    });

    function attachViewEvent(button) {
        button.addEventListener("click", function () {
            alert(`Viewing: ${this.previousElementSibling.textContent}`);
        });
    }

    document.querySelectorAll(".view-btn").forEach(attachViewEvent);
});


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
