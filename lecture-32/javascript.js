let record = [];

let viewrecord = () => {
    record = localStorage.getItem(`record`) ? JSON.parse(localStorage.getItem(`record`)) : [];
    let tbl = ``;
    record.map((val) => {
        tbl += `
               <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.phone}</td>
                 <td>
                <button onclick="deleteuser(${val.id})" value="delete">delete</button>
                <button onclick="edituser(${val.id})" value="edit">edit</button>
                </td>
               </tr>
        `
    })
    document.getElementById(`record`).innerHTML = tbl

}
let savedata = () => {
    let name = document.getElementById(`name`).value;
    let phone = document.getElementById(`phone`).value;

    let obj = {
        id: Date.now(),
        name: name,
        phone: phone
    }

    record.push(obj);
    localStorage.setItem('record', JSON.stringify(record))
    alert(`your form successfully submited`);
    viewrecord();
    document.getElementById(`name`).value = ``;
    document.getElementById(`phone`).value = ``;
}


let deleteuser = (id) => {
    let d = record.filter((val) => {
        return val.id != id;
    });
    localStorage.setItem(`record`, JSON.stringify(d));
    alert(`record delete`);
    console.log(d)
    viewrecord()
}
let edituser = (id) => {

    document.getElementById(`add`).style.display = `none`;
    document.getElementById(`edit`).style.display = `block`;

    let single = record.find((val) => {
        return val.id == id
    })
    document.getElementById(`name`).value = single.name;
    document.getElementById(`phone`).value = single.phone;
    document.getElementById(`id`).value = id;
}

let updatedata = () => {
    let id = document.getElementById(`id`).value;
    let name = document.getElementById(`name`).value;
    let phone = document.getElementById(`phone`).value;

    let up = record.map((val) => {
        if (val.id == id) {
            val.name = name;
            val.phone = phone;
        }
        return val
    })
    localStorage.setItem(`record`, JSON.stringify(up));
    alert(`record updated`);
    viewrecord();
    document.getElementById(`add`).style.display = `block`;
    document.getElementById(`edit`).style.display = `none`;
}