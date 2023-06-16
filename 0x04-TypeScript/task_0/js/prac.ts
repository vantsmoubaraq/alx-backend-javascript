interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const first: Student = {
    firstName: "Munib",
    lastName: "Shiraz",
    age: 20,
    location: "Riyadh",
};

const second: Student = {
    firstName: "Alex",
    lastName:"Amani",
    age: 24,
    location: "Johanesburg",
};

const studentsList: Student[] = [first, second];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

for (const stud of studentsList){
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const loc = document.createElement("td");

    name.textContent = stud.firstName;
    loc.textContent = stud.location;

    row.appendChild(name);
    row.appendChild(loc);
    tbody.appendChild(row);
}

document.body.appendChild(table);


