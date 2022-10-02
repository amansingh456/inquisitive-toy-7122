const GetData = JSON.parse(localStorage.getItem("Details"))
console.log("Details")
    
const container = document.getElementById("Grid");

function Display(Data) {

container.innerHTML = null;

    Data.map(function ({img1,img2,imgs1,imgs2,title,price }) {
      const div = document.createElement("div");
    
  
      const image = document.createElement("img");
      image.src = img1;
      image.id = "Image";
      image.style.width = "20%";
      image.style.height = "520px";
  
      image.alt = "I am not here"
      ;
  
      
      
  

      const h3 = document.createElement("h3");
      h3.innerText = `Name:- ${img2}`;
   

      const p2 = document.createElement("p");
      p2.innerText = ` Discount :- ${imgs2}`;
      p2.style.color = 'red'

  
      const p3 = document.createElement("p");
      p3.innerText = ` Price:- ${imgs1}`;
      p3.style.color = 'purple'
      
      const p4 = document.createElement("p");
      p4.innerText = `Discount Price:- ${title}`;
      p4.style.color = 'green'

      div.append(image,h3,p3, p2,p4);
container.append(div);
});
}
Display(GetData)

