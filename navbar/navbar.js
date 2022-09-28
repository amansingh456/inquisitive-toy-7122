document.querySelector("#open-popup").addEventListener("click",()=>{
    console.log("aman")
    document.querySelector(".popup").classList.add("active")
})


document.querySelector(".popup .close-btn").addEventListener("click",()=>{
    document.querySelector(".popup").classList.remove("active")
})


function pinChange () {
    let p = document.getElementById("open-popup")
    let span = document.createElement("span")
    span.innerText  = `Select Pin\xa0`
    let img = document.createElement("img")
    img.src = "./icons8-double-down-24.png"
    img.id = "drop-down"
    





    document.querySelector("#pinSearch").addEventListener("change",()=>{
        let pinValue = document.querySelector("#pinSearch").value
        console.log(pinValue)
     if(pinValue.length==6){
        span.innerText = pinValue+" "
     } else{
        alert("Wrong Pincode")
     }
   
      
       
    })
    p.append(span,img)
}

pinChange()



document.getElementById("open-popup").addEventListener("click",()=>{
    let pinValue = document.querySelector("#pinSearch")
  
    pinValue.value = null
})