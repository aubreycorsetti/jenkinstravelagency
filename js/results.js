function Destination(
  name,
  price,
  climate,
  density,
  code,
  fileextension = 'jpg'
) {
  this.name = name;
  this.price = price; //low,medium,high
  this.climate = climate; //warm,cold
  this.density = density; //highdensity, lowdensity
  this.fileextension = fileextension;
  this.src = `img/${name}-${price}-${climate}-${density}.${fileextension}`; //img link */
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
// let scottsdale = new Destination('scottsdale', 'mediumprice', 'warm', 'highdensity', 'jpg', 'arid');
// let palmsprings = new Destination('palmsprings', 'mediumprice', 'warm', 'highdensity', 'jpg', 'arid');
// let sedona = new Destination('sedona', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'arid');
// let mojavedesert = new Destination('mojavedesert', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'arid');
// let picturedrocksnational = new Destination('picturedrocksnational', 'mediumprice', 'cold', 'lowdensity', 'jpg');
// let leavenworth = new Destination('leavenworth', 'mediumprice', 'cold', 'highdensity', 'jpg');
// let asheville = new Destination('asheville', 'mediumprice', 'cold', 'lowdensity', 'jpeg');
// let bigsky = new Destination('bigsky', 'mediumprice', 'cold', 'lowdensity', 'jpeg');
// let grandcayman = new Destination('grandcayman', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let hiltonhead = new Destination('hiltonhead', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let orlando = new Destination('orlando', 'mediumprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let santacruz = new Destination('santacruz', 'mediumprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let pensacola = new Destination('pensacola', 'lowprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let hohrainforest = new Destination('hohrainforest', 'lowprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let myrtletropical = new Destination('myrtletropical', 'lowprice', 'warm', 'highdensity','jpg', 'tropical');
// let southpadretropical = new Destination('southpadretropical', 'lowprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let lizardisland = new Destination('lizardisland', 'highprice', 'warm', 'lowdensity', 'jpeg', 'tropical');
// let laucalaisland = new Destination('laucalaisland', 'highprice', 'warm', 'lowdensity', 'jpg', 'tropical');
// let kauaihawaii = new Destination('kauaihawaii', 'highprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let cookislands = new Destination('cookislands', 'highprice', 'warm', 'highdensity', 'jpg', 'tropical');
// let negriljamaica = new Destination('negriljamaica', 'mediumprice', 'warm', 'highdensity', 'jpg', 'beach');
// let rivieramaya = new Destination('rivieramaya', 'mediumprice', 'warm', 'highdensity', 'jpg', 'beach');
// let keywest = new Destination('keywest', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'beach');
// let tybeebeach = new Destination('tybeebeach', 'mediumprice', 'warm', 'lowdensity', 'jpg', 'beach');

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

let locationCode=localStorage.getItem('locationcode');
let userName=localStorage.getItem('name');
let description1 = document.getElementById('description1');
let locationSlist=document.createElement('ul');
let locationpic=document.createElement('ul');
let imgBox=document.getElementById('pic1');
description1.appendChild(locationSlist);
let greeting=document.getElementById('greeting');

greeting.innerText=`${localStorage.getItem('name')}, here is the list of places you should visit!`;
answerResult();
function answerResult(){
  for(let i=0; i<locations.length; i++) {
    if(locationCode===locations[i].code){
      /* location.href = '../results.html'; */
      /* questionBox.innerText=`Based on your answers we highly recommend ${locations[i].name}`; */
      console.log(`${locations[i].name.toUpperCase()} matches your preference!`);
      let locationlist=document.createElement('li');
      locationlist.innerText=(`${locations[i].name.toUpperCase()} matches your preference!`);
      locationSlist.appendChild(locationlist);


      let locationimg=document.createElement('li');
      imgBox.innerHTML=`<img src="../${locations[i].src}" width=240px height=auto>`;
      locationpic.appendChild(locationimg);
    }
  }
}
