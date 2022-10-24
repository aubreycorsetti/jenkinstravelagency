/* eslint-disable indent */
const questionArray = [
  {
    question: 'How old are you?',
    a: 'Under 21',
    b: 'Over 21',
    c: 'NOYB',
    points: [3, 1, 2],
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

  {
    question: 'I enjoy being the first person to experience somthing.',
    a: 'Agree',
    b: 'Neutral',
    c: 'Disagree',
    points: [1, 2, 3],
  },
  {
    question: 'I get nervous easily in unfamiliar places.',
    a: 'Agree',
    b: 'Neutral',
    c: 'Disagree',
    points: [3, 2, 1],
  },
  {
    question:
      'I would rather sit by the pool than go for a hike.',
    a: 'Agree',
    b: 'Neutral',
    c: 'Disagree',
    points: [3, 2, 1],
  },
  {
    question:
      'I like to be comfortable',
    a: 'Agree',
    b: 'Neutral',
    c: 'Disagree',
    points: [3, 2, 1],
  },
  {
    question: 'I like a consistent routine in my daily life.',
    a: 'Agree',
    b: 'Neutral',
    c: 'Disagree',
    points: [3, 2, 1],
  },
  {
    question:'I go out socially with freinds quite often.',
    a: 'Agree',
    b: 'Neutral',
    c: 'Disagree',
    points: [1, 2, 3],
  },
  {
    question: 'I prefer to go to undiscovered places before big hotels and restaurants are built.',
    a: 'Agree',
    b: 'Neutral',
    c: 'Disagree',
    points: [1, 2, 3],
  }
];

const questionElem = document.getElementById('question');
const answersElem = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const option_a = document.getElementById('option_a');
const option_b = document.getElementById('option_b');
const option_c = document.getElementById('option_c');
const submitBtn = document.getElementById('submit');


let currentQuestion = 0;
let points=0;

loadQuestions();

function loadQuestions() {
  deselectAnswers();
  const currentquestionArray=questionArray[currentQuestion];
  questionElem.textContent = currentquestionArray.question;
  //answer options will be part of label.option element
  option_a.textContent = currentquestionArray.a;
  option_b.textContent = currentquestionArray.b;
  option_c.textContent = currentquestionArray.c;
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
if(answer){
    if (answer==='a') {
      points+=questionArray[currentQuestion].points[0];

  } else if(answer==='b') {
      points+=questionArray[currentQuestion].points[1];

  }else if(answer==='c') {
      points+=questionArray[currentQuestion].points[2];

  }}
  currentQuestion+=1;
if(currentQuestion<questionArray.length){
  loadQuestions();
} else if (points >20 && points<=30) {
    quiz.innerHTML = `<h2>You got ${points} points. You like adventure.</h2> <button onclick="location.reload()">Reload</button>`;
} else if (points>10 && points<=20) {
    quiz.innerHTML = `<h2>You got ${points} points. You like everything.</h2> <button onclick="location.reload()">Reload</button>`;
} else if (points>0 && points<=10) {
    quiz.innerHTML = `<h2>You got ${points} points. You like peaceful retreat</h2> <button onclick="location.reload()">Reload</button>`;
}
  }
);
