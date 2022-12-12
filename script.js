
// Create 16x16 grid of squares
const container = document.querySelector('#container');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
let n = 16;
for (i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for (j = 0; j < n; j++) {
        const div = document.createElement('div');
        div.classList.add('boxes');
        row.appendChild(div);
        // Listen for mouse hover over individual boxes
        div.addEventListener("mouseover", function (e) {
            e.target.style.background = 'blue';
        });
    }
}

// Box size button
const btn = document.querySelector('button');
btn.addEventListener("click", boxSize);

function removeGrid() {
    grid.innerHTML = '';
};

function rebuildGrid(n) {
    for (i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (j = 0; j < n; j++) {
            const div = document.createElement('div');
            div.classList.add('boxes');
            row.appendChild(div);
            // Listen for mouse hover over individual boxes
            div.addEventListener("mouseover", function (e) {
                e.target.style.background = 'blue';
            });
        }
    }
}

function boxSize() {
   let n = prompt("What size square would you like?");
   removeGrid();
   rebuildGrid(n);
};
