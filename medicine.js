import navBar from "./component/nav.js"
let navBar_div = document.querySelector("nav")
navBar_div.innerHTML =  navBar()








import foot from "./component/foot.js"


let footer_div = document.getElementById("footer")
footer_div.innerHTML = foot()





var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel-cell");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}