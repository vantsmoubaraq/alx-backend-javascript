
const std_one = {firstName: "John",
                          lastName: "Doe",
                          age: 20,
                         location: "Birmingham",
                        }

const std_two = {firstName: "Munib",
                        lastName: "Hamza",
                        age: 24,
                       location: "Riyadh",
                      }

const studentsList = [std_one, std_two];



const table = document.getElementById("students");

for (const stud of studentsList){
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.textContent = stud.firstName;
    row.appendChild(name);
    
    const loc = document.createElement("td");
    loc.textContent = stud.location;
    row.appendChild(loc);
    table.querySelector("tbody").appendChild(row);
}

