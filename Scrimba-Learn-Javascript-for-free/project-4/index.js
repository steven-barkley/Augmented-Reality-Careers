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
let firstCard = Math.floor( Math.random() * ( 11 - 2 ) + 2 );
let secondCard = Math.floor( Math.random() * ( 11 - 2 ) + 2 );

let sum = firstCard + secondCard;
let hasBlackJack = false;
let message = "";
let isAlive = true;

if ( sum > 21 ) {
    isAlive = false;
    message = `${ sum } You bust!!!`;
} else if ( sum === 21 ) {
    hasBlackJack = true;
    message = `${ sum }. You got Blackjack!`
} else {
    message = `${ sum }. Hit or stay?`
}
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
console.log( message );