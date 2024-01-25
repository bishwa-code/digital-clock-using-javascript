let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

setInterval(() => {
    let currentTime = new Date();

    hour.innerHTML = ((currentTime.getHours() < 10) ? "0":"") + currentTime.getHours();
    minute.innerHTML = ((currentTime.getMinutes() < 10) ? "0":"") + currentTime.getMinutes();
    second.innerHTML = ((currentTime.getSeconds() < 10) ? "0":"") + currentTime.getSeconds();

    // below code would also be good, but better to use ternary operator for short code
    // if (currentTime.getHours() < 10) {
    //     hour.innerText = `0${currentTime.getHours()}`;
    // }
    // if (currentTime.getMinutes() < 10) {
    //     minute.innerText = `0${currentTime.getMinutes()}`;
    // }
    // if (currentTime.getSeconds() < 10) {
    //     second.innerText = `0${currentTime.getSeconds()}`;
    // }
}, 1000);
