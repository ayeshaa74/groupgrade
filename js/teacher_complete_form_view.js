document.addEventListener("DOMContentLoaded", function () {
    const studentNames = ["Ayesha", "Sara", "Jasmeen", "Eman"];
    document.getElementById("studentB").textContent = studentNames[0];
    document.getElementById("studentC").textContent = studentNames[1];
    document.getElementById("studentD").textContent = studentNames[2];
    document.getElementById("studentE").textContent = studentNames[3];

    const studentGrades = [70.1, 72.33, 75, 69.2];
    let gradeText = studentNames.map((name, index) => `${name}: ${studentGrades[index]}%`).join("&nbsp;&nbsp;");
    document.getElementById("student-grades").innerHTML = gradeText;

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

    