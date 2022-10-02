import srch from "./component/searchBar.js";
import navBar from "./component/nav.js"
import foot from "./component/foot.js";
// console.log('foot: ', foot);


let searchBar_div = document.getElementById("search")
searchBar_div.innerHTML = srch()


let navBar_div = document.querySelector("nav")
navBar_div.innerHTML =  navBar()



let footer_div = document.getElementById("footer")
footer_div.innerHTML = foot()



