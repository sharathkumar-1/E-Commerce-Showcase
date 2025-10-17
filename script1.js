const products = [
  {id:1, title:"Sneakers", price:59.99, img:"https://picsum.photos/seed/p1/300/200"},
  {id:2, title:"Backpack", price:89.00, img:"https://picsum.photos/seed/p2/300/200"},
  {id:3, title:"Headphones", price:129.5, img:"https://picsum.photos/seed/p3/300/200"}
];

const grid = document.getElementById("grid");
let cart = {};

products.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <h3>${p.title}</h3>
    <div class="price">$${p.price}</div>
    <button class="add">Add to Cart</button>
  `;
  card.querySelector('button').onclick = () => addToCart(p.id);
  grid.appendChild(card);
});

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  alert(products.find(x => x.id === id).title + " added! (x" + cart[id] + ")");
}
