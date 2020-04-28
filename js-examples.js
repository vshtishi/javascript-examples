const circleObj = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

circleObj.draw();

//Factory function
function createCircle(radius) {
    return {
        radius, //key & value have the same name

        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

//Constructor function
function Circle(radius) {
    this.radius = radius;
    //Hiding implementation details
    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function () {
        return defaultLocation;
    };
    let computeOptimumLocation = function (radius) {

    };

    this.draw = function () {
        computeOptimumLocation(0.1);
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location');
            defaultLocation = value;
        }
    });
}

console.log(circle.defaultLocation);
const another = new Circle(1);
console.log(Circle.name); //functions are objects
console.log(Circle.length);
Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

circle.location = { x: 1 };
circle['location'] = { x: 1 };

const propertyName = 'location';

console.log(circle[propertyName]);
//Deleting properties
delete circle.location;
console.log(circle);

//Enumerating all the members in an object
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

//Getting all the keys in an object
const keys = Object.keys(circle);
console.log(keys);

//Checking the existence of a method/property in an obj
if ('radius' in circle)
    console.log('Circle has a radius');

