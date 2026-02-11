function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (username === "" || password === "") {
    msg.textContent = "All fields are required";
    return;
  }

  if (username === "admin" && password === "1234") {
    msg.style.color = "green";
    msg.textContent = "Login successful!";
  } else {
    msg.style.color = "red";
    msg.textContent = "Invalid credentials";
  }
}
