// Colour menu hover effect

const addAnimationClassColourList = function () {
    const colourMenu = document.getElementById("colour-menu");
    colourMenu.classList.toggle("menu-hover-animation");
}
const removeAnimationClassColourList = function () {
    const colourMenu = document.getElementById("colour-menu");
    colourMenu.classList.remove("menu-hover-animation");
}

const addHoverEventBarsElement = function() {
    const burgerBars = document.getElementById("bars");
    burgerBars.addEventListener("mouseover", addAnimationClassColourList);

    // burgerBars.addEventListener("mouseleave", removeAnimationClassColourList);
}

addHoverEventBarsElement();

// Bonus task of hover event, feedback of task given to Rishaan

// const addHoverEventDIV = function() {
//     const colourPicker = document.getElementById("colour-picker");
//     colourPicker.addEventListener("mouseover", addAnimationClassColourList);
//     colourPicker.addEventListener("mouseleave", removeAnimationClassColourList);

// }

// addHoverEventDIV();

// changing the classes to different backgrounds and removing them

const changeHomeBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.remove("green-background");
    bodyElement.classList.add("home-background");
    document.getElementById("colour-name").innerHTML = "Home";
    document.getElementById("radio-home").checked = true;
}

const changeRedBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.remove("green-background");
    bodyElement.classList.add("red-background");
    document.getElementById("colour-name").innerHTML = "Red";
    document.getElementById("radio-red").checked = true;
}

const changeOrangeBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.remove("green-background");
    bodyElement.classList.add("orange-background");
    document.getElementById("colour-name").innerHTML = "Orange";
    document.getElementById("radio-orange").checked = true;
}

const changePurpleBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("green-background");
    bodyElement.classList.add("purple-background");
    document.getElementById("colour-name").innerHTML = "Purple";
    document.getElementById("radio-purple").checked = true;
}

const changeGreenBackgroundColour = function () {
    const bodyElement = document.body;
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.add("green-background");
    document.getElementById("colour-name").innerHTML = "Green";
    document.getElementById("radio-green").checked = true;
}

// Applying the changes on the menu

const addClickEventHomeColour = function() {
    const homeColour = document.getElementById("home");
    homeColour.addEventListener("click", function() {
        changeHomeBackgroundColour();
        removeAnimationClassColourList();
    });
}

const addClickEventRedColour = function() {
    const redColour = document.getElementById("red");
    redColour.addEventListener("click", function() {
        changeRedBackgroundColour();
        removeAnimationClassColourList();
    });
}

const addClickEventOrangeColour = function() {
    const orangeColour = document.getElementById("orange");
    orangeColour.addEventListener("click", function() {
        changeOrangeBackgroundColour();
        removeAnimationClassColourList();
    });
}

const addClickEventPurpleColour = function() {
    const purpleColour = document.getElementById("purple");
    purpleColour.addEventListener("click", function() {
        changePurpleBackgroundColour();
        removeAnimationClassColourList();
    });
}

const addClickEventGreenColour = function() {
    const greenColour = document.getElementById("green");
    greenColour.addEventListener("click", function() {
        changeGreenBackgroundColour();
        removeAnimationClassColourList();
    });
}

// calling the functions

addClickEventHomeColour();
addClickEventRedColour();
addClickEventOrangeColour();
addClickEventPurpleColour();
addClickEventGreenColour();

// keypress identifier

window.addEventListener('keydown', function(event){

    if (event.key == 1) {
        changeHomeBackgroundColour();
    } else if (event.key == 2) {
        changeRedBackgroundColour();
    } else if (event.key == 3) {
        changeOrangeBackgroundColour();
    } else if (event.key == 4) {
        changePurpleBackgroundColour();
    } else if (event.key == 5) {
        changeGreenBackgroundColour();
    }
});