let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
form.addEventListener("submit", getData);

let todo_arr = JSON.parse(localStorage.getItem("array")) || [];

display(docter_arr);

function getData() {
  event.preventDefault();

  let name = form.name.value;
  let id = form.id.value;
  let specialization = form.specialization.value;
  let experience = form.experience.value;
  let email = form.email.value;
  let Mo = form.Mo.value;

  let doc_obj ={
    Name,
    Id,
    Specialization,
    Experience,
    Email,
    mo,
    role,
  };

  docter.push(doc_obj);
  localStorage.setItem("array", JSON.stringify(docter_arr));
//   console.log(docter_arr);

  display(docter_arr);
}

function display(data) {
  tbody.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = data[i].name;
    let col2 = document.createElement("td");
    // if (data[i]..toLowerCase() === "high") {
    //   col2.style.backgroundColor = "red";
    // } else if (data[i].priority.toLowerCase() === "low") {
    //   col2.style.backgroundColor = "green";
    // }

    col2.innerText = data[i].Id;
    let col3 = document.createElement("td");
    col3.innerText = data[i].specialization;
    let col4 = document.createElement("td");
    col4.innerText = data[i].email;
    let col5 = document.createElement("td");
    col5.innerText = data[i].mo;
    let col6 = document.createElement("td");
   if (experience>5) {
        Senior
   } else if(experience>=2 || experience<=5){
        Junior
   }
    col6.innerText = data[i].role;
    let col7 = document.createElement("td");
    col7.addEventListener("click",deletevalue);
    col7.innerText = "Delete";
    row.append(col1, col2, col3,col4,col4,col5,col6,col7);
    tbody.append(row);
  }
}

function deletevalue() {
  event.target.parentNode.remove();
}
