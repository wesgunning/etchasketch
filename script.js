
// Create 16x16 grid of squares

const container = document.querySelector('#container');
for (i = 0; i < 4; i++) {
    const div = document.createElement('div');
    div.classList.add('boxes');
    container.appendChild(div);
}