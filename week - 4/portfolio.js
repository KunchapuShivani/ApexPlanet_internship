// ================== To-Do App ==================
const list = document.getElementById("list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
  list.innerHTML = "";
  tasks.forEach((t,i)=>{
    list.innerHTML += `<li>${t} <button onclick="removeTask(${i})">❌</button></li>`;
  });
}
function addTask(){
  const task = document.getElementById("task").value;
  if(task){
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    document.getElementById("task").value = "";
  }
}
function removeTask(i){
  tasks.splice(i,1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
renderTasks();

// ================== Product Page ==================
const products = [
  {name:"Phone", category:"electronics", price:20000, rating:4.5},
  {name:"Laptop", category:"electronics", price:60000, rating:4.7},
  {name:"Shirt", category:"fashion", price:1200, rating:4.2},
  {name:"Shoes", category:"fashion", price:2500, rating:4.0}
];

function renderProducts(){
  let cat = document.getElementById("category").value;
  let sort = document.getElementById("sort").value;
  let items = [...products];

  if(cat!="all") items = items.filter(p=>p.category==cat);
  if(sort=="price") items.sort((a,b)=>a.price-b.price);
  if(sort=="rating") items.sort((a,b)=>b.rating-a.rating);

  document.getElementById("product-list").innerHTML = items.map(p=>
    `<div class="card">
      <h3>${p.name}</h3>
      <p>💰 Price: ₹${p.price}</p>
      <p>⭐ Rating: ${p.rating}</p>
    </div>`
  ).join("");
}
renderProducts();
