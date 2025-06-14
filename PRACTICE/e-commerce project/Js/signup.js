let SignupUser = () => {

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpassword = document.getElementById('cpassword').value

    if (password == cpassword) {
        let user = JSON.parse(localStorage.getItem('user')) || []
        let obj = {
            id: Math.floor(Math.random() * 1000),
            name: name,
            email: email,
            password: password
        }
        user.push(obj)
        localStorage.setItem('user', JSON.stringify(user))
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('password').value = ""
        document.getElementById('cpassword').value = ""
        window.location.href = "Login.html"


    } else {
        alert("password not match")
    }

}