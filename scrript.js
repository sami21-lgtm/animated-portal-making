
const validCredentials = {
    username: "admin",
    password: "1234"
};

function validateForm(event) {
  
    event.preventDefault();

    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const message = document.getElementById('message');

  
    if (u === validCredentials.username && p === validCredentials.password) {
        message.style.color = "#00e676"; // Green color
        message.innerText = "Login Successful!";
        
        // redirect to another page if needed
        // window.location.href = "welcome.html"; 
    } else {
        message.style.color = "#ff4d4d"; // Red color
        message.innerText = "Error: Invalid username or password.";
    }
}
