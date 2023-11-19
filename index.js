

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    
    let dobInput = document.getElementById('dob');
    let dob = new Date(dobInput.value);
    let now = new Date();
    let lowDate = new Date();
    lowDate.setFullYear(now.getFullYear() - 55);
    let highDate = new Date();
    highDate.setFullYear(now.getFullYear() - 18);

    if (dob > highdate || dob < lowDate) {
        alert('Date of birth must have to be between 18 and 55 years.');
        return;
    }


    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        dob: document.getElementById('dob').value,
        terms: document.getElementById('terms').checked
    };

    let entries = JSON.parse(localStorage.getItem('entries')) || [];
    entries.unshift(formData);
    localStorage.setItem('entries', JSON.stringify(entries));

 
    updateTable();
});

function updateTable() {
   
    let tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    let entries = JSON.parse(localStorage.getItem('entries')) || [];

   
    tableBody.innerHTML = '';

    
    entries.forEach(entry => {
        let row = tableBody.insertRow();
        Object.values(entry).forEach(value => {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(value));
        });
    });
}

window.addEventListener('load', updateTable);
