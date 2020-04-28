//String primitive
const text = 'Sample text';
//String object
const anotherText = new String('Sample text');

console.log('String length: ' + text.length);
console.log('First character of string: ' +text[0]);

text.includes('te'); //true
text.startsWith('s'); //false 
text.endsWith('t'); //true
text.indexOf('am'); //1
const modifiedText=text.replace('Sample', 'Modified');
console.log(modifiedText);
console.log('To lower case: ' +text.toLowerCase());
console.log('To upper case: ' +text.toUpperCase());