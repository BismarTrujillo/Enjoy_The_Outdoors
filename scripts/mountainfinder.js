"use strict";

window.onload = init;

function init() {
    const mountainListBtn = document.getElementById("mountainListBtn");
    mountainListBtn.onclick = mountainListBtnOnClick;
    mountainDropdown();
    mountainListBtnOnClick();
}
function informationCardMaker(mountain) {
    let cardLocationContainer = document.getElementById("cardLocationContainer");

    let card = document.createElement("div");
    card.className = "card col-md-8 col-lg-8 m-5 pb-2";
    card.style.width = "800px";
    cardLocationContainer.appendChild(card);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    let img = document.createElement("img");
    img.src = "images/"+mountainsArray[mountain].img;
    img.alt = mountainsArray[mountain].name;
    img.className = "card-img";
    card.appendChild(img);


    let title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = mountainsArray[mountain].name;
    cardBody.appendChild(title);

    let text1 = document.createElement("p");
    text1.className = "card-text";
    text1.innerText = "Effort: " + mountainsArray[mountain].effort + "     Elevation: " + mountainsArray[mountain].elevation;
    cardBody.appendChild(text1);

    let text2 = document.createElement("p");
    text2.className = "card-text";
    text2.innerText = mountainsArray[mountain].desc;
    cardBody.appendChild(text2);

    let text3 = document.createElement("p");
    text3.className = "card-text";
    text3.innerText = "Coordinates: Lat: " + mountainsArray[mountain].coords.lat + "  Lng: " + mountainsArray[mountain].coords.lng;
    cardBody.appendChild(text3);
//<img src="..." class="card-img-top" alt="...">
}
function mountainDropdown() {
    const mountainList = document.getElementById("mountainList");
    let blankOption = document.createElement("option");
    blankOption.textContent = "Select Location";
    mountainList.appendChild(blankOption);

    for (let mountain in mountainsArray) {
        let optionMountain = document.createElement("option");
        optionMountain.textContent = mountainsArray[mountain].name;
        mountainList.appendChild(optionMountain);
    }
}
function mountainListBtnOnClick() {
    cardLocationContainer.innerHTML = "";
    let selectedMountainOption = document.getElementById("mountainList").value;
    for (let mountain in mountainsArray) {
        if (selectedMountainOption == mountainsArray[mountain].name) {
            informationCardMaker(mountain);
        }
    }
}
