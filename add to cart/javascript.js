let product = [
     {
          id: 1,
          name: "IWC Schaffhausen",
          img: "https://img.tatacliq.com/images/i19//658Wx734H/MP000000023041620_658Wx734H_202407262021321.jpeg",
          qty: 5,
          price: 10.99
     },
     {
          id: 2,
          name: "IWC Schaffhausen",
          img: "https://img.tatacliq.com/images/i18//658Wx734H/MP000000016577285_658Wx734H_202406301656021.jpeg",
          qty: 5,
          price: 9.99
     },
     {
          id: 3,
          name: "IWC Schaffhausen",
          img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSpast0oMZKd_cFBy3xgrejOXO2isNZw_sDI0jdaNJf9dM-m-8HndWx_QCC2Q5yJqZuodArG8daxeoS8TO-c6dGHOBFaczI1zzJftW8E-tNcrvi3nxA8zRvC6aAzW6OtHOfaY1aLg&usqp=CAc",
          qty: 5,
          price: 5
     },
     {
          id: 4,
          name: "Astronomia Tourbillon Regulator",
          img: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/j/a/jacob-co-astronomia-regulator-ar200-40-aa-ac-abala-large.jpg",
          qty: 5,
          price: 5555
     }

];



let tbl = ``;
product.map((val) => {
     tbl += `
         <div class="card col-md-3">
             <img src="${val.img}" style="object-fit:contain; height:200px;" class="card-img-top" alt="...">
             <div class="card-body">
              <p class="card-text">wath name: ${val.name}</p>
                 <p class="card-text">Rs.${val.price}</p>
                 <p class="card-text">Price: $${val.price}</p>
                 <p class="card-text">qty: $${val.qty++}</p>
                
                 <button onclick="addcart(${val.id})">Add to Cart</button>
             </div>
         </div>
     `;
});
document.getElementById("product").innerHTML = tbl;


let cart = [];
let addcart = ((id) => {
     product.map((val) => {
          if (val.id == id) {
               cart.push(val);
               alert(`Product ${id} Added to Cart`);
          }
     })
     localStorage.setItem('cart', JSON.stringify(cart))
})


