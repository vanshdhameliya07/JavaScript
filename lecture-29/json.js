
var viewrecord = () => {
    record = localStorage.getItem(`user`) ? JSON.parse(localStorage.getItem(`user`)) : [];

    console.log(record)
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
    document.getElementById(`record`).innerHTML = tbl;
};

let savedata = () => {
    let name = document.getElementById(`name`).value;
    let phone = document.getElementById(`phone`).value;

    let obj = {
        id: Date.now(),
        name: name,
        phone: phone,
    }
    record.push(obj);
    localStorage.setItem('user', JSON.stringify(record));
    alert('Form submitted successfully!');
    viewrecord();
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';

}
viewrecord();

const deleteuser = (deleteid) => {
    let d = record.filter((val) => {
        return val.id != deleteid;
    });
    localStorage.setItem('user', JSON.stringify(d));
    alert(`record delete`)
    console.log(d)
}