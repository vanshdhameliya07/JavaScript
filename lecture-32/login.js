let login = () => {
    let email = document.getElementById(`email`).value;
    let password = document.getElementById(`password`).value;

    let record = localStorage.getItem(`record`) ? JSON.parse(localStorage.getItem(`record`)) : []

    let check = record.filter((val) => {
        return val.email == email && val.password == password;
    })

    if (check == 0) {
        alert(`invalid email and password please check`)

    }
    else {
        localStorage.setItem(`check`, JSON.stringify(check[0]));
        window.location.href = `./dashboard.html`;

    }

}