
//Read more button
document.getElementById("myBtn").addEventListener("click",myFunction)

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      window.reload.href="moreText"
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
//coupon data
  let data=[
    {image:"https://cms-contents.pharmeasy.in/offer/028f38c99b9-PELOGO.jpg",
    title:"Flat 25% off on first 3 medicine orders.",
    paragraph:"Flat 25% off on first 3 medicine orders.",
    code:"Code: 25TAKE",
    Copy_Code:"Copy Code",
    
    },
    {image:"https://cms-contents.pharmeasy.in/offer/028f38c99b9-PELOGO.jpg",
    title:"Flat 27% off + up to Rs.5000 surprise cashback",
    paragraph:"Coupon applicable on orders above Rs.1299",
    code:"Code: POCK27",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/028f38c99b9-PELOGO.jpg",
    title:"Additional 15% cashback on 1st medicine",
    paragraph:"Coupon applicable on orders above Rs.499. Hurry! order now..",
    code:"Code: CASH15",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/ff60cd9f220-11.jpg",
    title:"Get 15% + Flat Rs. 200 instant discount on CITI Bank Cards",
    paragraph:"Instant discount will be applied on the payment page on adding the correct CITI Bank Card details.",
    code:"Code: HURRAY",
    Copy_Code:"Copy Code",
    payment:"payment"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/00aa49181c6-3_400x400.png",
    title:"Get FLAT Rs.450 OFF on orders above Rs 1499.",
    paragraph:"Get FLAT Rs.450 OFF on orders above Rs 1499.",
    code:"Code: LABTEST450",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/b21c150407f-1_400x400_10KB.jpg",
    title:"Get Flat Rs.350 OFF + Free Doctor Consultation",
    paragraph:"On orders above Rs.1499",
    code:"Code: DOC350",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png",
    title:"Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages.",
    paragraph:"On orders above Rs.1499",
    code:"Code: GRAND1000",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/de97a6fbe28-PE_LOGO.jpg",
    title:"Buy 3 Health Checkups worth Rs.1499 each and Pay for only 2.",
    paragraph:"Buy 3 Health Checkups worth Rs.1499 each and Pay for only 2.",
    code:"Code: MEGASAVER",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/de97a6fbe28-PE_LOGO.jpg",
    title:"Get Flat Rs.198 OFF on booking Hba1c Pack of 3.",
    paragraph:"Get Flat Rs.198 OFF on booking Hba1c Pack of 3.",
    code:"Code: MEGASAVER",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png",
    title:"Use code GETSAVE to avail the following offers:",
    paragraph:"Buy 2 tests & get FLAT 15% Cashback",
    code:"Code: GETSAVE",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/a39f3a0b277-Diagnostics-01-min.png",
    title:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699.",
    paragraph:"Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699.",
    code:"Code: FIT200",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/5db436ee3cd-1_400x400.png",
    title:"Get Flat Rs.50 Cashback on orders above Rs.300.",
    paragraph:"Get Flat Rs.50 Cashback on orders above Rs.300.",
    code:"Code: CSH50",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png",
    title:"Get a health checkup and FREE doctor consultation. Use code DOCCONSULT.",
    paragraph:"Get a health checkup and FREE doctor consultation. Use code DOCCONSULT.",
    code:"Code: DOCCONSULT",
    Copy_Code:"Copy Code"
    },
    {image:"https://cms-contents.pharmeasy.in/offer/e11270f3e3f-paytmcashbackoptimized.png",
    title:"Get upto Rs.300 Paytm cashback",
    paragraph:"Valid once per user on transactions above ₹599.",
    code:"Code: PEPAYTM",
    Copy_Code:"Copy Code",
    payment:"payment"
    },
    // {image:"https://cms-contents.pharmeasy.in/offer/e11270f3e3f-paytmcashbackoptimized.png",
    // title:"Get upto Rs.300 Paytm cashback",
    // paragraph:"Valid once per user on transactions above ₹599.",
    // code:"Code: PEPAYTM",
    // Copy_Code:"Copy Code"
    // }
    ];

    function appendcoupon(){
      let container=document.getElementById("couponcode")
      data.forEach((ele) => {
        let Div=document.createElement("div");
        Div.setAttribute("id","maindiv");
        let Div1=document.createElement("div");
        let Div2=document.createElement("div");
        Div2.setAttribute("class","title_p")
        let Div3=document.createElement("div");
        Div3.setAttribute("class","coupon_code")
        let div4=document.createElement("div");
        div4.setAttribute("class","coupon_code1")
        let div5=document.createElement("div");
        div5.setAttribute("class","coupon_code2")
        let img=document.createElement("img");
        img.src=ele.image;
        img.setAttribute("class","coupon_img");
        let title=document.createElement("h3");
        title.innerHTML=ele.title;
        let p=document.createElement("p");
        p.innerHTML=ele.paragraph;
        let code=document.createElement("h3");
        code.innerHTML=ele.code;
        let coupon=document.createElement("h4");
        coupon.innerHTML=ele.Copy_Code;
        Div1.append(img);
        Div2.append(title,p);
        div4.append(code);
        div5.append(coupon);
        Div3.append(div4,div5);
        Div.append(Div1,Div2,Div3);
        container.append(Div,);
      });
    }
    appendcoupon()

    // Displaybutton()
    // // Fillter for all btn
    // document.getElementById("all").addEventListener("click",fillterall)
    // function fillterall(){
    //   data.sort((a,b)=>{
    //     return a.data-b.data
    //   })
    // }
    // console.log(data)
    // fillterall()





//diffrenet buttons

function Displaybutton(){
  let all=document.createElement("button")
all.innerText="All"
all.setAttribute("class","filterbtn")
all.setAttribute("id","all")
let payment=document.createElement("button")
payment.innerText="Payment"
payment.setAttribute("class","filterbtn")
payment.setAttribute("id","payment")
let medicine=document.createElement("button")
medicine.innerText="Medicine"
medicine.setAttribute("class","filterbtn")
medicine.setAttribute("id","medicine")
let Diagnostics=document.createElement("button")
Diagnostics.innerText="Diagnostic"
Diagnostics.setAttribute("class","filterbtn")
Diagnostics.setAttribute("id","Diagnostics")
let healthcare=document.createElement("button")
healthcare.innerText="Healthcare"
healthcare.setAttribute("class","filterbtn")
healthcare.setAttribute("id","healthcare")
document.getElementById("btn").append(all,payment,medicine,Diagnostics,healthcare)

}
Displaybutton()

let obj=[
  {
  heading:"Total No. of Offers",
  countpercentage:"15"
},
{
  heading:"Discount for New Users",
  countpercentage:"18% OFF"
},
{
  heading:"Discount for All Users",
  countpercentage:"18% OFF"
},
{
  heading:"Additional Offers",
  countpercentage:"Cashbacks & shopping Vouchers"
}
];

const  objdataappend=()=>{
  obj.forEach((el)=>{
    let div=document.createElement("div");
    div.setAttribute("class","countpercentage")
    let heading=document.createElement("p");
    heading.innerHTML=el.heading;
    let h2=document.createElement("h3");
    h2.innerHTML=el.countpercentage;
    div.append(heading,h2)
    document.getElementById("count").append(div)

  })

}
objdataappend()

document.getElementById("myBtns").addEventListener("click",myFunctions)

function myFunctions() {
    var dots = document.getElementById("dotss");
    var moreText = document.getElementById("mores");
    var btnText = document.getElementById("myBtns");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      window.reload.href="moreText"
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


  const buttons = document.querySelectorAll('button');

  buttons.forEach( button =>{
      button.addEventListener('click',()=>{
          const faq = button.nextElementSibling;
          const icon = button.children[1];
  
          faq.classList.toggle('show');
          icon.classList.toggle('rotate');
      })
  } )

