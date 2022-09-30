import navBar from "./component/nav.js"


//? Sticky Navbar ###########
$(document).ready(function(){
    $(document).scroll(function(){
        var st = $(this).scrollTop();
        if(st > 2) {
            $("#navbar").addClass('fixed');
        } else {
            $("#navbar").removeClass('fixed');
        }
    });
});

//? Sticky Navbar Ends ###########





document.querySelector("#open-popup").addEventListener("click",()=>{
    console.log("singh")
    document.querySelector(".popup").classList.add("active")
})


document.querySelector(".popup #close-btn").addEventListener("click",()=>{
    console.log("eee")
    document.querySelector(".popup").classList.remove("active")

})


function pinChange () {
    let p = document.getElementById("open-popup")
    let span = document.createElement("span")
    span.innerText  = `Select Pin\xa0`
    let img = document.createElement("img")
    img.src = "icons8-double-down-24.png"
    img.id = "drop-down"
    p.append(span,img)




    document.querySelector("#pinSearch").addEventListener("change",()=>{
        let pinValue = document.querySelector("#pinSearch").value
        console.log('pinValue: ', pinValue);
        swal.fire("Yes, we deliver here..✅")
      
        span.innerText = pinValue+" "

    })


    

}

pinChange()



document.getElementById("open-popup").addEventListener("click",()=>{
    let pinValue = document.querySelector("#pinSearch")
    pinValue.value = null
})








//! popup two for login...###############

document.querySelector("#userMain").addEventListener("click",()=>{
    console.log("singhtwo")
    document.querySelector(".popuptwo").classList.add("active")
})


document.querySelector(".popuptwo #close-btntwo").addEventListener("click",()=>{
    console.log("eeetwo")
    document.querySelector(".popuptwo").classList.remove("active")

})


function usernameChange() {
    let userMain = document.getElementById("userMain")
    let span = document.createElement("span")
    span.innerText  = `Log in`
    span.id = "open-popuptwo"
    
    userMain.append(span)


    document.getElementById("form").addEventListener("submit",(event)=>{
        event.preventDefault()
        let fname = document.getElementById("fname").value
        // console.log('fname: ', fname);
        Swal.fire({
            title: 'Welcome !',
            text: 'We are happy to see You',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQN7OAQoZRs1xXby27TqC-cRIN4ZF0llZ9kyPZK1K7&s',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })

        span.innerText = fname
        
        

    })
    

}

usernameChange()










//!  Redirecting Page #####################
document.getElementById("forofferpage").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "offer.html"
})


document.getElementById("forcartpage").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "cart.html"
})

document.getElementById("logo").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "index.html"
})

document.getElementById("logo").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "index.html"
})

document.getElementById("formedicinepage").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "medicine.html"
})
document.getElementById("medi").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "medicine.html"
})


document.getElementById("forlabtestpage").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "lab.html"
})
document.getElementById("ltest").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "lab.html"
})

document.getElementById("forhealthcarepage").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "healthcare.html"
})
document.getElementById("helcare").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "healthcare.html"
})

document.getElementById("forofferspage").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "offer.html"
})
document.getElementById("ofer").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "offer.html"
})

document.getElementById("navigate").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "#"
})

document.getElementById("categories").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "#cubes"
})

document.getElementById("concern").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "#middle"
})

document.getElementById("dotd").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "#last"
})
document.getElementById("fb").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "#last"
})

document.getElementById("concerns").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "#middle"
})


document.getElementById("app").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "https://play.google.com/store/search?q=pharmeasy&c=apps"
})


document.querySelector(".forpera").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "offer.html"
})


document.querySelector(".butt").addEventListener("click",()=>{
    console.log("amansr")
    window.location.href = "lab.html"
})




