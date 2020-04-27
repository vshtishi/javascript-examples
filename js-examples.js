//Arrays
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.forEach(function (item) {
    console.log('Element ' + item);
})
console.log(arr);
console.log('Accesing Out of bounds index:' + arr[3]);
console.log(`Array length: ${arr.length}`);

//Functions
let f = function (name) {
    console.log('Hello ' + name);
};

function greet(name) {
    console.log('Hello ' + name);
}

let executor = function (fn, name) {
    fn(name);
}

greet('Ann');
greet('Ann', 10);
f('Ann');
executor(f, 'JS');

//Objects
var anObj = {
    'testProp': true
};

anObj.aMethod = function () {
    console.log("Function in object");
}
console.log(anObj);
anObj.aMethod();

var person = {
    'firstName': 'Jane',
    'lastName': 'Doe',
    'getFullName': function () {
        return this.firstName + " " + this.lastName;
    },
    'address': {
        'street': '123 street',
        'city': 'x',
        'state': 'xyz'
    },
    'isFromState': function (st) {
        return this.address.state === st;
    }
};

person2 = person;
person = {};
console.log(person2.getFullName());

console.log(person2.isFromState('xyz'));

//Arguments
var add = function (a, b) {
    console.log(arguments);
    let i, sum = 0;
    for (i = 0; i < arguments.length; i++)
        sum += arguments[i];
    return sum;
}

console.log(add(10, 20, 30));


