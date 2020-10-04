'use strict'

// Adding the date
let today = new Date()
let formatDate = today.toDateString()
let dateText = document.getElementById('date')

dateText.innerHTML = `Today's date: ${formatDate}\n`