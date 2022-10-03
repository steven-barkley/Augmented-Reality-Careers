/* First lesson string literals 

/* Classic Javascript 
let word1 = 'Dylan';
let word2 = 'Israel';

const fullName = word1 + ' ' + word2;

console.log( fullName );

/* ES6 Features 
let name1 = 'Steven';
let name2 = 'Barkley';

const newName = `${ name1 } ${ name2 }`;

console.log( newName );

/* Classic Multiline String 

let example = 'Hello \n' + 'world';
console.log( example );

/* ES6 Features 

let newExample = `${ name1 }
${ name2 }`;

console.log( newExample );

/* Classic Destructuring Objects 

const student = {
    called: 'Steven Barkley',
    career: 'React Developer',
    address: {
        city: 'Fort Lauderdale'
    }
};

console.log( student.address.city );

/* ES6 Destructuring Objects 

const { called, career, address: { city } } = student; // Same as player.name & player.club

console.log( `${ called } career is ${ career } and he lives in ${ city }` );


const student2 = {
    ID: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { ID, age, projects: { diceGame } } = student2;

console.log( `${ age } year old ${ ID } has a project called diceGame where ${ diceGame }.` );

// Destructing Arrays

let test = [ 'Steven', 'React Developer', 'Fort Lauderdale' ]

let [ names, names1, name ] = [ 'Steven', 'React Developer', 'Fort Lauderdale' ];

console.log( test[ 0 ], test[ 1 ], test[ 2 ] );
console.log( `My name is ${ names }. I am a ${ names1 }, who lives in ${ name }` );

// Object Literals

function addressMaker( city, state ) {
    const newAddress = { city, state };

    console.log( newAddress );
}

console.log( addressMaker( 'Austin', 'Texas' ) );

// Object Literals, Destructuring Challenge

function addressMakerTwo( address ) {
    const newPlace = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
    console.log( newPlace.city, newPlace.state, newPlace.country )
}

addressMakerTwo( { city: 'Austin', state: 'Texas', } );


// For Of Loop on array

let incomes = [ 62000, 67000, 75000 ];
let total = 0;

for ( const income of incomes ) {
    console.log( income );
    total += income;
}

console.log( total );


// For of Loop on string (an index of char)


let textBlock = "Dylan Coding God Israel";

for ( const text of textBlock ) {
    console.log( text );
}

 Challenge - For Of Loop

Using the For of Loop, iterate through the array an print into the console, a message like:
// Tom lives in Lisbon */

/*
const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris" },
    { name: "Kate", city: "Sidney" },

]


for ( const student in students ) {
    console.log( `${ students[ student ].name } lives in ${ students[ student ].city }` );
    /*Better solution 
    console.log( student.name + " lives in " + student.city );
    //Combined solution
    console.log( `${ student.name } lives in ${ student.city }` );
}*/

/*
// personalFriends referenced.....
let contacts = [ 'Lamar', 'X', 'Y' ];

let personalFriends = contacts;

contacts.push( 'John' );
console.log( personalFriends );

// personalFriends copied.....

let friends = [ 'Chris', 'Sam', 'Tony' ]

let personalBuddies = [ ...friends ]; //Spread Operator

friends.push( 'Lamar' );
console.log( friends );
console.log( personalBuddies );
*/

/*Spread operator Challenge 

const shoppingList = [ 'eggs', 'milk,', 'butter' ];

const shoppingBasket = [ 'flour', 'cereal', 'bananas', ...shoppingList ];
let content = [ ...shoppingBasket ];


function add( nums ) {
    let content = [ ...arguments ];
    document.getElementById( 'printBox' ).innerHTML = content;
}

add( 0, 3, 6, 7, 8, 12, 1 )

function subtract( numbers ) {
    let stuff = [ ...arguments ];
    document.getElementById( 'printBox2' ).innerHTML = stuff;
}

subtract( 32, 12, 95, 3, 0, 32 )
//document.getElementById( 'printBox' ).innerHTML = content;
*/


/*
function breakfastMenu() {
    return "I'm going to eat scrambled eggs for breakfast";
}

const lunchMenu = function () {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = food => `I'm going to eat a ${ food } for dinner`;

let content = dinnerMenu( "Chicken Salad" );

document.getElementById( 'printBox' ).innerHTML = content;

const leadSinger = ( artist = "Someone" ) => {
    document.getElementById( 'printBox' ).innerHTML = `${ artist }`;
}

leadSinger();
leadSinger( "Justin Timberlake" );



const groceryShop = ( produce = "something" ) => {
    document.getElementById( 'printBox' ).innerHTML = `I am going to buy ${ produce } from the grocery shop`;
}

groceryShop( "milk" );
// Output "I am going to buy milk from the grocery shop." 
*/

/*
const ListIngredients = [ "flour", "sugar", "eggs", "butter", "chocolate" ];

let chocolate;
chocolate = ListIngredients.includes( "chocolate" );

if ( chocolate == true ) {
    document.getElementById( 'printBox' ).innerHTML = "Let's make a Cake";
}
else {
    document.getElementById( 'printBox' ).innerHTML = "Need to go shopping again";
}
*/

