// code JS
function submitData() {
    let nameTag = document.getElementById('name');
    localStorage.name = nameTag.value;

    let ageTag = document.getElementById('age');
    localStorage.age = ageTag.value;

    let emailTag = document.getElementById('email');
    localStorage.email = emailTag.value;
}


function showData(){
    let name = localStorage.getItem("name");
    let age = localStorage.getItem("age");
    let email = localStorage.getItem("email");

    const tableData = document.getElementById("data")
    tableData.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${email}</td>
        </tr>
    `
}


