/*--fw20_0095--*/


//search bar import

    import {search_bar} from './search/searchbar.js';
    document.getElementById("searchdiv").innerHTML=search_bar();



 //search bar end

 


 var slids =[{
    img1:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
   
    title:"Medicine",

    dis:"UP TO 70% OFF",
    
  },
  {
    img1:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
   
    title:"Lab Tests",
   
    dis:"UP TO 30% OFF",
    
  },
  {
    img1:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
   
    title:"Healthcare",
   
    dis:" ",
   
  },
  {
    img1:"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
   
    title:"Health Blog",
   
    dis:" UP TO 30% OFF",
    
  },
  {
    img1:"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
   
    title:"Plus",
    dis:" ",
   
},
  {
    img1:"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
  
    title:"Offers",
   
    dis:" UP TO 30% OFF",
   
  },
  {
    img1:"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",
   
    title:"Surgeries",
    striked:"147.00" ,
    dis:"  UP TO 30% OFF",
  
  },
  {
    img1:"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
   
    title:"Value Store",
    striked:"649.00" ,
    dis:"65% OFF",
   
  },


 ] ;

  localStorage.setItem("slids",JSON.stringify(slids));
 
  function additem(){
    let slid = JSON.parse(localStorage.getItem("slids")) ;
   
console.log("gbbb");
console.log("slids :",slid);
let val = document.getElementById("type");
    slid.map((elem ) => {
    
              let box =document.createElement("div");
              box.id="minidiv";
          
              let img =document.createElement("img");
              img.setAttribute("src",elem.img1);
                img.setAttribute("id","m_image");

              let title =document.createElement("span");
              title.innerText=elem.title;


              let discount=document.createElement("span");
              discount.innerText=elem.dis;
              discount.style.color="#f79d9f";
             
              box.append(img , title ,discount );
             //document.getElementById(val).append(box);
           
             val.append(box);
  
    });  
  }

  additem();





//slider
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


 var data_lan= [
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1643880237.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FJ51815%2Fliveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-3-1643880236.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1643880237.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-3-1643880236.jpg?dim=100x0&dpr=1&q=100",
    title:"Liveasy Wellness Apple Cider Vinegar - 500ml Bottle",
    striked:"649.00" ,
    dis:"65% OFF",
    price:"227.15",
 },
 {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/Q42631/liveasy-foods-mix-berries-2-1641794266.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FQ42631%2Fliveasy-foods-mix-berries-6.1-1641794270.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/Q42631/liveasy-foods-mix-berries-2-1641794266.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/Q42631/liveasy-foods-mix-berries-6.1-1641794270.jpg?dim=100x0&dpr=1&q=100",
    title:"Liveasy Foods Mix Berries",
    striked:"499.00" ,
    dis:"60% OFF",
    price:"199.60",
 },
 {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/F60126/liveasy-essentials-respirometer-spirometer-lung-exerciser-2-1645456738.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FF60126%2Fliveasy-essentials-respirometer-spirometer-lung-exerciser-6.1-1645456739.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/F60126/liveasy-essentials-respirometer-spirometer-lung-exerciser-2-1645456738.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/F60126/liveasy-essentials-respirometer-spirometer-lung-exerciser-6.1-1645456739.jpg?dim=100x0&dpr=1&q=100",
    title:"Liveasy Essentials Respirometer / Spirometer - Lung Exerciser",
    striked:"599.00" ,
    dis:"60% OFF",
    price:"239.60",
 },
 {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/U58783/liveasy-wellness-immunity-pro-vitamin-c-zinc-with-herbal-immunity-blend-60-tablets-2-1643876968.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FU58783%2Fliveasy-wellness-immunity-pro-vitamin-c-zinc-with-herbal-immunity-blend-60-tablets-3-1643876660.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/U58783/liveasy-wellness-immunity-pro-vitamin-c-zinc-with-herbal-immunity-blend-60-tablets-2-1643876968.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/U58783/liveasy-wellness-immunity-pro-vitamin-c-zinc-with-herbal-immunity-blend-60-tablets-3-1643876660.jpg?dim=100x0&dpr=1&q=100",
    title:"Liveasy Wellness Immunity Pro - Vitamin C & Zinc -60 Tablets",
    striked:"799.00" ,
    dis:"55% OFF",
    price:"359.55",
 },
 
    ];

    localStorage.setItem("data_lan",JSON.stringify(data_lan));
  function Launches(){
    let Launches = document.getElementById("Launches");
      let data= JSON.parse(localStorage.getItem("data_lan")) ;
    console.log("gauri");
    //console.log("data:",data);
    data.map((elem )=> {
        let box=document.createElement("div");
        box.id="launch";
         let img =document.createElement("img");
              img.setAttribute("src",elem.img1); 
                img.setAttribute("id","img");

              let title =document.createElement("h5");
              title.innerText=elem.title;
  
              let price =document.createElement("h5");
              price.innerText=elem.price;
  
              let discount = document.createElement("h5");
              discount .innerText=elem.dis;
  
              box.append(img , title ,price,discount);
             
              Launches.append(box);
          
              
    });   
  
  }
  Launches();

let cat_data=[{
  img1:"https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1643883635.jpg?dim=320x320&dpr=1&q=100",
  img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2F181140%2Fvicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-3-1643883301.jpg&w=256&q=75",
  imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1643883635.jpg?dim=100x0&dpr=1&q=100",
  imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-3-1643883301.jpg?dim=100x0&dpr=1&q=100",
  title:"Vicks Vaporub 50ml, Relief From Cold, Headache And Body Pain",
  striked:"145.00" ,
  dis:"25% OFF",
  price:"108.75",
},

{
  img1:"https://cdn01.pharmeasy.in/dam/products_otc/I40046/vicks-inhaler-keychain-pack-of-1-2-1643880386.jpg?dim=320x320&dpr=1&q=100",
  img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FI40046%2Fvicks-inhaler-keychain-pack-of-1-3-1643880808.jpg&w=256&q=75",
  imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/I40046/vicks-inhaler-keychain-pack-of-1-2-1643880386.jpg?dim=100x0&dpr=1&q=100",
  imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/I40046/vicks-inhaler-keychain-pack-of-1-3-1643880808.jpg?dim=100x0&dpr=1&q=100",
  title:"Vicks Inhaler Keychain Pack Of 1",
  striked:"59.00" ,
  dis:"23% OFF",
  price:"45.43",
},
{
  img1:"https://cdn01.pharmeasy.in/dam/products_otc/G30601/vicks-roll-on-inhaler-2-1641793160.jpg?dim=320x320&dpr=1&q=100",
  img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FG30601%2Fvicks-roll-on-inhaler-6.1-1641793164.jpg&w=256&q=75",
  imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/G30601/vicks-roll-on-inhaler-2-1641793160.jpg?dim=100x0&dpr=1&q=100",
  imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/G30601/vicks-roll-on-inhaler-6.1-1641793164.jpg?dim=100x0&dpr=1&q=100",
  title:"Vicks Roll On Inhaler",
  striked:"89.00" ,
  dis:"15% OFF",
  price:"75.65",
},
{
  img1:"https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1643882373.jpg?dim=320x320&dpr=1&q=100",
  img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FI07006%2Fvicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-3-1643882516.jpg&w=256&q=75",
  imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1643882373.jpg?dim=100x0&dpr=1&q=100",
  imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-3-1643882516.jpg?dim=100x0&dpr=1&q=100",
  title:"Vaporub 110ml, Relief From Cold, Cough, Headache And Body Pain",
  striked:"250.00" ,
  dis:"14% OFF",
  price:"215.00",
},
{
  img1:"https://cdn01.pharmeasy.in/dam/products_otc/181145/vicks-vaporub-5ml-relief-from-cold-cough-headache-and-body-pain-2-1643883635.jpg?dim=320x320&dpr=1&q=100",
  img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2F181145%2Fvicks-vaporub-5ml-relief-from-cold-cough-headache-and-body-pain-3-1643884189.jpg&w=256&q=75",
  imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/181145/vicks-vaporub-5ml-relief-from-cold-cough-headache-and-body-pain-2-1643883635.jpg?dim=100x0&dpr=1&q=100",
  imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/181145/vicks-vaporub-5ml-relief-from-cold-cough-headache-and-body-pain-3-1643884189.jpg?dim=100x0&dpr=1&q=100",
  title:" Vaporub 5ml,Relief From Cold, Cough, Headache And Body Pain",
  striked:"21.00" ,
  dis:"5% OFF",
  price:"19.95",
},
{
  img1:"https://cdn01.pharmeasy.in/dam/products_otc/I07460/vicks-jar-big-1300t-2-1641787726.jpg?dim=320x320&dpr=1&q=100",
  img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FI07460%2Fvicks-jar-big-1300t-6.1-1641787725.jpg&w=256&q=75",
  imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/I07460/vicks-jar-big-1300t-2-1641787726.jpg?dim=100x0&dpr=1&q=100",
  imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/I07460/vicks-jar-big-1300t-6.1-1641787725.jpg?dim=100x0&dpr=1&q=100",
  title:"Vicks Jar Big 1300t",
  striked:"1180.00" ,
  dis:"5% OFF",
  price:"1121.00",
},
{
  img1:"https://cdn01.pharmeasy.in/dam/products_otc/I13536/vicks-babyrub-soothing-balm-comfort-for-babies-bottle-of-25-ml-1-1641787950.jpg?dim=320x320&dpr=1&q=100",
  img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FI13536%2Fvicks-babyrub-soothing-balm-comfort-for-babies-bottle-of-25-ml-2-1641787948.jpg&w=256&q=75",
  imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/I13536/vicks-babyrub-soothing-balm-comfort-for-babies-bottle-of-25-ml-1-1641787950.jpg?dim=100x0&dpr=1&q=100",
  imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/I13536/vicks-babyrub-soothing-balm-comfort-for-babies-bottle-of-25-ml-2-1641787948.jpg?dim=100x0&dpr=1&q=100",
  title:"Vicks Babyrub Soothing Balm Comfort For Babies Bottle Of 25 Ml",
  striked:"105.00" ,
  dis:"5% OFF",
  price:"99.75",
},
{
  img1:"https://cdn01.pharmeasy.in/dam/products_otc/R40178/vicks-vaporub-xtra-strong-50-ml-relief-from-cold-cough-headache-and-body-pain-2-1641794173.jpg?dim=320x320&dpr=1&q=100",
  img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FR40178%2Fvicks-vaporub-xtra-strong-50-ml-relief-from-cold-cough-headache-and-body-pain-6.1-1641794169.jpg&w=256&q=75",
  imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/R40178/vicks-vaporub-xtra-strong-50-ml-relief-from-cold-cough-headache-and-body-pain-2-1641794173.jpg?dim=100x0&dpr=1&q=100",
  imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/R40178/vicks-vaporub-xtra-strong-50-ml-relief-from-cold-cough-headache-and-body-pain-6.1-1641794169.jpg?dim=100x0&dpr=1&q=100",
  title:"Vicks Vaporub  50 Ml,Relief From Cold, Cough And Body Pain",
  striked:"175.00" ,
  dis:"5% OFF",
  price:"166.25",
},

];


localStorage.setItem("cat_data",JSON.stringify(cat_data));
 function Categories(){
    let cat_data = JSON.parse(localStorage.getItem("cat_data")) ;
   
    console.log("gbbb");
   
    let val = document.getElementById("Categories");
    cat_data.map((elem ) => {
        
                  let box =document.createElement("div");
                  
              
                  let img =document.createElement("img");
                  img.setAttribute("src",elem.img1);
                    img.setAttribute("id","m_image");
    
                  let title =document.createElement("h4");
                  title.innerText=elem.title;
      
                  
                 
                  box.append(img , title );
                 //document.getElementById(val).append(box);
               
                 val.append(box);
      
        }); 
 }

Categories();




   //footer part start

   import foot from "./component/foot.js";
   console.log('foot: ', foot);
   
   
   let footer_div = document.getElementById("footer");
   footer_div.innerHTML = foot();
   
    //footer part end
   
   
   //*  onclick link for another pages.....
   
   let google = document.getElementById("google").addEventListener("click", () => {
       window.location.href = "https://play.google.com/store/search?q=pharmeasy&c=apps"
   })
   
   let apple = document.getElementById("apple").addEventListener("click", () => {
       window.location.href = "https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643"
   })
   
   let insta = document.getElementById("insta").addEventListener("click", () => {
       window.location.href = "https://www.instagram.com/pharmeasyapp/"
   })
   
   
   let fb = document.getElementById("fb").addEventListener("click", () => {
       window.location.href = "https://www.facebook.com/pharmeasy/"
   })
   
   let yt = document.getElementById("yt").addEventListener("click", () => {
       window.location.href = "https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA"
   })
   
   let twitter = document.getElementById("twitter").addEventListener("click", () => {
       window.location.href = "https://twitter.com/pharmeasyapp?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
   })


   //footer part end
