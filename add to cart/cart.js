const cart = localStorage.getItem(`cart`) ? JSON.parse(localStorage.getItem(`cart`)) : [];

const viewcart = () => {

    let tbl = ``;
    cart.map((val, i) => {
        tbl += `
        <tr>
        
        <td>${val.id}</td>
        <td>${val.name}</td>
        <td><img src="${val.img}" width="100" height="150" style="object-fit:cover" ></td>
        <td>${val.price}</td>
        <td>${val.qty}</td>
        
        </button></td>
        </tr>
        
        `

    })
    document.getElementById(`addcart`).innerHTML = tbl;
}
viewcart()