const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://raw.githubusercontent.com/mdn/learning-area/master/javascript/oojs/tasks/json/sample.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.returnType = 'text';
request.send();

request.onload = function () {
  const catString = request.response;
  const catInfo = JSON.parse(catString);
  displayCatInfo(catInfo);
}

function displayCatInfo(jsonObj) {
  const cats = jsonObj;
  let motherInfo = 'The mother cats are called ';
  let kittenInfo;
  let maleKitties = 0;
  let femaleKitties = 0;
  for (let i = 0; i < cats.length; i++) {
    if (i == cats.length - 1)
      motherInfo += ' ' + cats[i].name + '.';
    else
      motherInfo += cats[i].name + ', ';

    const kitties = cats[i].kittens;

    for (let j = 0; j < kitties.length; j++) {
      if (kitties[j].gender == 'f')
        femaleKitties++;
      else
        maleKitties++;

    }

  }
  totalKitties = maleKitties + femaleKitties;
  kittyInfo = 'There are ' + totalKitties + ' kittens.' + maleKitties + ' male kittens and ' + femaleKitties + ' female kittens';
  const para1 = document.createElement('p');
  para1.style.color='purple';
  const para2 = document.createElement('p');
  para1.textContent = motherInfo;
  para2.textContent = kittyInfo;
  section.appendChild(para1);
  section.appendChild(para2);
}