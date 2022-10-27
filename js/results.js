'use strict';
function Destination(
  name,
  price,
  climate,
  density,
  code,
  fileextension = 'jpg',
  src,
  expediaLink
) {
  this.name = name;
  this.price = price; //low,medium,high
  this.climate = climate; //warm,cold
  this.density = density; //highdensity, lowdensity
  this.fileextension = fileextension;
  this.src = src;
  this.code = code;
  this.expediaLink = expediaLink;
}
//test location array//

let niagarafalls = new Destination(
  'Niagara Falls, New York',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg',
  'img/niagarafalls-lowprice-cold-lowdensity.jpg',
  '[Visit Niagara Falls](https://www.expedia.com/Hotel-Search?adults=2&children=&destination=Niagara%20Falls%2C%20New%20York%2C%20United%20States%20of%20America&endDate=2022-11-09&price=0&price=120&regionId=602721&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent=&vip=false)'
);
let yellowstone = new Destination(
  'Yellowstone National Park, Wyoming',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg',
  'img/yellowstone-lowprice-cold-lowdensity.jpg'
);
let niagara = new Destination(
  'Niagara Falls, New York',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg',
  'img/niagara-lowprice-cold-highdensity.jpg'
);
let rockefeller = new Destination(
  'Rockefeller Center, New York',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg',
  'img/rockefeller-lowprice-cold-highdensity.jpg'
);
let aspen = new Destination('Aspen, Colorado', 'highprice', 'cold', 'highdensity','bbb' ,'jpg', 'img/aspen-highprice-cold-highdensity.jpg');
let stmortiz = new Destination(
  'St. Moritz, Switzerland',
  'highprice',
  'cold',
  'highdensity',
  'bbb',
  'jpg',
  'img/stmortiz-highprice-cold-highdensity.jpg'
);
let kirkenes = new Destination(
  'Kirkenes, Norway',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg',
  'img/kirkenes-highprice-cold-lowdensity.jpg'
);
let solitudemountain = new Destination(
  'Solitude Mountain, Utah',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg',
  'img/solitudemountain-highprice-cold-lowdensity.jpg'
);

let grandcanyon = new Destination(
  'Grand Canyon, Arizona',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg',
  'img/grandcanyon-lowprice-warm-lowdensity-arid.jpg'
);
let deathvalley = new Destination(
  'Death Valley National Park, California',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg',
  'img/deathvalley-lowprice-warm-lowdensity-arid.jpg'
);
let lasvegas = new Destination(
  'Las Vegas, Nevada',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg',
  'img/lasvegas-lowprice-warm-highdensity-arid.jpg'
);
let sanantonio = new Destination(
  'San Antonio, Texas',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg',
  'img/sanantonio-lowprice-warm-highdensity-arid.jpg'
);
let hoggarmountains = new Destination(
  'Hoggar Mountains, Algeria',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpg',
  'img/hoggarmountains-highprice-warm-lowdensity-arid.jpg'
);
let pyramids = new Destination(
  'Pyramids at Giza, Egypt',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/pryamids-highprice-warm-lowdensity-arid.jpg'
);
let dubai = new Destination(
  'Dubai, UAE',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/dubai-highprice-warm-highdensity-arid.jpg'
);
let expensivevegas = new Destination(
  'Las Vegas, Nevada',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/expensivevegas-highprice-warm-highdensity-arid.jpg'
);

let kepuhibeach = new Destination(
  'Kepuhi Beach, Molokai Island, Hawaii',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg',
  'img/kepuhibeach-lowprice-warm-lowdensity-beach.jpeg'
);
let montanadeoro = new Destination(
  'Montaña de Oro State Park, California',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg',
  'img/montanadeoro-lowprice-warm-lowdensity-beach.jpeg'
);
let panamacitybeach = new Destination(
  'Panama City, Florida',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'png',
  'img/panamacitybeach-lowprice-warm-lowdensity-beach.png'
);
let myrtlebeach = new Destination(
  'Myrtle Beach, South Carolina',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpeg',
  'img/myrtletropical-lowprice-warm-highdensity-tropical.jpg'
);
let miami = new Destination(
  'Miami Beach, Florida',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpeg',
  'img/miami-highprice-warm-highdensity-beach.jpeg'
);
let galapagos = new Destination(
  'Galapagos Islands, Ecuador',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/galapagos-highprice-warm-highdensity-beach.jpg'
);
let parrotbay = new Destination(
  'Parrot Cay, Turks And Caicos',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg',
  'img/parrotbay-highprice-warm-lowdensity-beach.jpeg'
);
let cocoprive = new Destination(
  'Coco Privé, Maldives',
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
let expedia1 = document.getElementById('expedia1');
let description1 = document.getElementById('description1');
let locationSlist=document.createElement('ul');
let locationsLink=document.createElement('ul');
let locationpic=document.createElement('ul');
let imgBox=document.getElementById('pic1');
description1.appendChild(locationSlist);
expedia1.appendChild(locationsLink);
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
      locationlist.innerText=(`${locations[i].name} matches your preference!`);
      locationSlist.appendChild(locationlist);


      let locationimg=document.createElement('li');
      locationimg.innerHTML=`<img src="${locations[i].src}" width=240px height=auto>`;
      locationpic.appendChild(locationimg);

      let locationLink=document.createElement('li');
      locationLink.innerHTML=(`${locations[i].expediaLink}`);
      locationsLink.appendChild(locationLink);
    }
  }
}
