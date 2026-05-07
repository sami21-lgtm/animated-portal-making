
const config = {
    name: "Sami",
    pass: "1234"
};


function validate() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const err = document.getElementById('error');

    if (u === config.name && p === config.pass) {
        document.getElementById('loginCard').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        document.getElementById('greet').innerText = "Hello, " + u;
    } else {
        err.style.display = 'block';
    }
}

// 3D Mouse Tilt Effect
const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

container.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    
    cards.forEach(card => {
        if (!card.classList.contains('hidden')) {
            card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        }
    });
});

container.addEventListener('mouseleave', () => {
    cards.forEach(card => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = "all 0.5s ease";
    });
});

container.addEventListener('mouseenter', () => {
    cards.forEach(card => {
        card.style.transition = "none";
    });
});
