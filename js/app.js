const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let day = 0, hour = 0, min = 0, sec = 0;

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => timeFunc(), 1000);
    // Ushbu qismda  vaqt qancha kam berilsa shun ko'p qor parcha hosil bo'ladi
    setInterval(() => createSnow(), 50);
});

const timeFunc = () => {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1, 0, 0, 0);
    const diff = newYear - today;

    sec = Math.floor((diff / 1000) % 60);
    min = Math.floor((diff / 1000 / 60) % 60);
    hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    day = Math.floor(diff / (1000 * 60 * 60 * 24));

    days.textContent = day;
    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
}

const createSnow = () => {
    const snow = document.createElement("i");
    snow.classList.add("fas", "fa-snowflake");
    // snow.classList.add("fa-snowflake");
    // snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.left = Math.random() * document.body.clientWidth + "px";
    snow.style.fontSize = (Math.random * 10 + 10) + "px";
    snow.style.opacity = Math.random();
    snow.style.animationDuration = Math.random() * 3 + 2 + "s";
    console.log(snow)

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 5000)
}