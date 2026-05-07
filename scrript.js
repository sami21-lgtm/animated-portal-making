const name = "Admin";
const pass = "1234";

function validate() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const err = document.getElementById('error');

    if (u === name && p === pass) {
        document.getElementById('loginCard').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        document.getElementById('greet').innerText = "Hello, " + u;
    } else {
        err.style.display = 'block';
    }
}

// Mobile Tilt Effect
document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    let x = (window.innerWidth / 2 - touch.pageX) / 15;
    let y = (window.innerHeight / 2 - touch.pageY) / 15;
    
    const activeCard = document.querySelector('.card:not(.hidden)');
    if(activeCard) {
        activeCard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
});

document.addEventListener('touchend', () => {
    const activeCard = document.querySelector('.card:not(.hidden)');
    if(activeCard) {
        activeCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
        activeCard.style.transition = "0.5s";
    }
});
