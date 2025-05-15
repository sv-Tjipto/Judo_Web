document.addEventListener('Account', function() {
    var loginImage = document.getElementById('loginImage');
    loginImage.addEventListener('click', function() {
        window.location.href = 'Login.html';
    });
});





const players = document.querySelector(".judoka-judokas");

function createPlayerCard([player,playerName,country]){
    let code = `
    <div class="judoka-card">
        <img src="${player}" class="judoka-profile"alt="${playerName}">
        <div class="judoka-info">
            <h2>${playerName}</h2>
            <img src="${country}" class="judoka-country" alt="country">
        </div>
    </div>
    `;
    players.innerHTML += code;
}

let player1=[
    "./images/players/Shohei Ono.jpg",
    "Shohei Ono",
    "./images/countries/jp.svg"
];
let player2=[
    "./images/players/Marco.jpg",
    "Marco",
    "./images/countries/hk.svg"
];
let player3=[
    "./images/players/Le_Marco.jpg",
    "Le Marco",
    "./images/countries/mx.svg"
];
let player4=[
    "./images/players/Wei_Wei.jpg",
    "Wei Wei",
    "./images/countries/sg.svg"
];
let player5=[
    "./images/players/Jun Hao.jpg",
    "Jun Hao",
    "./images/countries/sg.svg"
];
let player6=[
    "./images/players/Dee.jpg",
    "Dee",
    "./images/countries/sg.svg"
];

let player7=[
    "./images/players/Danny.jpg",
    "Danny",
    "./images/countries/tw.svg"
];
let player8=[
    "./images/players/Steve.jpg",
    "Steve",
    "./images/countries/au.svg"
];
let player9=[
    "./images/players/yx.jpg",
    "Da Lei Wang",
    "./images/countries/cn.svg"
];
let player10=[
    "./images/players/Cassy_K.jpg",
    "Cassy K",
    "./images/countries/sg.svg"
];

createPlayerCard(player1);
createPlayerCard(player2);

createPlayerCard(player3);
createPlayerCard(player4);
createPlayerCard(player5);

createPlayerCard(player6);
createPlayerCard(player7);
createPlayerCard(player8);

createPlayerCard(player9);

createPlayerCard(player10);


// const events = document.querySelector(".event-events");

// function createEventCard([logo,eventName,eventAthletes,country,date]){
//     let code = `
//     <div class="event-card">
//         <div class="event-logo">
//             <img src="${logo}"alt="${eventName}">
//         </div>
        
//     </div>
//     `;
//     events.innerHTML += code;
// }

// const tests = document.querySelector(".event-events");

// function createTestCard([logo]){
//     let code = `
//     <div class="event-card">
//         <div class="event-logo">
//             <img src="${logo}>
//         </div>
        
//     </div>
//     `;
//     events.innerHTML += code;
// };

// let test=[
//     "./images/logo/logo-jua.png"
// ];

// createTestCard(test);

// let event1=[
//     "./images/logo/logo-jua.png",
//     "Asian Championships Individuals 2024",
//     "272 athletes - 36 nations",
//     "./images/countries/hk.svg",
//     "April 20-22"
// ];

// createEventCard(event1);

// const eventInformation = document.querySelector(".event-information");

// function createEventCard([player,playerName,country]){
//     let code = `
//     <div class="gallery-card">
//         <img src="${player}" class="gallery-profile"alt="${playerName}">
//         <div class="gallery-info">
//             <h2>${playerName}</h2>
//             <img src="${country}" class="gallery-country" alt="country">
//         </div>
//     </div>
//     `;
//     eventInformation.innerHTML += code;
// }

// createEventCard(player1);


// const gallery = document.querySelector(".gallery-page");

// function createGalleryCard([logo,logoName,country,date,galleryLink]){
//     let code = `
//     <div class="gallery-card">
//         <div class="gallery-logo">
//             <img src="${logo}" class="judoka-profile"alt="${logoName}">
//         </div>
//         <div class="gallery-name">
//             <h2>${logoName}</h2>
//         </div>
//         <div class="judoka-info">
//             <img src="${country}" class="logo-country" alt="country">
//             <h3>${date}</h3>
//         </div>
//         <div class="event-view">
//             <a href="${galleryLink}">View gallery</a>
//         </div>
//     </div>
//     `;
//     gallery.innerHTML += code;
// }

// let gallery1=[
//     "./images/logo/logo-jua.png",
//     "Asian Championships Individuals 2024",
//     "./images/countries/hk.svg",
//     "April 20-22",
//     "eventPhotos.html"
// ];

// createGalleryCard(gallery1);