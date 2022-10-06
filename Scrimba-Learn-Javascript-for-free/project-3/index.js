let button1 = document.getElementById( "b1" )
let button2 = document.getElementById( "b2" )
let button3 = document.getElementById( "b3" )
let button4 = document.getElementById( "b4" )
let button5 = document.getElementById( "b5" )
let button6 = document.getElementById( "b6" )

let sumHome = 0;
let sumAway = 0;

let hScore = 0;
let aScore = 0;

document.getElementById( "homeScore" ).textContent = 0;
document.getElementById( "awayScore" ).textContent = 0;

hScore = document.getElementById( "homeScore" )
aScore = document.getElementById( "awayScore" )

function onePoint() {
    let point1 = 1;
    let increment = sumHome + point1;
    hScore.textContent = parseInt( hScore.textContent ) + increment;
}
function twoPoints() {
    let point2 = 2;
    let increment = sumHome + point2;
    hScore.textContent = parseInt( hScore.textContent ) + increment;
}
function threePoints() {
    let point3 = 3;
    let increment = sumHome + point3;
    hScore.textContent = parseInt( hScore.textContent ) + increment;
}
function awayOnePoint() {
    let point1 = 1;
    let increment = sumHome + point1;
    aScore.textContent = parseInt( aScore.textContent ) + increment;
}
function awayTwoPoints() {
    let point2 = 2;
    let increment = sumHome + point2;
    aScore.textContent = parseInt( aScore.textContent ) + increment;
}
function awayThreePoints() {
    let point3 = 3;
    let increment = sumHome + point3;
    aScore.textContent = parseInt( aScore.textContent ) + increment;
}