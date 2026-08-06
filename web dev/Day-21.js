let students = [];

document.getElementById("addBtn").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let marks1 = Number(document.getElementById("marks1").value);
    let marks2 = Number(document.getElementById("marks2").value);
    let marks3 = Number(document.getElementById("marks3").value);

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    let average = (marks1 + marks2 + marks3) / 3;

    let student = {
        name: name,
        average: average.toFixed(2),
        grade: getGrade(average)
    };

    students.push(student);
    displayStudents();
    clearInputs();
});

function getGrade(average) {
    if (average >= 80) return "A";
    else if (average >= 60) return "B";
    else if (average >= 40) return "C";
    else return "F";
}

function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = students[i].name + " — Average: " + students[i].average + " — Grade: " + students[i].grade +
            ' <button onclick="deleteStudent(' + i + ')">Delete</button>';
        list.appendChild(li);
    }
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("marks1").value = "";
    document.getElementById("marks2").value = "";
    document.getElementById("marks3").value = "";
}