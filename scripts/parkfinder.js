"use strict";

window.onload = init;

function init() {
    const locationListBtn = document.getElementById("locationListBtn");
    const parkTypeListBtn = document.getElementById("parkTypeListBtn");
    locationListBtn.onclick = searchByLocationOnClick;
    parkTypeListBtn.onclick = parkTypeListBtnOnClick;

    locationDropdown();
    parkTypeDropdown();
    searchByLocationOnClick();
    parkTypeListBtnOnClick();
}

function locationDropdown() {
    const searchByLocation = document.getElementById("searchByLocationList");
    let blankOption = document.createElement("option");
    blankOption.textContent = "Select Location";
    searchByLocation.appendChild(blankOption);

    for (let parks in locationsArray) {
        let optionLocation = document.createElement("option");
        optionLocation.textContent = locationsArray[parks];
        searchByLocation.appendChild(optionLocation);
    }
}
function parkTypeDropdown() {
    const searchByParkType = document.getElementById("searchByParkTypeList");
    let blankOption = document.createElement("option");
    blankOption.textContent = "Select Park Type";
    searchByParkType.appendChild(blankOption);

    for (let parks in parkTypesArray) {
        let optionParkType = document.createElement("option");
        optionParkType.textContent = parkTypesArray[parks];
        searchByParkType.appendChild(optionParkType);
    }
}
function informationCardMaker(park) {
    
    let cardLocationContainer = document.getElementById("cardLocationContainer");

    let card = document.createElement("div");
    card.className = "card col-sm-6 col-lg-3 m-4";
    cardLocationContainer.appendChild(card);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    let title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = nationalParksArray[park].LocationName;
    cardBody.appendChild(title);

    let text1 = document.createElement("p");
    text1.className = "card-text";
    text1.innerText = nationalParksArray[park].Address;
    cardBody.appendChild(text1);

    let text2 = document.createElement("p");
    text2.className = "card-text";
    text2.innerText = nationalParksArray[park].City + ", " + nationalParksArray[park].State + " " + nationalParksArray[park].ZipCode;
    cardBody.appendChild(text2);

    if (nationalParksArray[park].Visit != undefined) {
        let buttonSelectLocation = document.createElement("a")
        buttonSelectLocation.className = "btn btn-dark ";
        buttonSelectLocation.innerHTML = "Visit Us"
        buttonSelectLocation.href = nationalParksArray[park].Visit;
        buttonSelectLocation.target = "_blank"
        cardBody.appendChild(buttonSelectLocation);
    }


}
function searchByLocationOnClick() {
    cardLocationContainer.innerHTML = "";
    let selectedLocationOption = document.getElementById("searchByLocationList").value;
    for (let park in nationalParksArray) {
        if (selectedLocationOption == nationalParksArray[park].State) {
            informationCardMaker(park);
        }
    }
}
function parkTypeListBtnOnClick() {
    cardLocationContainer.innerHTML = "";
    let selectedParkTypeOption = document.getElementById("searchByParkTypeList").value;
    for (let park in nationalParksArray) {
        if ((nationalParksArray[park].LocationName).indexOf(selectedParkTypeOption) != -1) {
            informationCardMaker(park);
        }
    }
}





