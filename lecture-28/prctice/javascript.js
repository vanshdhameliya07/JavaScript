let user = [localStorage.getItem(`user`) ? JSON.parse(localStorage.getItem(`user`)) : []]
let viewrecord = () => {
    let tbl = ``;
    user.map((val, ind) => {
        tbl += `
              <tr>
                 <td>${val.id}</td>
                 <td>${val.name}</td>
                 <td>${val.phone}</td>
                
              </tr>
        `
    })

}
let save = () => {
    let name = document.getElementById(`name`).val;
    let phone = document.getElementById(`phone`).val;

    let obj = {
        id: Date.now(),
        name: name,
        phone: phone,

    }
    console.log(obj);
    localStorage.setItem(`user`, JSON.stringify();
    )
}

