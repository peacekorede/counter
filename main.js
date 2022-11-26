

let count = 0

function increment() {
    count = count + 1
    countEl.innerHTML = count
}

let countEl = document.getElementById("count_el")


function save() {
     console.log(count)    
}
    
    
    