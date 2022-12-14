// Radio buttons
var blackRadio = document.getElementById('blackRadio');
var colorRadio = document.getElementById('colorRadio');
var shadedRadio = document.getElementById('shadedRadio');

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
        // Assign white to empty div
        let saturation = 100;
        div.style.backgroundColor = 'hsl(0, 0%, ' + (saturation) + '%';
        // Listen for mouse hover over individual boxes
        div.addEventListener("mouseover", function (e) {
            if (blackRadio.checked == true) {
                e.target.style.backgroundColor = 'black';
            }
            else if (colorRadio.checked == true) {
                e.target.style.backgroundColor = randColor();
            }
            else if (shadedRadio.checked == true) {
                e.target.style.backgroundColor = 'hsl(0, 0%, ' + (saturation - 10) + '%';
                saturation -= 10;
            }
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
                if (blackRadio.checked == true) {
                    e.target.style.backgroundColor = 'black';
                }
                else if (colorRadio.checked == true) {
                    e.target.style.backgroundColor = randColor();
                }
            });
        }
    }
}

function boxSize() {
   let m = n; // Storing value of current box size
   n = prompt("How many squares per side would you like? (Maximum of 100.)");
   if (n != null && n < 1) {
    alert("Please enter a positive number.");
    n = m; // Prevents null bug
    boxSize();
    return 0;
   }
   if (n !=null && n > 100) {
    let n = 100;
   }
   if (n == null) {
    n = m; // Return n to previous value to prevent breaking reset button
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