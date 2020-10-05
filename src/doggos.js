'use strict'

let doggoMotivations = [
    'A good boy',
    'A good girl',
    'Woof!',
    'Chonk',
    'Hi human!'
]


// Adding doggo-image generation
let dogButton = document.getElementById('give-dog')

dogButton.addEventListener("click", evt => {
    
    let dogDiv = document.getElementById('dog-pic')
    let num = Math.floor(Math.random() * doggoMotivations.length)
    console.log(num);

    fetch('https://api.thedogapi.com/v1/images/search')
        .then(res => res.json())
        .then(dogs => {
            dogs.forEach(dog => {
                dogDiv.innerHTML = `<h3>${doggoMotivations[num]}</h3>
                <img src="${dog.url}" alt="woofers" />`
            });
        })
})

// Adding the date
let today = new Date()
let formatDate = today.toDateString()
let dateText = document.getElementById('date')

dateText.innerHTML = `Today's date: ${formatDate}\n`

// Old ye api code
/*
let quotesButton = document.getElementById('give-ye')

quotesButton.addEventListener("click", evt => {

    let quotesDiv = document.getElementById('quotes')

    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(quote => {
            quotesDiv.innerHTML = `<p> Ye speaketh: ${quote.quote} </p>`
        })
})
*/