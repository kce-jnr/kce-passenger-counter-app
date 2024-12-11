// Create the save feature 

let x = document.getElementById('count-el')
let y = document.getElementById('save-el')

let count = 0

function increment() {
     count += 1
     x.textContent = count 
 }
increment()

// create a save function 

function save() {
    let countStr = count + " - "; 
    y.textContent += countStr;
    x.textContent = 0
    count = 0
};


