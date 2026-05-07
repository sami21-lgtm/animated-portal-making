document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;

    const validUser = "Admin";
    const validPass = "1234";

    if (u === validUser && p === validPass) {
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('profileSection').classList.remove('hidden');
        document.getElementById('displayName').innerText = "MD. Emtiaz Hossain Sami";
    } else {
        alert("Invalid Username or Password");
    }
});
