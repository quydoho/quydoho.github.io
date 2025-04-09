function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (second / 60) * 360 - 90;
    const minuteDeg = (minute / 60) * 360 + (second/60) * 6 - 90;
    const hourDeg = (hours % 12 / 12) * 360 + (minute/60) * 30 - 90;

    document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(updateClock, 1000);
updateClock();