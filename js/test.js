

let event1=[
        "./images/logo/logo-jua.png",
        "Asian Championships Individuals 2024",
        "272 athletes - 36 nations",
        "./images/countries/hk.svg",
        "April 20-22"
];

let event2=[
    "./images/logo/logo-eju.png",
    "Lignano Juior European Cup 2024",
    "496 athletes - 29 nations",
    "./images/countries/it.svg",
    "April 20-21"
];

let event3=[
    "./images/logo/logo-aju.png",
    "Grand Slam Africa 2024",
    "1000 athletes - 29 nations",
    "./images/countries/af.svg",
    "Oct 27-30"
];

const events = document.querySelector(".event-information");

function createEventCard([logo,eventName,eventAthletes,country,date]){
    let code = `
    <div class="event-card">
        <div class="event-logo">
            <img src="${logo}"alt="${eventName}">
        </div>
        <div class="event-name">
            <h3>${eventName}</h3>
            <p>${eventAthletes}</p>
        </div>
        <div class="event-country">
            <img src="${country}" alt="country">
        </div>
        <div class="event-date">
            <h3>${date}</h3>
        </div>
        
    </div>
    `;
    events.innerHTML += code;
}
createEventCard(event1);
createEventCard(event2);
createEventCard(event3);


