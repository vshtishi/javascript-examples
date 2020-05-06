const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://raw.githubusercontent.com/vshtishi/javascript-examples/master/employees.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
//request.responseType = 'json';
request.responseType='text';
request.send();

request.onload=function(){
    const companyEmployeesText=request.response;
    const companyEmployees=JSON.parse(companyEmployeesText);
    populateHeader(companyEmployees);
    showEmployees(companyEmployees);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['company'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'City: ' + jsonObj['city'] + ' // Founded: ' + jsonObj['founded'];
    header.appendChild(myPara);
  }

  function showEmployees(jsonObj) {
    const employees = jsonObj['employees'];
        
    for (let i = 0; i < employees.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = employees[i].name;
      myPara1.textContent = 'Position: ' + employees[i].position;
      myPara2.textContent = 'Age: ' + employees[i].age;
      myPara3.textContent = 'Technologies:';
          
      const techs = employees[i].technologies;
      for (let j = 0; j < techs.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = techs[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }

let myJSON = { "name": "Chris", "age": "38" };
myJSON
let myString = JSON.stringify(myJSON);
console.log(myString);