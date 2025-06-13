document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
      errorMessage.textContent = "Both fields are required!";
    } else if (username !== "ruaa" || password !== "ruaa@123") {
      errorMessage.textContent = "Invalid username or password!";
    } else {
      errorMessage.textContent = "";
      alert("Login successful!");


    }
    
    
   
       
    
  });


