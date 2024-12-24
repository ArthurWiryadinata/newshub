document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
  

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const terms = document.getElementById("terms").checked;
  

    if (!name) {
      alert("Please enter your full name.");
      return;
    }
    if (!username) {
      alert("Please enter your username.");
      return;
    }
    if (!password) {
      alert("Please enter your password.");
      return;
    }
    if (!terms) {
      alert("You must agree to the terms and conditions.");
      return;
    }
  

    const users = JSON.parse(localStorage.getItem("users")) || [];
  

    if (users.some(user => user.username === username)) {
      alert("Username is already taken. Please choose a different one.");
      return;
    }
  

    users.push({ name, username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful. You can now log in.");
    window.location.href = "../loginPage/loginPage.html";
  });
  