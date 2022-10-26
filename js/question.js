

//constructor function
function Destination(name, price, climate, density, fileextension='jpg',location = undefined) {
  this.name = name;
  this.price = price; //low,medium,high
  this.climate = climate; //warm,cold
  this.density = density; //highdensity, lowdensity
  this.fileextension = fileextension
  this.location = location; //beach, tropical, arid
  this.src=`img/${name}-${price}-${climate}-${density}-${location}.${fileextension}`;//img link */
}
//test location array//
let pyramids = new Destination("pyramids", "highcost", "warm", "highdensity",'jpg' ,"arid",);
let picturedrocksnational = new Destination("picturedrocksnational", "mediumcost", "cold",'jpeg' ,"lowdensity");
let parrotbay = new Destination("parrotbay", "highcost", "warm", "lowdensity",'jpeg' ,"beach");
let panamacitybeach = new Destination("panamacitybeach", "lowcost", "warm", "lowdensity",'png', "beach");
let niagarafalls = new Destination("niagarafalls", "lowcost", "cold", "lowdensity", 'jpg');
let myrtlebeach = new Destination("myrtlebeach", "lowcost", "warm", "highdensity","jpeg" ,"beach");
let montanadeoro = new Destination("montanadeoro", "lowcost", "warm", "lowdensity","jpeg","beach");
let miami= new Destination('miami','highcost','warm','highdensity','jpeg','beach');
let marcoisland= new Destination('marcoisland','highcost','warm','highdensity','jpeg','beach');
let kepuhibeach = new Destination('kepuhibeach','lowcost','warm','lowdensity','jpeg','beach');
let cocoprive=new Destination('cocoprive','highcost','warm','lowdensity','jpeg','beach');
let bigsky=new Destination('bigsky','mediumcost','cold','lowdensity','jpeg');
let asheville=new Destination('asheville','mediumcost','cold','lowdensity','jpeg');


let locations=[pyramids,picturedrocksnational,parrotbay,panamacitybeach,niagarafalls,myrtlebeach,montanadeoro,miami,marcoisland,kepuhibeach,cocoprive,bigsky,asheville];
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
