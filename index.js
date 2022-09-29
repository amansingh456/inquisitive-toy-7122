/*--fw20_0095--*/


//search bar import

    import {search_bar} from './search/searchbar.js';
    document.getElementById("searchdiv").innerHTML=search_bar();



 //search bar end

 


 var slids =[{
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/271929/kofol-sf-cough-syrup-bottle-of-100-ml-2-1641398970.jpg?dim=320x320&dpr=1&q=100",
   
    title:"Kofol Sf Cough Syrup Bottle Of 100 Ml",

    dis:"30% OFF",
    
  },
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/100360/kofol-cough-syrup-bottle-of-100-ml-2-1641264381.jpg?dim=320x320&dpr=1&q=100",
   
    title:"Kofol Cough Syrup Bottle Of 100 Ml",
   
    dis:"30% OFF",
    
  },
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/D58349/kofol-chewable-tablets-sugar-free-jar-of-20-2-1641789495.jpg?dim=320x320&dpr=1&q=100",
   
    title:"Kofol Chewable Tablets Sugar Free Jar Of 20",
   
    dis:"30% OFF",
   
  },
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/M05010/kofol-honey-lemon-lozenges-jar-of-200-2-1641788840.jpg?dim=320x320&dpr=1&q=100",
   
    title:"Kofol Honey Lemon Lozenges Jar Of 200",
   
    dis:"30% OFF",
    
  },
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-2-1643877043.jpg?dim=320x320&dpr=1&q=100",
   
    title:"Ayurvedic Relief Constipation Indigestion Gas & Acidity - 200gm",
   
    dis:"35% OFF",
   
},
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/Y40217/kofol-mint-lozenges-jar-of-200-2-1641788840.jpg?dim=320x320&dpr=1&q=100",
  
    title:"Kofol Mint Lozenges Jar Of 200",
   
    dis:"30% OFF",
   
  },
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/T00568/kofol-cough-syrup-bottle-of-200-ml-2-1641789500.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FT00568%2Fkofol-cough-syrup-bottle-of-200-ml-6.1-1641789496.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/T00568/kofol-cough-syrup-bottle-of-200-ml-2-1641789500.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/T00568/kofol-cough-syrup-bottle-of-200-ml-6.1-1641789496.jpg?dim=100x0&dpr=1&q=100",
    title:"Kofol Cough Syrup Bottle Of 200 Ml",
    striked:"147.00" ,
    dis:"30% OFF",
    price:"102.90",
  },
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


 ] ;

  localStorage.setItem("slids",JSON.stringify(slids));
 
  function additem(){
    let slid = JSON.parse(localStorage.getItem("slids")) ;
   
console.log("gbbb");
console.log("slids :",slid);
let val = document.getElementById("type");
    slid.map((elem ) => {
    
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


  var elem_data= [
    {
        img1:"https://cdn01.pharmeasy.in/dam/products_otc/J90056/baidyanath-janmghunti-220-ml-1-1641788779.jpg?dim=320x320&dpr=1&q=100",
        img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FJ90056%2Fbaidyanath-janmghunti-220-ml-2-1641788777.jpg&w=256&q=75",
        imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/J90056/baidyanath-janmghunti-220-ml-1-1641788779.jpg?dim=100x0&dpr=1&q=100",
        imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/J90056/baidyanath-janmghunti-220-ml-2-1641788777.jpg?dim=100x0&dpr=1&q=100",
        title:"Baidyanath Janmghunti - 220 Ml",
        striked:"145.00" ,
        dis:"35% OFF",
        price:"94.25",
    },
    {
        img1:"https://cdn01.pharmeasy.in/dam/products_otc/I14915/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-100g-2-1643881370.jpg?dim=320x320&dpr=1&q=100",
        img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FI14915%2Fbaidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-100g-3-1643881287.jpg&w=256&q=75",
        imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/I14915/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-100g-2-1643881370.jpg?dim=100x0&dpr=1&q=100",
        imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/I14915/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-100g-3-1643881287.jpg?dim=100x0&dpr=1&q=100",
        title:"Effective Constipation Relief|Rich Fibre Supplement - 100g",
        striked:"110.00" ,
        dis:"35% OFF",
        price:"71.50",
    },
    
    {
        img1:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-2-1643877043.jpg?dim=320x320&dpr=1&q=100",
        img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FO35914%2Fbaidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-3-1643877048.jpg&w=256&q=75",
        imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-2-1643877043.jpg?dim=100x0&dpr=1&q=100",
        imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-3-1643877048.jpg?dim=100x0&dpr=1&q=100",
        title:"Ayurvedic Relief Constipation Indigestion Gas & Acidity - 200gm",
        striked:"190.00" ,
        dis:"35% OFF",
        price:"123.50",
    },
    {
        img1:"https://cdn01.pharmeasy.in/dam/products_otc/I14915/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-100g-2-1643881370.jpg?dim=320x320&dpr=1&q=100",
        img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FI14915%2Fbaidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-100g-3-1643881287.jpg&w=256&q=75",
        imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/I14915/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-100g-2-1643881370.jpg?dim=100x0&dpr=1&q=100",
        imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/I14915/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-100g-3-1643881287.jpg?dim=100x0&dpr=1&q=100",
        title:"Effective Constipation Relief|Rich Fibre Supplement - 100g",
        striked:"110.00" ,
        dis:"35% OFF",
        price:"71.50",
    },
    
    {
        img1:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-2-1643877043.jpg?dim=320x320&dpr=1&q=100",
        img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FO35914%2Fbaidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-3-1643877048.jpg&w=256&q=75",
        imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-2-1643877043.jpg?dim=100x0&dpr=1&q=100",
        imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-3-1643877048.jpg?dim=100x0&dpr=1&q=100",
        title:"Ayurvedic Relief Constipation Indigestion Gas & Acidity - 200gm",
        striked:"190.00" ,
        dis:"35% OFF",
        price:"123.50",
    },
    {
      img1:"https://cdn01.pharmeasy.in/dam/products_otc/U86347/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-200g-2-1643876617.jpg?dim=320x320&dpr=1&q=100",
      img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FU86347%2Fbaidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-200g-3-1643876719.jpg&w=256&q=75",
      imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/U86347/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-200g-2-1643876617.jpg?dim=100x0&dpr=1&q=100",
      imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/U86347/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-200g-3-1643876719.jpg?dim=100x0&dpr=1&q=100",
      title:"Effective Constipation Relief|Rich Fibre Supplement - 200g",
      striked:"210.00" ,
      dis:"35% OFF",
      price:"136.50",
  }
    ];

    localStorage.setItem("elem_data",JSON.stringify(elem_data));
  function Launches(){
    let Launches = document.getElementById("Launches");
      let data= JSON.parse(localStorage.getItem("elem_data")) ;
    console.log("gauri");
    console.log("data:",data);
    data.map((elem )=> {
        let box=document.createElement("div");

         let img =document.createElement("img");
              img.setAttribute("src",elem.img1); 
                img.setAttribute("id","img");

              let title =document.createElement("h4");
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
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/U86347/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-200g-2-1643876617.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FU86347%2Fbaidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-200g-3-1643876719.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/U86347/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-200g-2-1643876617.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/U86347/baidyanath-isabgol-psyllium-husk-powdereffective-constipation-reliefrich-fibre-supplement-200g-3-1643876719.jpg?dim=100x0&dpr=1&q=100",
    title:"Effective Constipation Relief|Rich Fibre Supplement - 200g",
    striked:"210.00" ,
    dis:"35% OFF",
    price:"136.50",
},
{
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-2-1643877043.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FO35914%2Fbaidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-3-1643877048.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-2-1643877043.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/O35914/baidyanath-kabz-care-ayurvedic-relief-from-constipation-indigestion-gas-acidity-200gm-3-1643877048.jpg?dim=100x0&dpr=1&q=100",
    title:"Ayurvedic Relief Constipation Indigestion Gas & Acidity - 200gm",
    striked:"190.00" ,
    dis:"35% OFF",
    price:"123.50",
},
{
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/201606/baidyanath-mahanarayan-tel-joint-pain-oil-bottle-of-100-ml-2-1641264125.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2F201606%2Fbaidyanath-mahanarayan-tel-joint-pain-oil-bottle-of-100-ml-6.1-1641264127.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/201606/baidyanath-mahanarayan-tel-joint-pain-oil-bottle-of-100-ml-2-1641264125.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/201606/baidyanath-mahanarayan-tel-joint-pain-oil-bottle-of-100-ml-6.1-1641264127.jpg?dim=100x0&dpr=1&q=100",
    title:"Baidyanath Mahanarayan Tel Joint Pain Oil Bottle Of 100 Ml",
    striked:"168.00" ,
    dis:"35% OFF",
    price:"109.20",
},
{
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/B25601/baidyanath-triphala-churna-helps-relieve-constipation-quick-acidity-gas-relief-240gms-2-1641789436.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FB25601%2Fbaidyanath-triphala-churna-helps-relieve-constipation-quick-acidity-gas-relief-240gms-6.1-1641789435.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/B25601/baidyanath-triphala-churna-helps-relieve-constipation-quick-acidity-gas-relief-240gms-2-1641789436.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/B25601/baidyanath-triphala-churna-helps-relieve-constipation-quick-acidity-gas-relief-240gms-6.1-1641789435.jpg?dim=100x0&dpr=1&q=100",
    title:"Baidyanath Triphala Churna |Quick Acidity & Gas Relief - 240gms",
    striked:"129.00" ,
    dis:"35% OFF",
    price:"83.85",
},
{
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/O56911/baidyanath-amlaki-rasyan-120-gm-2-1641788766.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FO56911%2Fbaidyanath-amlaki-rasyan-120-gm-6.1-1641788764.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/O56911/baidyanath-amlaki-rasyan-120-gm-2-1641788766.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/O56911/baidyanath-amlaki-rasyan-120-gm-6.1-1641788764.jpg?dim=100x0&dpr=1&q=100",
    title:"Baidyanath Amlaki Rasyan - 120 Gm",
    striked:"126.00" ,
    dis:"35% OFF",
    price:"81.90",
},

{
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/B25601/baidyanath-triphala-churna-helps-relieve-constipation-quick-acidity-gas-relief-240gms-2-1641789436.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FB25601%2Fbaidyanath-triphala-churna-helps-relieve-constipation-quick-acidity-gas-relief-240gms-6.1-1641789435.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/B25601/baidyanath-triphala-churna-helps-relieve-constipation-quick-acidity-gas-relief-240gms-2-1641789436.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/B25601/baidyanath-triphala-churna-helps-relieve-constipation-quick-acidity-gas-relief-240gms-6.1-1641789435.jpg?dim=100x0&dpr=1&q=100",
    title:"Baidyanath Triphala Churna |Quick Acidity & Gas Relief - 240gms",
    striked:"129.00" ,
    dis:"35% OFF",
    price:"83.85",
},
{
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/O56911/baidyanath-amlaki-rasyan-120-gm-2-1641788766.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FO56911%2Fbaidyanath-amlaki-rasyan-120-gm-6.1-1641788764.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/O56911/baidyanath-amlaki-rasyan-120-gm-2-1641788766.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/O56911/baidyanath-amlaki-rasyan-120-gm-6.1-1641788764.jpg?dim=100x0&dpr=1&q=100",
    title:"Baidyanath Amlaki Rasyan - 120 Gm",
    striked:"126.00" ,
    dis:"35% OFF",
    price:"81.90",
}

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
