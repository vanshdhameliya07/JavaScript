let record = localStorage.getItem(`record`) ? JSON.parse(localStorage.getItem(`record`)) : [];

let register = () => {

    let name = document.getElementById(`name`).value;
    let email = document.getElementById(`email`).value;
    let password = document.getElementById(`password`).value;

    let obj = {
        id: Date.now(),
        name: name,
        email: email,
        password: password
    }
    console.log(record)
    record.push(obj);
    localStorage.setItem(`record`,JSON.stringify(record))
    alert(` user successfully register`)

}