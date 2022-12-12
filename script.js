
// Create 16x16 grid of squares

const container = document.querySelector('#container');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
const n = 16;
for (i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for (j = 0; j < n; j++) {
        const div = document.createElement('div');
        div.classList.add('boxes');
        row.appendChild(div);
    }
}