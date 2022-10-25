/* eslint-disable indent */
/* function Question(text, response1, response2, response3){
  this.text=text;
  this.response1=response1;
  this.response2=response2;
  this.response3=response3;
} */


//constructor function
/* function Destination(price, climate, density, location.img){
  this.price=price;//low,medium,high
  this.climate=climate;//warmer,colder
  this.density=density;//rowdy, serenity
  this.location=location//beach, troipical, desert
  this.img=img;//img link
} */

const questionArray = [
  {
    question: 'How much do you want to spend for your next vacation?',
    a: '$3000+',
    b: '$1000-$3000',
    c: '<$1000',
  },
  {
    question: 'I like to talk to a lot of different people if I go to a party.',
    a: 'Agree',
    b: 'Neutral',
    c: 'Disagree;',
    points: [1, 2, 3],
  },
  {
    question: 'I love to be active on vacation',
    a: 'Agree',
    b: 'Neutral',
    c: 'Disagree',
    points: [1, 2, 3],
  },
];

const questionElem = document.getElementById('question');
const answersElem = document.querySelectorAll('#response');
const quiz = document.getElementById('quiz');

const option_one = document.getElementsByClassName('option1');
const option_two = document.getElementsByClassName('option2');
const option_three = document.getElementsByClassName('option3');
const submitBtn = document.getElementById('submit');




let currentQuestion = 0;
let points=0;

loadQuestions();

function loadQuestions() {
  deselectAnswers();
  const currentquestionArray=questionArray[currentQuestion];
  questionElem.textContent = currentquestionArray.question;
  //answer options will be part of label.option element
  /* option_one.innerHTML = '<h2>You got points. You like peaceful retreat</h2>';
  option_two.textContent = currentquestionArray.b;
  option_three.textContent = currentquestionArray.c; */
}

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

submitBtn.addEventListener('click', () => {
  
  const answer = getSelected();
/* if(answer){
    if (answer==='option1') {
      points+=questionArray[currentQuestion].points[0];
    }else if(answer==='option2') {
      points+=questionArray[currentQuestion].points[1];
    }else if(answer==='option3') {
      points+=questionArray[currentQuestion].points[2];
    } */


/* if(currentQuestion<questionArray.length){
  loadQuestions();
} else if(currentQuestion===questionArray.length) {
  if(points >20 && points<=30){
    quiz.innerHTML = `<h2>You got ${points} points. You like adventure.</h2> <button onclick="location.reload()">Reload</button>`;
  }else if(points>10 && points<=20) {
    quiz.innerHTML = `<h2>You got ${points} points. You like everything.</h2> <button onclick="location.reload()">Reload</button>`;
  }else if (points>0 && points<=10) {
    quiz.innerHTML = `<h2>You got ${points} points. You like peaceful retreat</h2> <button onclick="location.reload()">Reload</button>`;
  }
  } */
});
