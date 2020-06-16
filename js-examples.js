class Student {
    constructor(name, grades) {
        this._name = name;
        this.grades = grades;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get grades() {
        return this._grades;
    }
    set grades(value) {
        this._grades = value;
    }
}

let student1 = new Student('Ann', [10, 9, 10]);
let student2 = new Student('Harry', [7, 8, 9]);
let student3 = new Student('Sarah', [3, 4, 5]);
let student4 = new Student('Ash', [7, 7, 7]);

//Array
let studentArr = new Array(student1, student2, student3, student4);

studentArr.forEach(student => console.log(student.name));

let nameArr = studentArr.map(student => student.name);
let str = nameArr.join(' - ');
console.log(str);


let aNamesArr = nameArr.filter(name => name.charAt(0) === 'A');
console.log(aNamesArr);

console.log(nameArr.every(name => typeof name === 'string'));
console.log(nameArr.some(name => name.charAt(0) === 'S'));

let studentAvg = new Array();
for (let i = 0; i < studentArr.length; i++) {
    let total = studentArr[i].grades.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 0);
    studentAvg[i] = total / studentArr[i].grades.length;
}

console.log(studentAvg);

//Set
let studentIDs = new Set(['001', '002', '003']);
studentIDs.add('004');
studentIDs.add('104');
studentIDs.delete('104');
console.log('Student nr: ' + studentIDs.size);

//Map
let register = new Map();
let current = 0;
for (let item of studentIDs) {
    register.set(nameArr[current], item);
    current++;
}

for (let [key, value] of register) {
    console.log(key + ' Id: ' + value);
}