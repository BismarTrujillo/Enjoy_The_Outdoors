# Enjoy_The_Outdoors
# Description

Enjoy_The_Outdoors is a website that allows you to search through many Nations Parks, Memorials, Rivers
Mountains and many more Outdoor activities


## Website
![1](https://user-images.githubusercontent.com/90363619/203221278-f06052c5-c9e5-46c4-9068-d4448eee42a4.jpg)
![2](https://user-images.githubusercontent.com/90363619/203221293-d3361bd5-25ab-452b-bc44-7156d3a9b426.jpg)
![3](https://user-images.githubusercontent.com/90363619/203221298-4e416b91-dc23-463c-a83e-bafff9bfe1fe.jpg)
![4](https://user-images.githubusercontent.com/90363619/203221310-be4956af-3fb8-4ada-bce6-6c6cfedff4d9.jpg)

## Interesting piece of Javascript

A challege that I faced with this project was that I wanted to programmatically create and 
append Bootstrap Cards for each National Park and Mountain information found using the given
Javascript files with raw data.
```javascript
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
    function parkTypeListBtnOnClick() {
    cardLocationContainer.innerHTML = "";
    let selectedParkTypeOption = document.getElementById("searchByParkTypeList").value;
    for (let park in nationalParksArray) {
        if ((nationalParksArray[park].LocationName).indexOf(selectedParkTypeOption) != -1) {
            informationCardMaker(park);
        }
    }
}




