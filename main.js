let countEl = document.getElementById('count_el')
let total = document.getElementById('passengers')
let additional = document.getElementById('additional')

let btn = document.getElementById('increment_btn')


let input = document.getElementById('input')
let btn_2 = document.getElementById('btn_2')
let display = document.getElementById('display')


let todo = []
btn_2.addEventListener('click', () => {
    console.log(input.value)
    todo.push(input.value)
 display.innerHTML += input.value + '<br />'
input.value = ''
console.log(todo)
})

let arr = [1,3,4,5,6,6,7,78,]
arr.forEach((element) => {
  console.log(element)
})


// for( x=0; x < todo.length; x++){

// }

let count = 0
function increment() {
    count = count + 1
    countEl.innerHTML = count
}


let database = []

function save() {

let lastDbRecord = database[database.length - 1]
let previous = lastDbRecord?.numberOfPassenger ||  0
 const data = {
    numberOfPassenger: previous + count,
    time: new Date(),
    additionalPassengers: count
}
database.push(data)
total.innerHTML = data.numberOfPassenger
additional.innerHTML = data.additionalPassengers
count = 0
countEl.innerHTML = count

 console.log(database, `record of passengers as at ${new Date().getMinutes}`)   
}

