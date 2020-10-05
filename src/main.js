$ ( document ).ready(function() {
    $( "a" ).hover(function(event)  {
        $( "a" ).toggleClass( "test" )
    })

    $( "p" ).click(function() {
        console.log( "You click on a paragraph!")
    })
})