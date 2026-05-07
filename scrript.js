document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    const myName = "Admin"; 
    const myPass = "1234";

    if (username === myName && password === myPass) {
        alert("Login Successful! Welcome " + username);
    } else {
        alert("Invalid Details. Please try again.");
    }
});
