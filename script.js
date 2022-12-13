
// Create 16x16 grid of squares
const container = document.querySelector('#container');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
var n = 16;
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
            e.target.style.backgroundColor = 'black';
        });
    }
}

// Box size button
const btn = document.querySelector('#size');
btn.addEventListener("click", boxSize);

// Reset button
const reset = document.querySelector('#reset');
reset.addEventListener('click', boxClear);

// Various functions
function removeGrid() {
    grid.innerHTML = '';
}

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
                e.target.style.backgroundColor = randColor();
            });
        }
    }
}

function boxSize() {
   n = prompt("What size square would you like? (Maximum of 100 per side.)");
   if (n != null && n < 1) {
    alert("Please enter a positive number.");
    boxSize();
   }
   if (n !=null && n > 100) {
    let n = 100;
   }
   if (n == null) {
    return 0;
   }
   removeGrid();
   rebuildGrid(n);
}

function boxClear() {
    removeGrid();
    rebuildGrid(n);
}

function randNum() {
    let a = Math.floor(Math.random()*256);
    return a;
}

function randColor() {
    let color = 'rgb(' + randNum() + ',' + randNum() + ',' + randNum() + ')';
    return color;
}