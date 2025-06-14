let loginuser = () => {
    let user = JSON.parse(localStorage.getItem('user')) || []

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let checkuser = user.find((val) => {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        if (val.email == email && val.password == password) {
            window.location.href = "dashboard.html"
            alert("Login Susccessfully")
            return email && password
            s
        } else {
            return false
        }
    })
    localStorage.setItem('checkuser', JSON.stringify(checkuser))




}