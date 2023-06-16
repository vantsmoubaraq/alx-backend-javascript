interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const std_three: Student = {firstName: "John",
                          lastName: "Doe",
                          age: 20,
                         location: "Birmingham",
                        };

const std_four: Student = {firstName: "Munib",
                        lastName: "Hamza",
                        age: 24,
                       location: "Riyadh",
                      };

const studentList = [std_three, std_four];

console.log(studentList);

const table2 = document.getElementById("students");

for (const stud of studentList){
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.textContent = stud.firstName;
    row.appendChild(name);
    
    const loc = document.createElement("td");
    loc.textContent = stud.location;
    row.appendChild(loc);
    table2.querySelector("tbody").appendChild(row);
}

