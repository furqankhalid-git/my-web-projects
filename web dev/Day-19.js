document.getElementById("calculateBtn").addEventListener("click", function() 
{
    let name = document.getElementById("name").value;
    let marks1 = Number(document.getElementById("marks1").value);
    let marks2 = Number(document.getElementById("marks2").value);
    let marks3 = Number(document.getElementById("marks3").value);

    let student = {
        name: name,
        marks: [marks1, marks2, marks3],
        average: (marks1 + marks2 + marks3) / 3,
        getGrade: function() {
            if (this.average >= 80) return "A";
            else if (this.average >= 60) return "B";
            else if (this.average >= 40) return "C";
            else return "F";
        }
    };

    document.getElementById("result").innerHTML = 
        "Student: " + student.name + "<br>" +
        "Average: " + student.average.toFixed(2) + "<br>" +
        "Grade: " + student.getGrade();
});