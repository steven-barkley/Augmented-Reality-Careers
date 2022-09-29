/* First lesson string literals */

/* Classic Javascript */
let word1 = 'Dylan';
let word2 = 'Israel';

const fullName = word1 + ' ' + word2;

console.log( fullName );

/* ES6 Features */
let name1 = 'Steven';
let name2 = 'Barkley';

const newName = `${ name1 } ${ name2 }`;

console.log( newName );

/* Classic Multiline String */

let example = 'Hello \n' + 'world';
console.log( example );

/* ES6 Features */

let newExample = `${ name1 }
${ name2 }`;

console.log( newExample );

/* Classic Destructuring Objects */

const student = {
    called: 'Steven Barkley',
    career: 'React Developer',
    address: {
        city: 'Fort Lauderdale'
    }
};

console.log( student.address.city );

/* ES6 Destructuring Objects */

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