//Object Literal
let person = {
    firstName: 'Ann',
    lastName: 'Smith',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
//Inheritance with Object.create
let person2 = Object.create(person);
console.log("Person2", person2);
console.log(person);

//Factory Function
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value) {
            const parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    };
}

//Constructor Function
function Person() {
    let firstName;
    let lastName;
    Object.defineProperty(this, 'firstName', {
        get: function () {
            return firstName;
        },
        set: function (value) {
            firstName = value;
        }
    });
    Object.defineProperty(this, 'lastName', {
        get: function () {
            return lastName;
        },
        set: function (value) {
            lastName = value;
        }
    });
}

let aPerson = new Person();
aPerson.firstName = 'Sarah';
console.log(aPerson.firstName);
Person.prototype.farewell = function () {
    console.log(this.firstName + ' left.');
};

aPerson.farewell();

//Class Syntax
class Citizen {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hi, my name is ${this.name}`);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

//Inheritance using class syntax
class Student extends Citizen {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }
}


let aCitizen = new Citizen('Ann', 20);
console.log(`Citizen: ${aCitizen.name}`);