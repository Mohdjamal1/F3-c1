let username = document.getElementById('name');
let profession = document.getElementById('Profession');
let age = document.getElementById('age');
let addButton = document.getElementById('add-btn');
let error = document.getElementById('err');
let footer = document.querySelector('#footer');
let userArray = [];
let count = 0;
addButton.addEventListener('click', () => {
    if (username.value === "" || profession.value === "" || age.value === "") {
        error.innerText = "Error : Please Make sure All the fields are filled before adding in an employee !";
        error.className = 'error-msg';
        return;
    }
    else {
        error.innerText = "Success : Employee Added!";
        error.className = 'success-msg';
    }
    count = userArray.length + 1;
    let obj = {
        id: count,
        name: `${username.value}`,
        profession: `${profession.value}`,
        age: age.value
    }
    userArray.push(obj);
    console.log(userArray);
    addEmployee();
});
function addEmployee() {

    footer.innerHTML = '';
    userArray.forEach((emp) => {
        let div = document.createElement('div');
        let button = document.createElement('button');
        button.id = "delete-btn";
        button.innerText = "Delete User";
        div.className = 'Add-emp';
        div.innerHTML = `
        <div class="user-info">
        <span>${emp.id}</span>
        <span>Name: ${emp.name}</span>
        <span>Profession: ${emp.profession}</span>
        <span>Age: ${emp.age}</span>
        </div>
        `;
        div.append(button);
        footer.append(div);
        button.addEventListener('click', () => deleteEmployee(emp.id));
    });
    document.getElementById('name').value = "";
    document.getElementById('Profession').value = "";
    document.getElementById('age').value = "";
    check();
}

function check() {
    let span = document.createElement('span');
    if (userArray.length == 0) {
        span.innerText = "You have 0 Employees."
        span.className = 'msg';
        footer.appendChild(span);
    }
}

function deleteEmployee(id) {
    // console.log(id);
    userArray = userArray.filter(employe => employe.id != id);
    // console.log(employees);
    addEmployee();
}
check();



