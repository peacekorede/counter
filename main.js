let countEl = document.getElementById('count_el')
let total = document.getElementById('passengers')
let additional = document.getElementById('additional')

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

    
    