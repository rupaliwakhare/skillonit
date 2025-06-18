let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let product_name = document.getElementById("name");
let category = document.getElementById("catagory"); 
let brand = document.getElementById("brand");
let price = document.getElementById("price");
let delivered = document.getElementById("deliveredBy");

let product_arr = [];

form.addEventListener("submit", getData);

function getData(event) {
  event.preventDefault();

  let data = {
    name: product_name.value,
    catagory: category.value,
    brand: brand.value,
    price: price.value,
    delivered: delivered.value,
  };

  product_arr.push(data);
  display(product_arr); 
}

function display(data) {
  tbody.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.innerText = data[i].name; 

    let col2 = document.createElement("td");
    col2.innerText = data[i].catagory;

    let col3 = document.createElement("td");
    col3.innerText = data[i].brand;

    let col4 = document.createElement("td");
    col4.innerText = data[i].price;

    let col5 = document.createElement("td");
    col5.innerText = data[i].delivered;

    let col6 = document.createElement("td");
    col6.innerText = "price segment";

    let col7 = document.createElement("td");
    col7.addEventListener("click",deleteinfo);
    col7.innerText = "Delete";
    

    row.append(col1, col2, col3, col4, col5, col6, col7);
    tbody.append(row);
  }
}

function deleteinfo() {
  event.target.parentNode.remove()
  
}

  

