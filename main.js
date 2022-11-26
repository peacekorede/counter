
let count = 0

let countEl = document.getElementById('count_el')

function increment() {
    count = count + 1
    countEl.innerHTML = count
}


let database = []

function save() {
 
// 1. Save the value of counter and the current time as an object inside the database
 // 2. Print out the difference between the last value of database and the current value
let lastDbRecord = database[database.length - 1]
let last = lastDbRecord?.numberOfPassenger ||  0
 const data = {
    numberOfPassenger: count,
    time: new Date(),
    additionalPassengers: count - last
}
database.push(data)

 console.log(database, `record of passengers as at ${new Date().getMinutes}`)   
}

    
    