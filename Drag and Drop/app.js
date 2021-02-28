// DOM elements
const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

// Fill listener
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for (const empty of empties) {
   empty.addEventListener('dragover', dragOver);
   empty.addEventListener('dragenter', dragEnter);
   empty.addEventListener('dragleave', dragLeave);
   empty.addEventListener('drop', dragDrop);
}

// Drag functions
function dragStart() {
   // Add class hold
   this.className += ' hold';
   // Set fill invisible
   setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
   this.className = 'fill';
}

function dragOver(e) {
   e.preventDefault();
}

function dragEnter(e) {
   e.preventDefault();
   this.className += ' hovered';
}

function dragLeave() {
   this.className = 'empty';
}

function dragDrop() {
   this.className = 'empty';
   // Add the filling
   this.append(fill);
}