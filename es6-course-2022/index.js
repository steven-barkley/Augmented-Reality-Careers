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
    console.log( `${ student.name } lives in ${ student.city }` );*/
}
