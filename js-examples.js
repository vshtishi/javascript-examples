let name = 'Jane';
let age = 19;
let isApproved = false;
let selection = null;
const rate = 0.10;
let test1;
let test2 = null;

let selectedColors = ['red', 'green', 'blue'];
//Arrays have dynamic size
selectedColors[3] = 'white';
//The objects in an array are dynamic
selectedColors[4] = 10;
console.log(selectedColors.length);

let person = {
    name: 'Jane',
    age: 19
};

let choice = 'age';
//Dot Notation
person.name = 'Sarah';

//Bracket Notation
person['name'] = 'Ann';
person[choice] = 20;

//console.log(person.name);

function greet(name) {
    return 'Hello ' + name;
}

console.log(greet(person.name));
console.log("Undefined type: " + typeof test1);
console.log(`Null type (bug) ${typeof test2}`);

var a = 10;
var b = "10";

if (a == b) {
    console.log("Values are equal (type coercion)");
}
if(a===b){
    console.log("Values are equal");
}

