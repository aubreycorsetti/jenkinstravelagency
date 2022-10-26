

//constructor function
function Destination(name, price, climate, density, fileextension='jpg',location = undefined) {
  this.name = name;
  this.price = price; //low,medium,high
  this.climate = climate; //warm,cold
  this.density = density; //highdensity, lowdensity
  this.fileextension = fileextension
  this.location = location; //beach, tropical, arid
  this.img=`img/${name}-${price}-${climate}-${density}-${location}.${fileextension}`;//img link */
}
//test location array//
let bali = new Destination("Bali", "high", "warm", "low", "beach");
let bali1 = new Destination("Bali1", "high", "cold", "high", "beach");
let bali2 = new Destination("Bali2", "low", "warm", "high", "beach");
let bali3 = new Destination("Bali3", "high", "cold", "low", "beach");
let bali4 = new Destination("Bali4", "low", "warm", "high", "beach");
let bali5 = new Destination("Bali5", "low", "warm", "low", "beach");
let bali6 = new Destination("Bali6", "high", "cold", "high", "beach");
let locations = [bali, bali1, bali2, bali3, bali4, bali5, bali6];

//sample questions//

const questionArray = [
  {
    question: "How much do you want to spend on your next vacation?",
    a: "<$150",
    b: "Between $150 and $300",
    c: "More than $300",
    options: ["a", "b", "c"],
  },
  {
    question: "Warmer vs Cooler/Colder",
    a: "Warmer",
    b: "Colder",
    options: ["a", "b"],
  },
  {
    question: "Beach Vs. Arid vs. Tropical",
    a: "Beach",
    b: "Arid",
    c: "Tropical",
    options: ["a", "b", "c"],
  },
  {
    question: "Large crowd vs. Serene Vacation",
    a: "Large Crowded spot",
    b: "Serene Vacation",
    options: ["a", "b"],
  },
];

const questionBox = document.getElementById("question");
const answersElem = document.querySelectorAll(".question");
/* const questions = document.getElementById('questions');
 */
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const submitBtn = document.getElementById("submit");


let current = 0;
let points = 0;

loadQuestions();

function loadQuestions() {
  deselectAnswers();
  const currentquestionArray = questionArray[current];
  questionBox.innerText = currentquestionArray.question;
  //answer options will be part of label.option element
  if (currentquestionArray.options.length === 2) {
    option1.innerText = currentquestionArray.a;
    option2.innerText = null;
    option3.innerText = currentquestionArray.b;
  } else{
    option1.innerText = currentquestionArray.a;
    option2.innerText = currentquestionArray.b;
    option3.innerText = currentquestionArray.c;
  }

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

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === "a") {
      points++;
    } else if (answer === "b") {
      points++;
    } else if (answer === "c") {
      points++;
    }

    current++;
    if (current < questionArray.length) {
      loadQuestions();
    } else if (current === questionArray.length) {
      alert("The end");
    }
  }
});
/* else if(currentQuestion===questionArray.length) {
  if(points >20 && points<=30){
    quiz.innerHTML = `<h2>You got ${points} points. You like adventure.</h2> <button onclick="location.reload()">Reload</button>`;
  }else if(points>10 && points<=20) {
    quiz.innerHTML = `<h2>You got ${points} points. You like everything.</h2> <button onclick="location.reload()">Reload</button>`;
  }else if (points>0 && points<=10) {
    quiz.innerHTML = `<h2>You got ${points} points. You like peaceful retreat</h2> <button onclick="location.reload()">Reload</button>`;
  }
  } */
