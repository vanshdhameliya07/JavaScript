let record = localStorage.getItem(`user`) ? JSON.parse(localStorage.getItem(`user`)) : [];

var viewrecord = () => {
    let tbl = ``;
    record.map((val) => {
        tbl += `
            <tr>
              <td>${val.id}</td>
              <td>${val.name}</td>
              <td>${val.phone}</td>
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
    viewRecord();
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';

}
viewrecord()