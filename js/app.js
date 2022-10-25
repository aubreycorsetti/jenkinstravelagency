/* eslint-disable no-unused-vars */
// QUESTIONS








const questionarray = [
  {
    question: 'How olde are you?',
    answer1: 'under 21',
    answer1Total: '3',
    answer2: 'over 21',
    answer2Total: '1',
  },
  {
    question: 'I like to talk to a lot of different people if I go to a party.',
    answer1: 'Agree',
    answer1Total: '1',
    answer2: 'Neutral',
    answer2Total: '2',
    answer3: 'Disagree',
    answer3Total: '3',
  },
  {
    question: 'I love to be active on vacation',
    answer1: 'Agree',
    answer1Total: '1',
    answer2: 'Neutral',
    answer2Total: '2',
    answer3: 'Disagree',
    answer3Total: '3',
  },
  {
    question: 'I enjoy being the first person to experience something.',
    answer1: 'Agree',
    answer1Total: '1',
    answer2: 'Neutral',
    answer2Total: '2',
    answer3: 'Disagree',
    answer3Total: '3',
  },
  {
    question: 'I get nervous easily in unfamiliar places.',
    answer1: 'Agree',
    answer1Total: '3',
    answer2: 'Neutral',
    answer2Total: '2',
    answer3: 'Disagree',
    answer3Total: '1',
  },
  {
    question: 'I would rather sit by the pool than go for a hike.',
    answer1: 'Agree',
    answer1Total: '3',
    answer2: 'Neutral',
    answer2Total: '2',
    answer3: 'Disagree',
    answer3Total: '1',
  },
  {
    question: 'I like to be comfortable.',
    answer1: 'Agree',
    answer1Total: '3',
    answer2: 'Neutral',
    answer2Total: '2',
    answer3: 'Disagree',
    answer3Total: '1',
  },
  {
    question: 'I like a consistent routin in my daily life.',
    answer1: 'Agree',
    answer1Total: '3',
    answer2: 'Neutral',
    answer2Total: '2',
    answer3: 'Disagree',
    answer3Total: '1',
  },
  {
    question: 'I go out socially with friends quite often.',
    answer1: 'Agree',
    answer1Total: '1',
    answer2: 'Neutral',
    answer2Total: '2',
    answer3: 'Disagree',
    answer3Total: '3',
  },
  {
    question: 'I prefer to go to undiscovered places before big hotels and restaurants are built.',
    answer1: 'Agree',
    answer1Total: '1',
    answer2: 'Neutral',
    answer2Total: '2',
    answer3: 'Disagree',
    answer3Total: '3',
  }
];








let currentQuestion = 0;
let score = 0;
let selectedAnswersData = [];
const totalQuestions = questionarray.length;

const container = document.querySelector('.question-container');
const questionbox = document.querySelector('.questionbox');
const answer1box= document.querySelector('.answer1');
const answer2box = document.querySelector('.answer2');
const answer3box = document.querySelector('.answer3');
const nextButton = document.querySelector('.previous-btn');
const previousButton = document.querySelector('.next-btn');
const result = document.querySelector('.result');
const unorderlist=document.querySelector('#travelquestion');
const qbox=document.querySelector('#qbox');
const btn1=document.querySelector('.button q1');
const btn2=document.querySelector('.button q2');
const btn3=document.querySelector('.button q3');
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;







//Generate and display questions in HTML elements
function generateQuestions(index) {
  const questionfromArray = questionarray[0].question;
  const answer1point = questionarray[index].answer1Total;
  const answer2point = questionarray[index].answer2Total;
  const answer3point = questionarray[index].answer3Total;
  const answer1option = questionarray[0].answer1;
  const answer2option = questionarray[0].answer2;
  const answer3option = questionarray[0].answer3;
  //Populate html elements
  let li1 = document.createElement('span');
  li1.textContent = questionfromArray;
  qbox.appendChild(li1);

  let li2 = document.createElement('span');
  li2.textContent = answer1option;
  btn1.appendChild(li2);

  let li3= document.createElement('span');
  li3.textContent = answer2option;
  btn2.appendChild(li3);

  let li4 = document.createElement('span');
  li4.textContent = answer3option;
  btn3.appendChild(li4);
}
generateQuestions();


function loadNextQuestion() {
  const selectedOption = document.querySelector('next-btn');
  if (!selectedOption) {
    alert('Please select your answer!');
    return;
  }
  //Get value of selected radio
  const answerScore = Number(
    selectedOption.nextElementSibling.getAttribute('data-total')
  );

  ////Add the answer score to the score array
  score.push(answerScore);

  selectedAnswersData.push();

  const totalScore = score.reduce((total, currentNum) => total + currentNum);

  //Finally we incement the current question number ( to be used as the index for each array)
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }
  //If the quiz is finished then we hide the questionarray container and show the results
  if (currentQuestion == totalQuestions) {
    container.style.display = 'none';
    result.innerHTML = `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p>Possible - Personality Traits, see below for a summary based on your results:</p>
            <p>15 - 21- You Need Help</p>
            <p>10 - 15 - Good Soul</p>
            <p>5 - 10 - Meh </p>
            <p>5 - Are You Even Real</p>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
    return;
  }
  generateQuestions(currentQuestion);
}

function quizGenerator() {
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  questionarray.forEach(currentQ);
    
    
  let currentQ=function(currentQuestion, questionNumber){
    // we'll want to store the list of answer choices
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
         </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="slide">
         <div class="question"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join("")} </div>
       </div>`
    );
  };




function loadPreviousQuestion() {
  currentQuestion--;
  score.pop();
  generateQuestions(currentQuestion);
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
  if (e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
  }
}

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// display quiz right away
buildQuiz();

const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(0);

generateQuestions(currentQuestion);
next-btn.addEventListener('click', loadNextQuestion);
previous-btn.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);
