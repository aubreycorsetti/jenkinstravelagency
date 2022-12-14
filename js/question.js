'use strict';
//constructor function
function Destination(
  name,
  price,
  climate,
  density,
  code,
  fileextension = 'jpg',
  location = undefined
) {
  this.name = name;
  this.price = price; //low,medium,high
  this.climate = climate; //warm,cold
  this.density = density; //highdensity, lowdensity
  this.fileextension = fileextension;
  this.src = `img/${name}-${price}-${climate}-${density}-${location}.${fileextension}`; //img link */
  this.code = code;
}
//test location array//

let niagarafalls = new Destination(
  'niagarafalls',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg'
);
let yellowstone = new Destination(
  'yellowstone',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg'
);
let niagara = new Destination(
  'niagara',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg'
);
let rockefeller = new Destination(
  'rockefeller',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg'
);
let aspen = new Destination('aspen', 'highprice', 'cold', 'highdensity','bbb' ,'jpg');
let stmortiz = new Destination(
  'stmortiz',
  'highprice',
  'cold',
  'highdensity',
  'bbb',
  'jpg'
);
let kirkenes = new Destination(
  'kirkenes',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg'
);
let solitudemountain = new Destination(
  'solitudemountain',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg'
);

let grandcanyon = new Destination(
  'grandcanyon',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg'
);
let deathvalley = new Destination(
  'deathvalley',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg'
);
let lasvegas = new Destination(
  'lasvegas',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg'
);
let sanantonio = new Destination(
  'sanantonio',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg'
);
let hoggarmountains = new Destination(
  'hoggarmountains',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpg'
);
let pyramids = new Destination(
  'pyramids',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg'
);
let dubai = new Destination(
  'dubai',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg'
);
let expensivevegas = new Destination(
  'expensivevegas',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg'
);

let kepuhibeach = new Destination(
  'kepuhibeach',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg'
);
let montanadeoro = new Destination(
  'montanadeoro',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg'
);
let panamacitybeach = new Destination(
  'panamacitybeach',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'png'
);
let myrtlebeach = new Destination(
  'myrtlebeach',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpeg'

);
let miami = new Destination(
  'miami',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpeg'
);
let galapagos = new Destination(
  'galapagos',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg'
);
let parrotbay = new Destination(
  'parrotbay',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg'
);
let cocoprive = new Destination(
  'cocoprive',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg'
);


let locations = [
  yellowstone,
  niagarafalls,
  niagara,
  rockefeller,
  aspen,
  stmortiz,
  grandcanyon,
  deathvalley,
  lasvegas,
  sanantonio,
  miami,
  galapagos,
  parrotbay,
  cocoprive,
  hoggarmountains,
  pyramids,
  dubai,
  expensivevegas,
  kirkenes,
  solitudemountain,
  kepuhibeach,
  montanadeoro,
  panamacitybeach,
  myrtlebeach,
];

//sample questions//

const questionArray = [
  {
    question: 'How much would you like to spend on your vacation?',
    a: 'Less than $150 per night',
    b: 'More than $150 per night',
    options: ['a', 'b'],
    img:['img/lowcost.png','img/mediumcost.png']
  },
  {
    question: 'Serene Vacation vs. Super lit party central',
    a: 'Serene Vacation',
    b: 'Large Crowded Spot',
    options: ['a', 'b'],
    img:['img/notbusy.png','img/busy.png']
  },
  {
    question: 'Warmer vs Colder',
    a: 'Warmer',
    b: 'Colder',
    options: ['a', 'b'],
    img:['img/warm.png','img/cold.png']
  },

];


const questionBox = document.getElementById('question');
const answersElem = document.querySelectorAll('.question');

const img1=document.getElementById('imgbox1');
const img2= document.getElementById('imgbox2');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const submitBtn = document.getElementById('submit');
const responseContainer = document.getElementById('responseContainer');


let current = 0;

loadQuestions();

function loadQuestions() {
  deselectAnswers();
  const currentquestionArray = questionArray[current];
  questionBox.innerText = currentquestionArray.question;
  //answer options will be part of label.option element
  if (currentquestionArray.options.length === 2) {
    option1.innerHTML = currentquestionArray.a;
    img1.innerHTML=`<img src=${currentquestionArray.img[0]} width="220px" alt="a" height="220px" id='imgA' class='responsive' />`;
    option2.innerText = currentquestionArray.b;
    img2.innerHTML=`<img src=${currentquestionArray.img[1]} width="220px" alt="b" height="220px" id='imgB' class='responsive' />`;
  }}




function getSelected() {
  let answer = undefined;

  answersElem.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersElem.forEach((answersEl) => {
    if (answersEl.checked) {
      answersEl.checked = false;
    }
  });
}

function handleClick(event) {
  console.log(event);
  if (event.target === responseContainer) {
    alert('Please click the select button or submit button.');
  }

  let clickedResponse = event.target.alt;
  console.log(clickedResponse);
  //console.log(questionArray[0].a);
  for (let i = 0; i < questionArray.length; i++) {
    if (event.target.alt === 'a') {
      console.log(questionArray[current].a);
    } else if (event.target.alt === 'b') {
      console.log(questionArray[current].b);
    } 
  }

}



let userAnswer='';
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === 'a') {
      console.log(questionArray[current]['options'][0]);
      userAnswer=userAnswer+questionArray[current]['options'][0];
    } else if (answer === 'b') {
      console.log(questionArray[current]['options'][1]);
      userAnswer=userAnswer+questionArray[current]['options'][1];
    }

    current++;
    if (current < questionArray.length) {
      loadQuestions();
    } else if (current === questionArray.length) {
      localStorage.setItem('locationcode', userAnswer);
      answerResult();


    }
  }
});
function answerResult(){
  for(let i=0; i<locations.length; i++) {
    if(userAnswer===locations[i].code){
      location.href = 'results.html';
      questionBox.innerText=`Based on your answers we highly recommend ${locations[i].name}`;
      console.log(`${locations[i].name.toUpperCase()} matches your preference!`);
    }}}


responseContainer.addEventListener('click', handleClick);
