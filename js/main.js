//1: Easiest
//1.1:
console.log(
  "dog/cat services are Boarding , House Sitting. Dog Walking, Doggy Day Care, Drop-In Visits"
);
//1.2:
document.title = "We're the CAT People";

//2: Harder
//2.3: When the user click on button the text and color will change it is toggle
function isClicked() {
  var btnText = document.getElementById("myBtn");
  if (btnText.innerHTML == "Book your next Rover sitter") {
    btnText.innerHTML = "Thanks!";
    btnText.style.backgroundColor = "lightgray";
  } else {
    btnText.innerHTML = "Book your next Rover sitter";
    btnText.style.backgroundColor = "#14a96d";
  }
}

//3: Hardest
//3.1: Wehen the user click on the menu the list will show and it is toggle
let mainNav = document.getElementById("js-menu"); //ID the menue
let navBarToggle = document.getElementById("js-navbar-toggle"); //ID of menu
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

//3.2: When the user cick on the Sign up the model will show
var modal = document.getElementById("myModal"); //ID Parent Model
var span = document.getElementsByClassName("close")[0]; //ID of X
var submitt = document.getElementById("btnSubmit"); //ID of submit button

function showModel() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; //To ensure the page not scrolling
}

//1 When click on submit button the window will close
function isClosed() {
  console.log("buttton");
   modal.style.display = "none";
   document.body.style.overflow = "visible";
}
//2 When click on X the window will close
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
};

//3 When click on anywhere in page the window will close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }
};
//Change The text and background and color depend on the text
document.getElementById("heading").addEventListener("click", myFunction);
function myFunction() {
    console.log("h1 clicked");
    if (document.getElementById("heading").innerHTML == "We're the CAT People") {
        document.getElementById("heading").innerHTML = "We're the DOG People";
        document.getElementById("heading").style.color = "lightgreen";
        document.getElementById("container").style.background = " url('img/dog.png')";
        document.getElementById("container").style.backgroundSize = "cover";
        document.title = "We're the DOG People";
    } 
    else {
        document.getElementById("heading").innerHTML = "We're the CAT People";
        document.getElementById("heading").style.color = "#ffbb43";
        document.getElementById("container").style.background = "url('img/banner.jpg')";
        console.log("it it it ");
        document.getElementById("container").style.backgroundSize = "cover";
        document.title = "We're the CAT People";
    }
}