/* let firstCard = 6;
let secondCard = 9;

if ( sum < 21 ) {
    console.log( "Do you want to draw a new card?" )
} else if ( sum === 21 ) {
    console.log( "Woohoo! You've got Blackjack!" )
} else {
    console.log( "You're out of the game!" )
} */

/* function getRandomInt( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min ) + min ); // The maximum is exclusive and the minimum is inclusive
} */

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard;
let hasBlackJack = false;
let message = "";
let isAlive = true;

let messageEl = document.getElementById( "message-el" );
let sumEl = document.getElementById( "sum-el" );
let cardsEl = document.getElementById( "cards-el" );

console.log( cardsEl );

function startGame() {
    if ( sum > 21 ) {
        isAlive = false;
        message = `You bust!!!`;
    } else if ( sum === 21 ) {
        hasBlackJack = true;
        message = `You got Blackjack!`
    } else {
        message = `Hit or stay?`
    }
    messageEl.textContent = message
    cardsEl.innerText += `${ firstCard } ${ secondCard }`
    //sumEl.textContent = `Sum: ${ sum }`
    sumEl.innerText += ` ${ sum }`;
}

