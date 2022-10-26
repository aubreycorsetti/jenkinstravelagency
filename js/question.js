

//constructor function
function Destination(name, price, climate, density, fileextension = 'jpg', location = undefined) {
  this.name = name;
  this.price = price; //low,medium,high
  this.climate = climate; //warm,cold
  this.density = density; //highdensity, lowdensity
  this.fileextension = fileextension;
  this.location = location; //beach, tropical, arid
  this.src = `img/${name}-${price}-${climate}-${density}-${location}.${fileextension}`;//img link */
}
//test location array//
let niagarafalls = new Destination('niagarafalls', 'lowprice', 'cold', 'lowdensity', 'jpg');
let yellowstone = new Destination('yellowstone', 'lowprice', 'cold', 'lowdensity', 'jpg');
let niagara = new Destination('niagara', 'lowprice', 'cold', 'highdensity', 'jpg');
let rockefeller = new Destination('rockefeller', 'lowprice', 'cold', 'highdensity', 'jpg');
let aspen = new Destination('aspen', 'highprice', 'cold', 'highdensity', 'jpg');
let stmortiz = new Destination('stmortiz', 'highprice', 'cold', 'highdensity', 'jpg');
let grandcanyon = new Destination('grandcanyon', 'lowprice', 'warm', 'lowdensity', 'jpg', 'arid');
let deathvalley = new Destination('deathvalley', 'lowprice', 'warm', 'lowdensity', 'jpg', 'arid');
let lasvegas = new Destination('lasvegas', 'lowprice', 'warm', 'highdensity', 'jpg', 'arid');
let sanantonio = new Destination('sanantonio', 'lowprice', 'warm', 'highdensity', 'jpg', 'arid');
let picturedrocksnational = new Destination('picturedrocksnational', 'mediumprice', 'cold', 'lowdensity', 'jpg');
let leavenworth = new Destination('leavenworth', 'mediumprice', 'cold', 'highdensity', 'jpg');
let asheville = new Destination('asheville', 'mediumprice', 'cold', 'lowdensity', 'jpeg');
let bigsky = new Destination('bigsky', 'mediumprice', 'cold', 'lowdensity', 'jpeg');
let miami = new Destination('miami', 'highprice', 'warm', 'highdensity', 'jpeg', 'beach');
let galapagos = new Destination('galapagos', 'highprice', 'warm', 'highdensity', 'jpg', 'beach');
let parrotbay = new Destination('parrotbay', 'highprice', 'warm', 'lowdensity', 'jpeg', 'beach');
let cocoprive = new Destination('cocoprive', 'highprice', 'warm', 'lowdensity', 'jpeg', 'beach');
let scottsdale = new Destination('scottsdale', 'mediumprice', 'warm', 'highdensity', 'jpg', 'arid');
let palmsprings = new Destination('palmsprings', 'mediumprice', 'warm', 'highdensity', 'jpg', 'arid');
let sedona = new Destination('sedona', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'arid');
let mojavedesert = new Destination('mojavedesert', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'arid');
let hoggarmountains = new Destination('hoggarmountains', 'highprice', 'warm', 'lowdensity', 'jpg', 'arid');
let pyramids = new Destination('pyramids', 'highprice', 'warm', 'highdensity', 'jpg', 'arid');
let dubai = new Destination('dubai', 'highprice', 'warm', 'highdensity', 'jpg', 'arid');
let expensivevegas = new Destination('expensivevegas', 'highprice', 'warm', 'highdensity', 'jpg', 'arid');
let grandcayman = new Destination('grandcayman', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'tropical');
let hiltonhead = new Destination('hiltonhead', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'tropical');
let orlando = new Destination('orlando', 'mediumprice', 'warm', 'highdensity', 'jpg', 'tropical');
let santacruz = new Destination('santacruz', 'mediumprice', 'warm', 'highdensity', 'jpg', 'tropical');
let kirkenes = new Destination('kirkenes', 'highprice', 'cold', 'lowdensity', 'jpg');
let solitudemountain = new Destination('solitudemountain', 'highprice', 'cold', 'lowdensity', 'jpg');
let pensacola = new Destination('pensacola', 'lowprice', 'warm', 'lowdensity', 'jpg', 'tropical');
let hohrainforest = new Destination('hohrainforest', 'lowprice', 'warm', 'lowdensity', 'jpg', 'tropical');
let myrtletropical = new Destination('myrtletropical', 'lowprice', 'warm', 'highdensity','jpg', 'tropical');
let southpadretropical = new Destination('southpadretropical', 'lowprice', 'warm', 'highdensity', 'jpg', 'tropical');
let lizardisland = new Destination('lizardisland', 'highprice', 'warm', 'lowdensity', 'jpeg', 'tropical');
let laucalaisland = new Destination('laucalaisland', 'highprice', 'warm', 'lowdensity', 'jpg', 'tropical');
let kauaihawaii = new Destination('kauaihawaii', 'highprice', 'warm', 'highdensity', 'jpg', 'tropical');
let cookislands = new Destination('cookislands', 'highprice', 'warm', 'highdensity', 'jpg', 'tropical');
let negriljamaica = new Destination('negriljamaica', 'mediumprice', 'warm', 'highdensity', 'jpg', 'beach');
let rivieramaya = new Destination('rivieramaya', 'mediumprice', 'warm', 'highdensity', 'jpg', 'beach');
let keywest = new Destination('keywest', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'beach');
let tybeebeach = new Destination('tybeebeach', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'beach');
let kepuhibeach = new Destination('kepuhibeach', 'lowprice', 'warm', 'lowdensity', 'jpeg', 'beach');
let montanadeoro = new Destination('montanadeoro', 'lowprice', 'warm', 'lowdensity', 'jpeg', 'beach');
let panamacitybeach = new Destination('panamacitybeach', 'lowprice', 'warm', 'lowdensity', 'png', 'beach');
let myrtlebeach = new Destination('myrtlebeach', 'lowprice', 'warm', 'highdensity','jpeg', 'beach');


let locations = [yellowstone, niagarafalls, niagara, rockefeller, aspen, stmortiz, grandcanyon, deathvalley, lasvegas, sanantonio,picturedrocksnational, leavenworth, asheville, bigsky, miami, galapagos, parrotbay, cocoprive, scottsdale, palmsprings, sedona, mojavedesert, hoggarmountains, pyramids, dubai, expensivevegas, grandcayman, hiltonhead, orlando, santacruz, kirkenes, solitudemountain, pensacola, hohrainforest, myrtletropical, southpadretropical, lizardisland, laucalaisland, kauaihawaii, cookislands, negriljamaica, rivieramaya, keywest, tybeebeach, kepuhibeach, montanadeoro, panamacitybeach, myrtlebeach];
//sample questions//

const questionArray = [
  {
    question: 'How much would you like to spend on your vacation?',
    a: 'Less than $150',
    b: 'Between $150 and $300',
    c: 'More than $300',
    options: ['a', 'b', 'c'],
  },
  {
    question: 'Warmer vs Cooler/Colder',
    a: 'Warmer',
    b: 'Colder',
    options: ['a', 'b'],
  },
  {
    question: 'Beach Vs. Arid vs. Tropical',
    a: 'Beach',
    b: 'Arid',
    c: 'Tropical',
    options: ['a', 'b', 'c'],
  },
  {
    question: 'Large crowd vs. Serene Vacation',
    a: 'Large Crowded spot',
    b: 'Serene Vacation',
    options: ['a', 'b'],
  },
];

const questionBox = document.getElementById('question');
const answersElem = document.querySelectorAll('.question');
/* const questions = document.getElementById('questions');
 */
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const submitBtn = document.getElementById('submit');


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
  } else {
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

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === 'a') {
      points++;
    } else if (answer === 'b') {
      points++;
    } else if (answer === 'c') {
      points++;
    }

    current++;
    if (current < questionArray.length) {
      loadQuestions();
    } else if (current === questionArray.length) {
      alert('The end');
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
