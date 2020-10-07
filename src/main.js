'use strict'

// Checking knoweldge
let homeButton = document.getElementById('home-button')

homeButton.addEventListener('click', evt => {
    console.log("WOOF!")
})

// Old ye api code and jquery code
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

// $ ( document ).ready(function() {
//     $( "a" ).hover(function(event)  {
//         $( "a" ).toggleClass( "test" )
//     })

    // $( "#give-dog" ).click(function() {
        
    // })

//     $( "a" ).click(function(event) {
//         if (i < trueDoggoLoverCheck.length){
//             alert( `${trueDoggoLoverCheck[i]}` )
//             event.preventDefault()
//             i++
//         }
//     })
// })
*/