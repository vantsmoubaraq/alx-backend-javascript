var std_three = { firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Birmingham",
};
var std_four = { firstName: "Munib",
    lastName: "Hamza",
    age: 24,
    location: "Riyadh",
};
var studentList = [std_three, std_four];
console.log(studentList);
var table2 = document.getElementById("students");
for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
    var stud = studentList_1[_i];
    var row = document.createElement("tr");
    var name_1 = document.createElement("td");
    name_1.textContent = stud.firstName;
    row.appendChild(name_1);
    var loc = document.createElement("td");
    loc.textContent = stud.location;
    row.appendChild(loc);
    table2.querySelector("tbody").appendChild(row);
}
