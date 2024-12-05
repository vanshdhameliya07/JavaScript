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