let anObj = {
    'prop': 'Hello',
    'prop1': true,
    'objProp': {
        'innerProp': 'Inner property value'
    }
};

console.log(anObj);

anObj.prop2 = 'value';

console.log(anObj);

anObj.prop3 = 10;
let propertyName = 'prop3';
console.log(`Number property: ${anObj.prop3}`);
console.log('Accessing properties using bracket notation: ' + anObj['prop'] + ', ' + anObj[propertyName]);
console.log('Accessing a non-existent property: ' + anObj.prop4);
anObj.objProp.newProp='new value';
console.log('Value of nested object property: ' + anObj.objProp['newProp']);

//Removing a property
delete anObj.prop;
console.log(anObj);

