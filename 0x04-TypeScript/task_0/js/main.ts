interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Kennedy',
  lastName: 'Smith',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Mary',
  lastName: 'James',
  age: 22,
  location: 'Los Angeles',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  // Create table header
  const headerRow = document.createElement('tr');
  const headers = ['First Name', 'Location'];
  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  tableBody.appendChild(headerRow);

  // Populate the table with rows from studentsList
  studentsList.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  });

  // Append the table body to the table and add it to the document body
  table.appendChild(tableBody);
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable();
