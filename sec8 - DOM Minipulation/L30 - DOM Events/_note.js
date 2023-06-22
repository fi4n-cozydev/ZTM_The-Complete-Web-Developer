//! ref :
    // https://developer.mozilla.org/en-US/docs/Web/Events
    // https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

// document.getElementsByTagName("button");

//! -----------------------------------------------------------------------------

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function() {
// button.addEventListener("mouseleave", function() {

// button.addEventListener("click", function() {
//     console.log("CLICK!");
// })

//! -----------------------------------------------------------------------------

var btn = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        document.querySelector("input").style.color = "red";
    
        // console.log("click is working");
        // console.log(input.value);
    
        createListElement();
    } else {
        document.querySelector("input").placeholder = "this field can't empty!";
    }
}

function addListAfterKeyEnterPress(event) {
    if(inputLength() > 0 && event.code === "Enter") {
        document.querySelector("input").style.color = "red";

        // console.log(event.which);
        // console.log(event);

        createListElement();
    } else {
        document.querySelector("input").placeholder = "this field can't empty!";
    }  
}

document.querySelector("input").style.color = "blue";

btn.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyEnterPress);



