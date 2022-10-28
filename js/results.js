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
  'https://www.expedia.com/Hotel-Search?adults=2&children=&destination=Niagara%20Falls%2C%20New%20York%2C%20United%20States%20of%20America&endDate=2022-11-09&price=0&price=120&regionId=602721&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent=&vip=false'
);
let yellowstone = new Destination(
  'Yellowstone National Park, Wyoming',
  'lowprice',
  'cold',
  'lowdensity',
  'aab',
  'jpg',
  'img/yellowstone-lowprice-cold-lowdensity.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Livingston%2C%20Montana%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&hotels-destination=Livingston%2CAspen&l10n=%5Bobject%20Object%5D&latLong=45.661411%2C-110.559959&localDateFormat=M%2Fd%2Fyyyy&neighborhood=8604&partialStay=false&price=0&price=150&regionId=8604&semdtl=&sort=RECOMMENDED&star=50&startDate=2022-11-08&theme=&useRewards=false&userIntent=&vip=false'
);
let niagara = new Destination(
  'Niagara Falls, New York',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg',
  'img/niagara-lowprice-cold-highdensity.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&children=&destination=Niagara%20Falls%2C%20New%20York%2C%20United%20States%20of%20America&endDate=2022-11-09&price=0&price=120&regionId=602721&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent=&vip=false'
);
let rockefeller = new Destination(
  'Rockefeller Center, New York',
  'lowprice',
  'cold',
  'highdensity',
  'abb',
  'jpg',
  'img/rockefeller-lowprice-cold-highdensity.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Livingston%2C%20Montana%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&hotels-destination=Livingston%2CAspen&l10n=%5Bobject%20Object%5D&latLong=45.661411%2C-110.559959&localDateFormat=M%2Fd%2Fyyyy&neighborhood=8604&partialStay=false&price=0&price=150&regionId=8604&semdtl=&sort=RECOMMENDED&star=50&startDate=2022-11-08&theme=&useRewards=false&userIntent=&vip=false'
);
let aspen = new Destination(
  'Aspen, Colorado',
  'highprice',
  'cold',
  'highdensity',
  'bbb',
  'jpg',
  'img/aspen-highprice-cold-highdensity.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Aspen%2C%20Colorado%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&hotels-destination=Aspen&l10n=%5Bobject%20Object%5D&latLong=39.189079%2C-106.819748&localDateFormat=M%2Fd%2Fyyyy&partialStay=false&price=0&price=300&regionId=423&semdtl=&sort=RECOMMENDED&star=50&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);
let stmortiz = new Destination(
  'St. Moritz, Switzerland',
  'highprice',
  'cold',
  'highdensity',
  'bbb',
  'jpg',
  'img/stmortiz-highprice-cold-highdensity.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=St.%20Moritz%2C%20Graubuenden%2C%20Switzerland&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&hotels-destination=St.%20Moritz&l10n=%5Bobject%20Object%5D&latLong=46.49791%2C9.83877&localDateFormat=M%2Fd%2Fyyyy&neighborhood=9898&partialStay=false&price=0&price=300&regionId=9898&semdtl=&sort=RECOMMENDED&star=50&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);
let kirkenes = new Destination(
  'Kirkenes, Norway',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg',
  'img/kirkenes-highprice-cold-lowdensity.jpg',
  'https://www.expedia.com/South-Varanger-Hotels-Snowhotel-Kirkenes.h33802052.Hotel-Information'
);
let solitudemountain = new Destination(
  'Solitude Mountain, Utah',
  'highprice',
  'cold',
  'lowdensity',
  'bab',
  'jpg',
  'img/solitudemountain-highprice-cold-lowdensity.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Solitude%20Mountain%20Resort%2C%20Brighton%2C%20Utah%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&l10n=%5Bobject%20Object%5D&latLong=40.61371165665074%2C-111.60283620535104&localDateFormat=M%2Fd%2Fyyyy&partialStay=false&price=0&price=300&regionId=6093109&semdtl=&sort=RECOMMENDED&star=50&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);

let grandcanyon = new Destination(
  'Grand Canyon, Arizona',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg',
  'img/grandcanyon-lowprice-warm-lowdensity-arid.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Grand%20Canyon%2C%20Arizona%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&hotels-destination=Grand%20Canyon&l10n=%5Bobject%20Object%5D&latLong=36.046996%2C-112.115054&localDateFormat=M%2Fd%2Fyyyy&neighborhood=6140738&partialStay=false&price=0&price=120&regionId=6140738&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);
let deathvalley = new Destination(
  'Death Valley National Park, California',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpg',
  'img/deathvalley-lowprice-warm-lowdensity-arid.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Death%20Valley%2C%20California%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&hotels-destination=death%20valley&l10n=%5Bobject%20Object%5D&localDateFormat=M%2Fd%2Fyyyy&neighborhood=54985&partialStay=false&price=0&price=120&regionId=54985&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);
let lasvegas = new Destination(
  'Las Vegas, Nevada',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg',
  'img/lasvegas-lowprice-warm-highdensity-arid.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Las%20Vegas%20%28and%20vicinity%29%2C%20Nevada%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&hotels-destination=las%20vegas%2CAspen&l10n=%5Bobject%20Object%5D&localDateFormat=M%2Fd%2Fyyyy&neighborhood=178276&partialStay=false&price=0&price=120&regionId=178276&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent=&vip=false'
);
let sanantonio = new Destination(
  'San Antonio, Texas',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpg',
  'img/sanantonio-lowprice-warm-highdensity-arid.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=San%20Antonio%20%28and%20vicinity%29%2C%20Texas%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&l10n=%5Bobject%20Object%5D&latLong=29.42362%2C-98.4873&localDateFormat=M%2Fd%2Fyyyy&neighborhood=178303&partialStay=false&price=0&price=90&regionId=178303&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);
let hoggarmountains = new Destination(
  'Hoggar Mountains, Algeria',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpg',
  'img/hoggarmountains-highprice-warm-lowdensity-arid.jpg',
  'https://www.expedia.com/Tamanrasset.d3485.Destination-Travel-Guides'
);
let pyramids = new Destination(
  'Pyramids at Giza, Egypt',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/pryamids-highprice-warm-lowdensity-arid.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Giza%20Pyramid%20Complex%2C%20Giza%2C%20Giza%20Governorate%2C%20Egypt&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&l10n=%5Bobject%20Object%5D&latLong=29.97738181394544%2C31.131875387721845&localDateFormat=M%2Fd%2Fyyyy&partialStay=false&price=150&price=300&regionId=6073067&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);
let dubai = new Destination(
  'Dubai, UAE',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/dubai-highprice-warm-highdensity-arid.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Dubai%2C%20United%20Arab%20Emirates&directFlights=false&endDate=2022-11-09&hotels-destination=Dubai&l10n=%5Bobject%20Object%5D&latLong=25.110714%2C55.394882&localDateFormat=M%2Fd%2Fyyyy&partialStay=false&regionId=1079&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);
let expensivevegas = new Destination(
  'Las Vegas, Nevada',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/expensivevegas-highprice-warm-highdensity-arid.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Las%20Vegas%20Strip%2C%20Paradise%2C%20Nevada%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&guestRating=&hotelName=&hotels-destination=Las%20Vegas%20Strip&l10n=%5Bobject%20Object%5D&latLong=36.114708%2C-115.172852&localDateFormat=M%2Fd%2Fyyyy&neighborhood=800045&partialStay=false&price=300&price=300&regionId=800045&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);

let kepuhibeach = new Destination(
  'Kepuhi Beach, Molokai Island, Hawaii',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg',
  'img/kepuhibeach-lowprice-warm-lowdensity-beach.jpeg',
  'https://www.expedia.com/Maunaloa-Hotels-Ocean-View-Condo-In-Kepuhi-Beach.h70964255.Hotel-Information?chkin=2022-11-08&chkout=2022-11-09&x_pwa=1&rfrr=HSR&pwa_ts=1666720787669&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=180076&destination=Molokai%2C+Hawaii%2C+United+States+of+America&destType=MARKET&price=0%2C150&sort=RECOMMENDED&top_dp=92&top_cur=USD&userIntent=&selectedRoomType=70964255&selectedRatePlan=00044296c79750a840819572ea0cde20f51b&damageLiability=COF'
);
let montanadeoro = new Destination(
  'Montaña de Oro State Park, California',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'jpeg',
  'img/montanadeoro-lowprice-warm-lowdensity-beach.jpeg',
  'https://www.expedia.com/San-Luis-Obispo-Hotels-456-Embarcadero-Inn-Suites.h973233.Hotel-Information?chkin=2022-11-08&chkout=2022-11-09&x_pwa=1&rfrr=HSR&pwa_ts=1666721075609&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=553248621532639980&destination=Montana+De+Oro+State+Park%2C+Los+Osos%2C+California%2C+United+States+of+America&destType=MARKET&sort=RECOMMENDED&top_dp=131&top_cur=USD&userIntent=&selectedRoomType=201211272&selectedRatePlan=205735378'
);
let panamacitybeach = new Destination(
  'Panama City, Florida',
  'lowprice',
  'warm',
  'lowdensity',
  'aaa',
  'png',
  'img/panamacitybeach-lowprice-warm-lowdensity-beach.png',
  'https://www.expedia.com/Panama-City-Hotels-Beachside-Resort-Panama-City-Beach.h904980.Hotel-Information?chkin=2022-11-08&chkout=2022-11-09&x_pwa=1&rfrr=HSR&pwa_ts=1666720475747&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=6048212&destination=Florida+Panhandle%2C+Florida%2C+United+States+of+America&destType=MARKET&sort=RECOMMENDED&top_dp=89&top_cur=USD&userIntent=&selectedRoomType=200313254&selectedRatePlan=201900022'
);
let myrtlebeach = new Destination(
  'Myrtle Beach, South Carolina',
  'lowprice',
  'warm',
  'highdensity',
  'aba',
  'jpeg',
  'img/myrtletropical-lowprice-warm-highdensity-tropical.jpg',
  'https://www.expedia.com/Hotel-Search?adults=2&children=&destination=Myrtle%20Beach%2C%20South%20Carolina%2C%20United%20States%20of%20America&endDate=2022-11-09&price=0&price=150&regionId=601685&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent=&vip=false'
);
let miami = new Destination(
  'Miami Beach, Florida',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpeg',
  'img/miami-highprice-warm-highdensity-beach.jpeg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Miami%20Beach%2C%20Florida%2C%20United%20States%20of%20America&directFlights=false&endDate=2022-11-09&hotels-destination=Miami%20Beach&l10n=%5Bobject%20Object%5D&latLong=25.790653%2C-80.130043&localDateFormat=M%2Fd%2Fyyyy&partialStay=false&regionId=8833&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);
let galapagos = new Destination(
  'Galapagos Islands, Ecuador',
  'highprice',
  'warm',
  'highdensity',
  'bba',
  'jpg',
  'img/galapagos-highprice-warm-highdensity-beach.jpg',
  'https://www.expedia.com/Galapagos.d1371.Destination-Travel-Guides'
);
let parrotbay = new Destination(
  'Parrot Cay, Turks And Caicos',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg',
  'img/parrotbay-highprice-warm-lowdensity-beach.jpeg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Parrot%20Cay%2C%20North%20Caicos%2C%20Turks%20and%20Caicos&directFlights=false&endDate=2022-11-09&hotels-destination=COMO%20Parrot%20Cay&l10n=%5Bobject%20Object%5D&latLong=21.936057%2C-72.054107&localDateFormat=M%2Fd%2Fyyyy&partialStay=false&regionId=6049878&selected=551998&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent='
);
let cocoprive = new Destination(
  'Coco Privé, Maldives',
  'highprice',
  'warm',
  'lowdensity',
  'baa',
  'jpeg',
  'img/cocoprive-highprice-warm-lowdensity-beach.jpeg',
  'https://www.expedia.com/Hotel-Search?adults=2&d1=2022-11-08&d2=2022-11-09&destination=Coco%20Priv%C3%A9%2C%20C98J%2BR4G%2C%20Kuda%20Hithi%20Island%2C%20Kuda%20Hithi%2020079%2C%20Maldives&directFlights=false&endDate=2022-11-09&hotels-destination=Coco%20Priv%C3%A9%2C%20Maldives&hotels-destination=COMO%20Parrot%20Cay&l10n=%5Bobject%20Object%5D&localDateFormat=M%2Fd%2Fyyyy&partialStay=false&semdtl=&sort=RECOMMENDED&startDate=2022-11-08&theme=&useRewards=false&userIntent='
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

let locationCode = localStorage.getItem('locationcode');
let userName = localStorage.getItem('name');
let description1 = document.getElementById('description1');
let locationSlist = document.createElement('ul');
let locationpic = document.createElement('ul');
let imgBox = document.getElementById('pic1');
description1.appendChild(locationSlist);
imgBox.appendChild(locationpic);
let greeting = document.getElementById('greeting');

let expediaLink = document.getElementById('expedia1');
let expdiaList = document.createElement('ul');
expediaLink.appendChild(expdiaList);

greeting.innerText = `${localStorage.getItem(
  'name'
)}, here is the list of places you should visit!`;
answerResult();
function answerResult() {
  for (let i = 0; i < locations.length; i++) {
    if (locationCode === locations[i].code) {
      console.log(`${userName} matches your preference!`);
      let locationlist = document.createElement('li');
      locationlist.innerText = `${locations[i].name}`;
      locationSlist.appendChild(locationlist);

      let locationimg = document.createElement('li');
      locationimg.innerHTML = `<img src="${locations[i].src}" width=240px height=auto>`;
      locationpic.appendChild(locationimg);

      let expediaSrc = document.createElement('li');
      expediaSrc.innerHTML = `<a href=${locations[i].expediaLink}> ${locations[i].name}</a>`;
      expdiaList.appendChild(expediaSrc);
    }
  }
}
