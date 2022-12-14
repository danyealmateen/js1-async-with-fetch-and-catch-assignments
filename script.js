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

// 2.Hämta 10 random bilder av pomeranians och visa på webbsidan.
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

// //3.Hämta info om ett random öl och presentera beskrivningen och ‘food pairing’ i html-element.
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

// //4. Hämta info om ett random öl och visa namnet på ölen och en bild på ölen i HTML-element.
// function displayBeer() {
//   let url = "https://api.punkapi.com/v2/beers";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       let displayBeerDiv = document.createElement("div");
//       displayBeerDiv.innerHTML = `Name of the beer is ${data[0].name} <img id="beer" src="${data[0].image_url}" alt="picofbeerbottle"/>`;
//       document.body.appendChild(displayBeerDiv);
//       //name
//       //image_url
//       console.log(data[0]);
//     })
//     .catch((error) => {
//       let errorMessage = document.createElement("p");
//       errorMessage.innerHTML = `ERROR ERROR --> ${error}`;
//       document.body.appendChild(errorMessage);
//       console.log(`ERROR ERROR --> {error}`);
//     });
// }
// displayBeer();

// //5. Hämta info om ett random öl och visa namnen på alla ingredienser i HTML-element.
// function ingBeer() {
//   let url = "https://api.punkapi.com/v2/beers";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       let theIngBeer = document.createElement("div");

//       data[0].ingredients.hops.forEach((hop) => {
//         let theHops = document.createElement("p");
//         theHops.innerHTML = `Here are the hops ingredients: ${hop.name}<hr>`;
//         document.body.appendChild(theHops);
//         console.log(hop.name);
//       });
//       document.body.appendChild(theIngBeer);
//       console.log(data);
//     })
//     .catch((error) => {
//       let errorMessage = document.createElement("div");
//       errorMessage.innerHTML = `ERROR ERROR ==> ${error}`;
//       document.body.appendChild(errorMessage);
//       console.log(`ERROR ERROR! ${error}`);
//     });
// }
// ingBeer();

//ASYNC MED FETCH UPPGIFTER
//1. DOG API
//Använd ett form i html:en.
//Använd infon från formuläret för att sätta ihop rätt url.
//Använd i url:en i fetch.
//Visa datan i DOM:en
//Visa ett error i DOM:en om något går fel. (via catch)
//Hämta 10 random bilder av en hundras som användaren får ange. Visa alla bilder på webbsidan.

// let button = document.getElementById("button");

// button.addEventListener("click", (prevent) => {
//   prevent.preventDefault();
//   emptyContainer();
//   getInfoFromApi();
// });

// function getInfoFromApi() {
//   let input = document.getElementById("input").value;
//   let inputNum = document.getElementById("inputNum").value;
//   let url = `https://dog.ceo/api/breed/${input}/images/random/${inputNum}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.message.forEach((mess) => {
//         let creatingDiv = document.createElement("div");
//         creatingDiv.innerHTML = `<img id="pic" src="${mess}"/>`;
//         document.getElementById("container").appendChild(creatingDiv);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       let errorMessage = document.createElement("h3");
//       errorMessage.innerHTML = `ERROR ERROR --> ${error}`;
//       document.body.appendChild(errorMessage);
//     });
// }

// function emptyContainer() {
//   document.getElementById("container").innerHTML = "";
// }

//2.CHUCK NORRIS Låt användaren söka på en kategori och hämta ett random skämt i den kategorin. Visa skämtet.

// let button = document.getElementById("button");

// button.addEventListener("click", (prevent) => {
//   prevent.preventDefault();
//   getChuckJokes();
//   console.log("click");
// });

// function getChuckJokes() {
//   let input = document.getElementById("input").value;
//   let url = `https://api.chucknorris.io/jokes/random?category=${input}`;
//   console.log(input);
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       let jokeDiv = document.createElement("div");
//       jokeDiv.innerHTML = `${data.value}`;
//       document.body.appendChild(jokeDiv);
//       console.log(data.value);
//     });
// }

//3.Låt en användare söka på öl genom att ange ett namn. Visa namn, bild och beskrivning för ett enda öl.

// //Hämtar in knappen.
// let button = document.getElementById("button");

// //Skapar en div och sätter ett ID.
// let beerDiv = document.createElement("div");
// beerDiv.setAttribute("id", "divven");

// //Skapar en paragraf.
// let beerPara = document.createElement("p");

// //När man klickar på knappen ska ett event och en funktion köras. Eventet (event) ska hindra sidan från att refresha och funktionen (getBeer()) hämtar API , bryter ner det , och renderar det till sidan.
// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   getBeer();
// });

// //Funktionen
// function getBeer() {
//   //Ett inputvärde där användaren kan skriva in namnet på det de söker
//   let input = document.getElementById("input").value;

//   //URL för att hämta API:et.
//   let url = `https://api.punkapi.com/v2/beers?beer_name=${input}`;
//   console.log(input);

//   //Hämtar apiet
//   fetch(url)
//     //Responset man får konverteras från json till js objekt.
//     //.then() är ett promise som representerar om den asynkroniska operationen failar eller inte samt visar resultatets värde.
//     .then((response) => response.json())
//     .then((data) => {
//       //En forEach loop som går igenom datan vi hämtade och bryter arrayen till objekt.
//       data.forEach((obj) => {
//         //Paragrafen vi skapade innan skriver ut namn, beskrivning och en bild från objektet.
//         beerPara.innerHTML = `Name of beer: ${obj.name} <hr> ${obj.description} <hr> <img src="${obj.image_url}"/>`;
//         //Vi lägger till paragrafen i diven som vi skapade tidigare.
//         beerDiv.appendChild(beerPara);
//         //Vi lägger till diven till HTML sidan så att vi kan rendera.
//         document.body.appendChild(beerDiv);
//         console.log(data);
//       });
//     })
//     //.catch() returnerar också ett promise som triggas när failade operationer uppstår.
//     .catch((error) => {
//       console.log(error);
//     });
// }

//Låt en användare ange vilken mat som ska passa till ölen och sök fram öl som passar. Visa namnet för alla öl i svaret.
// let button = document.getElementById("button");
// let foodDiv = document.createElement("div");
// foodDiv.setAttribute("id", "foodDiv");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   wichFood();
//   clearContainer();
// });

// function wichFood() {
//   let input = document.getElementById("input").value;
//   let url = `https://api.punkapi.com/v2/beers?food=${input}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((obj) => {
//         let foodPara = document.createElement("p");
//         foodPara.innerHTML = `Following beers go good with ${input} <hr> ${obj.name}`;
//         foodDiv.appendChild(foodPara);
//         document.body.appendChild(foodDiv);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// function clearContainer() {
//   foodDiv.innerHTML = "";
// }

//Låt användaren välja ett datum och visa namnet på alla öl som har bryggts innan det datumet.//brewed_before
//https://api.punkapi.com/v2/beers?brewed_before=11-2012

// let button = document.getElementById("button");
// let dateDiv = document.createElement("div");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("clicked!");
//   beerDate();
//   clearContainer();
// });

// function beerDate() {
//   let input = document.getElementById("input").value;
//   let url = `https://api.punkapi.com/v2/beers?brewed_before=?${input}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((obj) => {
//         let datePara = document.createElement("p");
//         datePara.innerHTML = `${obj.name}`;
//         dateDiv.appendChild(datePara);
//         document.body.appendChild(dateDiv);
//       });
//     });
// }

// function clearContainer() {
//   dateDiv.innerHTML = "";
// }

//BORED API
//1. Låt en användare söka på en typ av aktivitet. Hämta en random aktivitet och visa i DOM:en
//http://www.boredapi.com/api/activity?type=recreational

// let button = document.getElementById("button");
// let activeDiv = document.createElement("div");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   clearContainer();
//   getActivity();
// });

// function getActivity() {
//   let input = document.getElementById("input").value;
//   let inputNumber = document.getElementById("inputNumber").value;
//   let checkbox = document.getElementById("checkbox");
//   const FREE = 0.0;

//   const price = checkbox.checked ? `&price=${FREE}` : "";

//   let url = `http://www.boredapi.com/api/activity?type=${input}&participants=${inputNumber}${price}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       let activePara = document.createElement("p");
//       activePara.innerHTML = `${data.activity}`;
//       activeDiv.appendChild(activePara);
//       document.body.appendChild(activeDiv);
//       console.log(data);
//     })
//     .catch((error) => {
//       let errorMessage = document.createElement("div");
//       errorMessage.innerHTML = `ERROR ERROR --> ${error}`;
//       document.body.appendChild(errorMessage);
//       console.log(error);
//     });
// }

// function clearContainer() {
//   activeDiv.innerHTML = "";
// }

//REMAKE DOING IT ALL OVER AGAIN!
// DOG API
//1. Hämta 10 random bilder av en hundras som användaren får ange. Visa alla bilder på webbsidan.
//2. Låt även användaren bestämma hur många bilder som ska hämtas. Tex 5 husky, 2 dalmatians osv.

// let button = document.getElementById("button");
// let createDiv = document.createElement("div");
// let errorMessage = document.createElement("p");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   clearContainer();
//   tenPicturesOfDogs();
//   console.log("click works");
// });

// function tenPicturesOfDogs() {
//   let input = document.getElementById("input").value;
//   let inputNum = document.getElementById("inputNum").value;
//   let url = `https://dog.ceo/api/breed/${input}/images/random/${inputNum}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.message.forEach((pic) => {
//         createDiv.innerHTML += `<img src="${pic}"/>`;
//       });
//       document.body.appendChild(createDiv);
//       console.log(data.message);
//     })
//     .catch((error) => {
//       console.log(error);
//       errorMessage.innerHTML = `ERROR ERROR --> ${error}`;
//       document.body.appendChild(errorMessage);
//     });
// }

// function clearContainer() {
//   createDiv.innerHTML = "";
// }

//CHUCK NORRIS JOKES!
//1.Låt användaren söka på en kategori och hämta ett random skämt i den kategorin. Visa skämtet.

// let button = document.getElementById("button");
// let createDiv = document.createElement("div");
// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   generateJoke();
// });

// function generateJoke() {
//   let input = document.getElementById("input").value;
//   let url = `https://api.chucknorris.io/jokes/random?category=${input}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       createDiv.innerHTML = `${data.value}`;
//       document.body.appendChild(createDiv);
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

//PUNK API
//1. Låt en användare söka på öl genom att ange ett namn. Visa namn, bild och beskrivning för ett enda öl.
// let input = document.getElementById("input").value;
// let button = document.getElementById("button");
// let createDiv = document.createElement("div");
// let createPara = document.createElement("p");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   getBeer();
// });

// function getBeer() {
//   let input = document.getElementById("input").value;
//   let url = `https://api.punkapi.com/v2/beers?beer_name=${input}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((obj) => {
//         createPara.innerHTML = `${obj.name} <hr> ${obj.description}<hr> <img src="${obj.image_url}"/> `;
//       });
//       createDiv.appendChild(createPara);
//       document.body.appendChild(createDiv);
//       console.log(data);
//     })
//     .catch((error) => {
//       let errorMessage = document.createElement("p");
//       errorMessage.innerHTML = ` ERROR ERROR ==> ${error}`;
//       document.body.appendChild(errorMessage);
//       console.log(error);
//     });
// }

//2.Låt en användare ange vilken mat som ska passa till ölen och sök fram öl som passar. Visa namnet för alla öl i svaret.

let button = document.getElementById("button");
let createDiv = document.createElement("div");
let createPara = document.createElement("p");

button.addEventListener("click", (event) => {
  event.preventDefault();
  checkBeerFood();
});

function checkBeerFood() {
  let input = document.getElementById("input").value;
  let url = `https://api.punkapi.com/v2/beers?food=${input}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((obj) => {
        createPara.innerHTML += ` <li>${obj.name}</li>`;
      });
      createDiv.appendChild(createPara);
      document.body.appendChild(createDiv);
      console.log(data);
    })
    .catch((error) => {
      let errorMessage = document.createElement("h1");
      errorMessage.innerHTML = `ERROR ERROR ==> ${error}`;
      document.body.appendChild(errorMessage);
      console.log(error);
    });
}
