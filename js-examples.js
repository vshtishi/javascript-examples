const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/tasks/json/sample.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.returnType = 'text';
request.send();

request.onload = function () {
   const catString = request.response;
   const catInfo=JSON.parse(catString);
   console.log('success');
   displayCatInfo(catInfo);
}

function displayCatInfo(jsonObj){
       const cats=jsonObj;
       

       for(let i=0; i<cats.length; i++){
        const myArticle = document.createElement('article');
        const header2 = document.createElement('h2');
        const para1=document.createElement('p');
        const para2=document.createElement('p');
        const para3=document.createElement('p');
        const header4 = document.createElement('h4');
        
        header2.textContent=cats[i].name;
        para1.textContent='Breed: ' +cats[i].breed;
        para2.textContent='Color: ' +cats[i].color;
        header4.textContent='Kittens: ';

        const kitties=cats[i].kittens;
        for(let j=0; j<kitties.length; j++){
          const aList = document.createElement('ul');
          const listItem1 = document.createElement('li');
          const listItem2 = document.createElement('li');
          listItem1.textContent = 'Name: ' +kitties[j].name;
          listItem2.textContent = 'Gender:' +kitties[j].gender;
          aList.appendChild(listItem1);
          aList.appendChild(listItem2);
          para3.appendChild(aList);
        }

        myArticle.appendChild(header2);
        myArticle.appendChild(para1);
        myArticle.appendChild(para2);
        myArticle.appendChild(header4);
        myArticle.appendChild(para3);
    
        section.appendChild(myArticle);
       }
}