'use strict';
function Destination(
  name,
  price,
  climate,
  density,
  code,
  fileextension = 'jpg',
  src
) {
  this.name = name;
  this.price = price; //low,medium,high
  this.climate = climate; //warm,cold
  this.density = density; //highdensity, lowdensity
  this.fileextension = fileextension;
  this.src = src;
  this.code = code;
}
//test location array//

let niagarafalls = new Destination(
  'niagarafalls',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg',
  'img/niagarafalls-lowprice-cold-lowdensity.jpg'
);
let yellowstone = new Destination(
  'yellowstone',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg',
  'img/yellowstone-lowprice-cold-lowdensity.jpg'
);
let niagara = new Destination(
  'niagara',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg',
  'img/niagara-lowprice-cold-highdensity.jpg'
);
let rockefeller = new Destination(
  'rockefeller',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg',
  'img/rockefeller-lowprice-cold-highdensity.jpg'
);
let aspen = new Destination('aspen', 'highprice', 'cold', 'highdensity','bbb' ,'jpg', 'img/aspen-highprice-cold-highdensity.jpg');
let stmortiz = new Destination(
  'stmortiz',
  'highprice',
  'cold',
  'highdensity',
  'bbb',
  'jpg',
  'img/stmortiz-highprice-cold-highdensity.jpg'
);
let kirkenes = new Destination(
  'kirkenes',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg',
  'img/kirkenes-highprice-cold-lowdensity.jpg'
);
let solitudemountain = new Destination(
  'solitudemountain',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg',
  'img/solitudemountain-highprice-cold-lowdensity.jpg'
);

let grandcanyon = new Destination(
  'grandcanyon',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg',
  'img/grandcanyon-lowprice-warm-lowdensity-arid.jpg'
);
let deathvalley = new Destination(
  'deathvalley',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg',
  'img/deathvalley-lowprice-warm-lowdensity-arid.jpg'
);
let lasvegas = new Destination(
  'lasvegas',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg',
  'img/lasvegas-lowprice-warm-highdensity-arid.jpg'
);
let sanantonio = new Destination(
  'sanantonio',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg',
  'img/sanantonio-lowprice-warm-highdensity-arid.jpg'
);
let hoggarmountains = new Destination(
  'hoggarmountains',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpg',
  'img/hoggarmountains-highprice-warm-lowdensity-arid.jpg'
);
let pyramids = new Destination(
  'pyramids',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/pryamids-highprice-warm-lowdensity-arid.jpg'
);
let dubai = new Destination(
  'dubai',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/dubai-highprice-warm-highdensity-arid.jpg'
);
let expensivevegas = new Destination(
  'expensivevegas',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/expensivevegas-highprice-warm-highdensity-arid.jpg'
);

let kepuhibeach = new Destination(
  'kepuhibeach',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg',
  'img/kepuhibeach-lowprice-warm-lowdensity-beach.jpeg'
);
let montanadeoro = new Destination(
  'montanadeoro',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg',
  'img/montanadeoro-lowprice-warm-lowdensity-beach.jpeg'
);
let panamacitybeach = new Destination(
  'panamacitybeach',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'png',
  'img/panamacitybeach-lowprice-warm-lowdensity-beach.png'
);
let myrtlebeach = new Destination(
  'myrtlebeach',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpeg',
  'img/myrtletropical-lowprice-warm-highdensity-tropical.jpg'
);
let miami = new Destination(
  'miami',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpeg',
  'img/miami-highprice-warm-highdensity-beach.jpeg'
);
let galapagos = new Destination(
  'galapagos',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/galapagos-highprice-warm-highdensity-beach.jpg'
);
let parrotbay = new Destination(
  'parrotbay',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg',
  'img/parrotbay-highprice-warm-lowdensity-beach.jpeg'
);
let cocoprive = new Destination(
  'cocoprive',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg',
  'img/cocoprive-highprice-warm-lowdensity-beach.jpeg'
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

let locationCode=localStorage.getItem('locationcode');
let userName=localStorage.getItem('name');
let description1 = document.getElementById('description1');
let locationSlist=document.createElement('ul');
let locationpic=document.createElement('ul');
let imgBox=document.getElementById('pic1');
description1.appendChild(locationSlist);
imgBox.appendChild(locationpic);
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
      locationimg.innerHTML=`<img src="${locations[i].src}" width=240px height=auto>`;
      locationpic.appendChild(locationimg);
    }
  }
}
