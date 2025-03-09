let count = 0;
let countEl = document.getElementById('count-el');

function increment() {
    //increase count
    count += 1;

    //display count
    countEl.textContent = count;
}

function decrement() {
    //Reduce count
    count -= 1;

    //display the count
    countEl.textContent = count;
}

function save() {
    //Save new entries
    document.getElementById('change-text').textContent += count + ' - '; 

    //Reset counter to 0
    countEl.textContent = 0;
    count = 0;
}