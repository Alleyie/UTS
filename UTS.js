document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header');
    const sparkleCount = 25;

    for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    header.appendChild(sparkle);
    }
});

document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    });
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function openPopup(id) {
    document.getElementById(id).style.display = 'flex';

}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    
}

const tombolDetail = document.querySelectorAll(".detail-btn");
tombolDetail.forEach((btn) => {
    btn.addEventListener("click", function () {
        const detail = this.nextElementSibling;
        detail.style.display = detail.style.display === "block" ? "none" : "block";
    })
});

function showMessage() {
    const msg = document.getElementById("success-message");
    const form = document.getElementById("registration-form");
    msg.style.display = "block";
    msg.style.animation = "fadeIn 1.2s ease";
    form.reset();
    
}

function updateClock() {
    const now = new Date();
    let h = now.getHours().toString().padStart(2,'0');
    let m = now.getMinutes().toString().padStart(2,'0');
    let s = now.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerText = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();


