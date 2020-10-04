'use strict'

// Adding doggo-image generation
let dogButton = document.getElementById('give-dog')

dogButton.addEventListener("click", evt => {
    
    let dogDiv = document.getElementById('dog-pic')

    fetch('https://api.thedogapi.com/v1/images/search')
        .then(res => res.json())
        .then(dogs => {
            dogs.forEach(dog => {
                dogDiv.innerHTML = `<h3> Here is this dog wishing you the best day 👍🏼 </h3>
                <img src="${dog.url}" alt="woofers" />`
            });
        })
})

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