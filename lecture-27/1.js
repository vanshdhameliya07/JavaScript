let user = [
    { id: 1, name: `yash`, phone: 1234 },
    { id: 2, name: `vin`, phone: 1234567 },
    { id: 3, name: `ansh`, phone: 1234556 },
];

let viewrecord = () => {
    let tbl = ``;
    user.map((val, index) => {
        tbl += `<tr>
               <td>${val.id}</td>
               <td>${val.name}</td>
               <td>${val.phone}</td>
        </tr>
        `;
        document.getElementById(`record`).innerHTML = tbl
    })
}
viewrecord()
let savedata = () => {
    let name = document.getElementById(`name`).value;
    let phone = document.getElementById(`phone`).value;

    let obj = {
        id: Date.now(),
        name: name,
        phone: phone,
    }
    user.push(obj)
    alert(`register`);
    document.getElementById(`name`).value = ``;
    document.getElementById(`phone`).value = ``;
    viewrecord()
}