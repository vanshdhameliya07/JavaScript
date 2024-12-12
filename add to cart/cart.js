var cart = [];

const viewcart = () => {
    cart = localStorage.getItem(`cart`) ? JSON.parse(localStorage.getItem(`cart`)) : [];

    let tbl = ``;
    cart.map((val, i) => {

        let sum = 0;
        sum = sum + val.qty * val.price
        
        tbl += `
        <tr>

        <td>${val.id}</td>
        <td>${val.name}</td>
        <td><img src="${val.img}" width="100" height="150" style="object-fit:cover" ></td>
        <td>${val.price}</td>
         <td><input type="number" id="qty${val.id}" value="${val.qty}" min="1" onclick="addupdate(${val.id})"></td>
        <td><button onclick="deleteuser(${val.id})">Remove</button></td>
        <td>
        ${val.price * val.qty}
        </td>
       
        
        </tr>
        `
    })
    document.getElementById(`addcart`).innerHTML = tbl;
}
viewcart();

let deleteuser = (id) => {
    let d = cart.filter((val) => {
        return val.id != id
    });
    localStorage.setItem(`cart`, JSON.stringify(d));
    alert(`Record deleted`);
    console.log(d)
    viewcart();
};

const addupdate = (id) => {
    const qty = document.getElementById(`qty${id}`).value;
    let up = cart.map((val) => {
        if (val.id == id) {
            val.qty = qty;
        }
        return val;
    });
    console.log(up)
    localStorage.setItem(`cart`, JSON.stringify(up));
    alert(`add to cart`);
    viewcart();

};
viewcart();
