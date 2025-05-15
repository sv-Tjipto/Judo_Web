const gallery = document.querySelector(".gallery-page");

function createGalleryCard([logo,logoName,country,date,galleryLink]){
    let code = `
    <div class="gallery-card">
        <div class="gallery-logo">
            <img src="${logo}" class="judoka-profile"alt="${logoName}">
        </div>
        <div class="gallery-name">
            <h2>${logoName}</h2>
        </div>
        <div class="gallery-info">
            <img src="${country}" class="logo-country" alt="country">
            <h2>${date}</h2>
        </div>
        <div class="gallery-view">
            <a href="${galleryLink}">View gallery</a>
        </div>
    </div>
    `;
    gallery.innerHTML += code;
}

let gallery1=[
    "./images/logo/logo-jua.png",
    "Asian Championships Individuals 2024",
    "./images/countries/hk.svg",
    "April 20-22",
    "eventPhotos.html"
];

let gallery2=[
    "./images/logo/gp_aut2023_logo.png",
    "Heydar Aliyev Bakui Grand Slam 2023",
    "./images/countries/az.svg",
    "22-24 Sep",
    "eventPhotos.html"
];

let gallery3=[
    "./images/logo/wc_cad_teams2023_logo.png",
    "Zagreb Cadet World Championships 2023",
    "./images/countries/hr.svg",
    "27 Aug",
    "eventPhotos.html"
];

createGalleryCard(gallery1);
createGalleryCard(gallery2);
createGalleryCard(gallery3);