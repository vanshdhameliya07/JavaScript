let check = JSON.parse(localStorage.getItem('checkuser'))

if (!check) {
    window.location.href = "login.html"
    alert("Please Login First")
}

document.getElementById('name').innerHTML = `Name : ${check.name}`
document.getElementById('email').innerHTML = `Email : ${check.email}`

let logoutuser = () => {

    localStorage.removeItem('checkuser')
    alert("log out successfully")
    window.location.href = 'Login.html'




}

