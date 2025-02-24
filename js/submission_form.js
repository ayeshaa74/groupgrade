document.addEventListener("DOMContentLoaded", function () {
    const students = [
        { id: "100213", name: "Sam White" },
        { id: "100214", name: "Ben Smith" },
        { id: "100215", name: "Emma Johnson" },
        { id: "100216", name: "Olivia Brown" },
        { id: "100217", name: "Michael Lee" }
    ];

    const searchInputs = document.querySelectorAll(".studentSearch");

    searchInputs.forEach(input => {
        input.addEventListener("input", function () {
            const studentList = this.nextElementSibling;
            const query = this.value.toLowerCase();
            studentList.innerHTML = ""; 

            if (query.length > 0) {
                const filteredStudents = students.filter(student =>
                    student.id.includes(query) || student.name.toLowerCase().includes(query)
                );

                if (filteredStudents.length > 0) {
                    studentList.style.display = "block"; 
                    filteredStudents.forEach(student => {
                        const listItem = document.createElement("li");
                        listItem.textContent = `${student.id} - ${student.name}`;
                        listItem.addEventListener("click", () => {
                            input.value = `${student.id} - ${student.name}`;
                            studentList.style.display = "none"; 
                        });
                        studentList.appendChild(listItem);
                    });
                } else {
                    studentList.style.display = "none"; 
                }
            } else {
                studentList.style.display = "none"; 
            }
        });
    });

    document.addEventListener("click", function (event) {
        searchInputs.forEach(input => {
            if (!input.contains(event.target) && !input.nextElementSibling.contains(event.target)) {
                input.nextElementSibling.style.display = "none";
            }
        });
    });

    const userBtn = document.getElementById("user-btn");
    const dropdown = document.getElementById("dropdown-menu");

    if (userBtn && dropdown) {
        userBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdown.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if (!userBtn.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });
    } else {
        console.error("❌ ERROR: Missing elements in the DOM!");
    }
});
