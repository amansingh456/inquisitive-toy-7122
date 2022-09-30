import navBar from "./component/nav.js"
let navBar_div = document.querySelector("nav")
navBar_div.innerHTML =  navBar()








import foot from "./component/foot.js"


let footer_div = document.getElementById("footer")
footer_div.innerHTML = foot()









//! getting data and appending data for store page #################


var storedata = JSON.parse(localStorage.getItem("storedata")) ;
console.log(storedata)

localStorage.setItem("data",JSON.stringify(storedata));
var product = JSON.parse(localStorage.getItem("data"));

function searchfun(){
    var value = document.getElementById("search").value;

    var searchData =product.filter(function(el){
        return el.title.includes(value.toUpperCase());
    });
    console.log(searchData)
    display(searchData);
}


display(storedata);

////// store creation starts ///////////////////////////////////////

function display(storedata){
document.querySelector(".container").innerHTML = "";
  storedata.map(function(elem,index,array){


    var mainDiv=document.createElement("div");
    mainDiv.setAttribute("class","card");
    mainDiv.addEventListener("click",function(){
        openstore(elem);
    })
 
    var img=document.createElement("img");
    img.setAttribute("src",elem.img1);
 
    var name=document.createElement("p");
    name.innerText=elem.title;
    name.setAttribute("class","sptitle");
 
    var mrp=document.createElement("p");
    mrp.innerText="MRP";
    mrp.setAttribute("class","mrp");
 
    var striked = document.createElement("s");
    striked.innerText=elem.striked;
    // striked.setAttribute("class","striked");
    var strikedoff = document.createElement("div")
    strikedoff.setAttribute("class","strikedoff");
 
    var price=document.createElement("div");
    price.innerText="₹"+elem.price;
    price.setAttribute("class","newPrice")
 
 // image percentafe off
 
    var dis=document.createElement("div");
   dis.innerText=elem.dis+"% OFF";
   dis.setAttribute("class","percentOff");
 
   strikedoff.append(mrp,striked)  
   mainDiv.append(img,name,strikedoff,price,dis);
     document.querySelector(".container").append(mainDiv);
 
 });
 
 function openstore(elem){
 
 localStorage.setItem("prodata",JSON.stringify(elem));
 // console.log(data)
 window.location.href="cart.html"
 }

 
}