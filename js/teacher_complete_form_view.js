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


document.addEventListener("DOMContentLoaded", function () {

    let rawStudentData = [
        { name: "Ayesha", grade: 70.1 },
        { name: "Sara", grade: 72.33 },
        { name: "Jasmeen", grade: 75 },
        { name: "Eman", grade: 69.2 },
    ];
    let uniqueStudents = [];
    let studentSet = new Set();
    
    rawStudentData.forEach(student => {
        if (!studentSet.has(student.name)) {
            studentSet.add(student.name);
            uniqueStudents.push(student);
        }
    });

    let studentNames = uniqueStudents.map(s => s.name);
    let studentGrades = uniqueStudents.map(s => s.grade);

    const studentIds = ["studentB", "studentC", "studentD", "studentE"];
    studentIds.forEach((id, index) => {
        let element = document.getElementById(id);
        if (element) element.textContent = studentNames[index] || "N/A";
    });

    let gradeElement = document.getElementById("student-grades");
    if (gradeElement) {
        gradeElement.innerHTML = studentNames.map((name, index) => 
            `${name}: ${studentGrades[index] || "N/A"}%`
        ).join(" &nbsp;&nbsp; ");
    }
    
});



    