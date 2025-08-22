const decreasebtn = document.getElementById('decrease');
const resetbtn = document.getElementById('reset');
const increasebtn = document.getElementById('increase');
const counter = document.getElementById('counter');
let count = 0;

increasebtn.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});

decreasebtn.addEventListener('click', () => {
    count--;
    counter.innerText = count;
});

resetbtn.addEventListener('click', () => {
    count = 0;
    counter.innerText = count;
});
