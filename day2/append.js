
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
    addproduct(data,Launches);
};
export {Launches};

function Deals(){
    let Deals= document.getElementById("Deals");
    let data = JSON.parse(localStorage.getItem("elem_data")) ;
    addproduct(data,Deals);
};
export {Deals};



function addproduct(data,val){
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
             
              val.append(box);
          
              
    });   
  
  }
 



  var slids =[{
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/271929/kofol-sf-cough-syrup-bottle-of-100-ml-2-1641398970.jpg?dim=320x320&dpr=1&q=100",
    img2:"",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/271929/kofol-sf-cough-syrup-bottle-of-100-ml-2-1641398970.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"",
    title:"Kofol Sf Cough Syrup Bottle Of 100 Ml",
    striked:"87.00" ,
    dis:"30% OFF",
    price:"60.90",
  },
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/100360/kofol-cough-syrup-bottle-of-100-ml-2-1641264381.jpg?dim=320x320&dpr=1&q=100",
    img2:"",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/100360/kofol-cough-syrup-bottle-of-100-ml-2-1641264381.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"",
    title:"Kofol Cough Syrup Bottle Of 100 Ml",
    striked:"58.00" ,
    dis:"30% OFF",
    price:"59.50",
  },
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/D58349/kofol-chewable-tablets-sugar-free-jar-of-20-2-1641789495.jpg?dim=320x320&dpr=1&q=100",
    img2:"",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/D58349/kofol-chewable-tablets-sugar-free-jar-of-20-2-1641789495.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"",
    title:"Kofol Chewable Tablets Sugar Free Jar Of 20",
    striked:"16.00" ,
    dis:"30% OFF",
    price:"11.20",
  },
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/M05010/kofol-honey-lemon-lozenges-jar-of-200-2-1641788840.jpg?dim=320x320&dpr=1&q=100",
    img2:"",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/M05010/kofol-honey-lemon-lozenges-jar-of-200-2-1641788840.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"",
    title:"Kofol Honey Lemon Lozenges Jar Of 200",
    striked:"400.00" ,
    dis:"30% OFF",
    price:"280.00",
  },
  {
    img1:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FN27936%2Fkofol-chewable-tablets-sugar-free-jar-of-60-3-1643879834.jpg&w=256&q=75",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FN27936%2Fkofol-chewable-tablets-sugar-free-jar-of-60-3-1643879834.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/N27936/kofol-chewable-tablets-sugar-free-jar-of-60-2-1643879869.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/N27936/kofol-chewable-tablets-sugar-free-jar-of-60-3-1643879834.jpg?dim=100x0&dpr=1&q=100",
    title:"Kofol Chewable Tablets Sugar Free Jar Of 60",
    striked:"46.00" ,
    dis:"30% OFF",
    price:"32.20",
  },
  {
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/Y40217/kofol-mint-lozenges-jar-of-200-2-1641788840.jpg?dim=320x320&dpr=1&q=100",
    img2:"",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/Y40217/kofol-mint-lozenges-jar-of-200-2-1641788840.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"",
    title:"Kofol Mint Lozenges Jar Of 200",
    striked:"400.00" ,
    dis:"30% OFF",
    price:"280.00",
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
    img1:"https://cdn01.pharmeasy.in/dam/products_otc/F60126/liveasy-essentials-respirometer-spirometer-lung-exerciser-2-1645456738.jpg?dim=320x320&dpr=1&q=100",
    img2:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fproducts_otc%2FF60126%2Fliveasy-essentials-respirometer-spirometer-lung-exerciser-6.1-1645456739.jpg&w=256&q=75",
    imgs1:"https://cdn01.pharmeasy.in/dam/products_otc/F60126/liveasy-essentials-respirometer-spirometer-lung-exerciser-2-1645456738.jpg?dim=100x0&dpr=1&q=100",
    imgs2:"https://cdn01.pharmeasy.in/dam/products_otc/F60126/liveasy-essentials-respirometer-spirometer-lung-exerciser-6.1-1645456739.jpg?dim=100x0&dpr=1&q=100",
    title:"Liveasy Essentials Respirometer / Spirometer - Lung Exerciser",
    striked:"599.00" ,
    dis:"60% OFF",
    price:"239.60",
  },
 ] ;

  localStorage.setItem("slids",JSON.stringify(slids));
 
  function trainding(){
    let id1 = document.getElementById("trainding");
    let slid = JSON.parse(localStorage.getItem("slids")) ;
    additem(slid,id1);
};
export {trainding};


 function type(){
    
    let slid = JSON.parse(localStorage.getItem("slids")) ;
    additem(slid,"type");
};
export {type};



  function additem(slid,val1){
console.log("gbbb");
console.log("slids :",slid);
    slid.map((elem ) => {
      
              let box =document.createElement("div");
              
          
              let img =document.createElement("img");
              img.setAttribute("src",elem.img1);
                img.setAttribute("id","m_image");

              let title =document.createElement("h4");
              title.innerText=elem.title;
  
              
             
              box.append(img , title );
             val1.append(box);
      
             
  
    }); 
  }
