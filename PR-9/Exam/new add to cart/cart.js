var cart = [];

const viewcart = () => {
    cart = localStorage.getItem(`cart`) ? JSON.parse(localStorage.getItem(`cart`)) : [];

    let tbl = ``;
    cart.map((val, i) => {

        
        
        tbl += `
        <tr>

        <td>${val.id}</td>
        <td>${val.name}</td>
        <td><img src="${val.img}" width="100" height="150" style="object-fit:cover" ></td>
        <td>${val.price}</td>
         <td>${val.qty}</td>
        <td><button style="background-color:red;color:white;border:none" onclick="deleteuser(${val.id})">Remove</button></td>
       <td>${val.price}</td>
       
        
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


viewcart();
