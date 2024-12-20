let product = [
     {
         id: 1,
         name: "mobile ohone",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRKR2ZLyPQFZn2phLLaCzkrH1AGOERA5TzA&s",
         qty:1,
         price: 100.00
 
     },
     {
         id: 2,
         name: "note book",
         img: "https://www.techtarget.com/rms/onlineimages/hp_elitebook_mobile.jpg",
         qty:1,
         price: 299.00
 
     },
     {
         id: 3,
         name: "mobile lite",
         img: "https://5.imimg.com/data5/PX/WQ/MN/SELLER-38271709/mobile.png",
         qty:1,
         price: 125.00,
 
     },
     {
         id: 3,
         name: "wrist watch",
         img: "https://img.tatacliq.com/images/i19//658Wx734H/MP000000023041620_658Wx734H_202407262021321.jpeg",
         qty:1,
         price: 85.00,
 
     }
 ]


let tbl = ``;
product.map((val) => {
     tbl += `
         <div class="card col-md-3">
             <img src="${val.img}" style="object-fit:contain; height:200px;" class="card-img-top" alt="...">
             <div class="card-body">
              <p class="card-text">wath name: ${val.name}</p>
                 <p class="card-text">Rs.${val.rupee}</p>
                 <p class="card-text">qty: ${val.qty}</p>
                 <p class="card-text">Price: $${val.price}</p>
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


