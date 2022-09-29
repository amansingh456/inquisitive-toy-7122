//slider fw20_0095

var slid1 =[
    
  
    "https://cdn01.pharmeasy.in/dam/banner/banner/d37aa6a886e-Flash-Sale_634x274.jpg",
  
  
   "https://cdn01.pharmeasy.in/dam/banner/banner/37176137470-POCK27.jpg",
   
  
  
   "https://cdn01.pharmeasy.in/dam/banner/banner/2faeb574eaa-slipper.jpg",
   
  
  
   "https://cdn01.pharmeasy.in/dam/banner/banner/51e34800f6d-HURRAY.jpg",
  
  
    "https://cdn01.pharmeasy.in/dam/banner/banner/c0034c14fe6-634X274.jpg",
  
  
   "https://cdn01.pharmeasy.in/dam/banner/banner/d37aa6a886e-Flash-Sale_634x274.jpg",
  
 ] ;
 var i = -1
 setInterval(function () {
   i++
   if (i == slid1.length) {
     i = 0
   }
   let slids = document.getElementById("slid1")
   slids.innerHTML = `<img src=${slid1[i]} alt="slid${i}">`
 }, 2000);

 
 var slid2 =[
    
 "https://cdn01.pharmeasy.in/dam/banner/banner/37176137470-POCK27.jpg",
 


 "https://cdn01.pharmeasy.in/dam/banner/banner/2faeb574eaa-slipper.jpg",
 


 "https://cdn01.pharmeasy.in/dam/banner/banner/51e34800f6d-HURRAY.jpg",


  "https://cdn01.pharmeasy.in/dam/banner/banner/c0034c14fe6-634X274.jpg",


 "https://cdn01.pharmeasy.in/dam/banner/banner/d37aa6a886e-Flash-Sale_634x274.jpg",

 "https://cdn01.pharmeasy.in/dam/banner/banner/d37aa6a886e-Flash-Sale_634x274.jpg",

] ;
var j = -1
 setInterval(function () {
   j++
   if (j == slid2.length) {
     j = 0
   }
   let slids = document.getElementById("slid2")
   slids.innerHTML = `<img src=${slid2[i]} alt="slid${j}">`
 }, 2000);







 var slid3 =[
    
  "https://cdn01.pharmeasy.in/dam/banner/banner/2faeb574eaa-slipper.jpg",
  
  "https://cdn01.pharmeasy.in/dam/banner/banner/51e34800f6d-HURRAY.jpg",
 
   "https://cdn01.pharmeasy.in/dam/banner/banner/c0034c14fe6-634X274.jpg",
 
  "https://cdn01.pharmeasy.in/dam/banner/banner/d37aa6a886e-Flash-Sale_634x274.jpg",
 
  "https://cdn01.pharmeasy.in/dam/banner/banner/d37aa6a886e-Flash-Sale_634x274.jpg",
  "https://cdn01.pharmeasy.in/dam/banner/banner/37176137470-POCK27.jpg",
  
 
 ] ;
 var k = -1
 setInterval(function () {
   k++
   if (k == slid3.length) {
     k = 0 
   }
   let slids = document.getElementById("slid3")
   slids.innerHTML = `<img src=${slid3[i]} alt="slid${k}">`
 }, 2000);
  



 //slider
