document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchingUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!matchingUser) {
    alert("Invalid username or password. Please try again.");
    return;
  }
  
  localStorage.setItem("currentUser", JSON.stringify(matchingUser));


  alert(`Welcome back, ${matchingUser.name}!`);
  window.location.href = "../homePage/homePage.html";

  
});
