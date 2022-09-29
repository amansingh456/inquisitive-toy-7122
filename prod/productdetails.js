const GetData = JSON.parse(localStorage.getItem("Details"))
console.log("Details")
    
const container = document.getElementById("Grid");

function Display(Data) {

container.innerHTML = null;

Data.map(function ({img1,title,price,dis}) {
const div = document.createElement("div");

const image = document.createElement("img");
image.src = img1;
image.id = "Image";
image.style.width = "80%";
image.style.height = "80%";
image.alt = "I am not here";

const h3 = document.createElement("h3");
h3.innerText = `Name:- ${title}`;

const p3 = document.createElement("p");
p3.innerText = `Price:- ${price}`;

const p4=document.createElement("p");
p4.innerHTML=` Discount Price:- ${dis}`

div.append(image, h3, p3,p4);
container.append(div);
});
}
Display(GetData)

