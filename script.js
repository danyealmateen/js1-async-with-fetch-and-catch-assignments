// //warmup
// function getCountry() {
//   fetch("https://restcountries.com/v2/name/united")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let theData = document.createElement("div");
//       theData.innerHTML = `${data[0].name}`;
//       document.body.appendChild(theData);
//     });
// }
// getCountry();

//Välj ut 5 övningsuppgifter från senaste övningsuppgifterna och gör om dem med fetch. Ha med både then och catch.
//1.Hämta en random hundbildsurl av en dalmatiner och visa bilden på Webbsidan.
// function getDogs() {
//   let url = "https://dog.ceo/api/breeds/image/random";
//   fetch(url)
//     .then((response) => response.json())

//     .then((data) => {
//       let dogDiv = document.createElement("div");
//       dogDiv.innerHTML = `<img id="dogImg" src="https://images.dog.ceo/breeds/maltese/n02085936_2999.jpg"/>`;
//       document.body.appendChild(dogDiv);
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// getDogs();

//2.Hämta 10 random bilder av pomeranians och visa på webbsidan.
// function getPoms() {
//   let url = "https://dog.ceo/api/breed/pomeranian/images/random/10";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.message.forEach((mess) => {
//         let pomDiv = document.createElement("div");
//         pomDiv.innerHTML = `<img class="rando" src="${mess}" alt="picOfPomeranian"/>`;
//         document.body.appendChild(pomDiv);
//         console.log(data);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// getPoms();

//3.Hämta info om ett random öl och presentera beskrivningen och ‘food pairing’ i html-element.
// function getBeer() {
//   let url = "https://api.punkapi.com/v2/beers";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       let beerDiv = document.createElement("div");
//       beerDiv.innerHTML = `<div>${data[0].description}</div><hr>${data[0].food_pairing}`;
//       document.body.appendChild(beerDiv);
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(`FAILED ERROR ==> ${error}`);
//     });
// }
// getBeer();

//4. Hämta info om ett random öl och visa namnet på ölen och en bild på ölen i HTML-element.
function displayBeer() {
  let url = "https://api.punkapi.com/v2/beers";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let displayBeerDiv = document.createElement("div");
      displayBeerDiv.innerHTML = `Name of the beer is ${data[0].name} <img id="beer" src="${data[0].image_url}" alt="picofbeerbottle"/>`;
      document.body.appendChild(displayBeerDiv);
      //name
      //image_url
      console.log(data[0]);
    })
    .catch((error) => {
      let errorMessage = document.createElement("p");
      errorMessage.innerHTML = `ERROR ERROR --> ${error}`;
      document.body.appendChild(errorMessage);
      console.log(`ERROR ERROR --> {error}`);
    });
}
displayBeer();
