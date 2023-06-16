var first = {
    firstName: "Munib",
    lastName: "Shiraz",
    age: 20,
    location: "Riyadh",
};
var second = {
    firstName: "Alex",
    lastName: "Amani",
    age: 24,
    location: "Johanesburg",
};
var studentsList = [first, second];
var table = document.createElement("table");
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var stud = studentsList_1[_i];
    var row = document.createElement("tr");
    var name_1 = document.createElement("td");
    var loc = document.createElement("td");
    name_1.textContent = stud.firstName;
    loc.textContent = stud.location;
    row.appendChild(name_1);
    row.appendChild(loc);
    table.appendChild(row);
}
document.appendChild(table);
