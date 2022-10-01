import navBar from "./component/nav.js"
let navBar_div = document.querySelector("nav")
navBar_div.innerHTML =  navBar()




import foot from "./component/foot.js"


let footer_div = document.getElementById("footer")
footer_div.innerHTML = foot()


let new_add = JSON.parse(localStorage.getItem("prodata"))
console.log(new_add)
console.log(new_add[2])



// let x= new_add[1].img1
// console.log(x)
// let n= document.createElement('img');
// n.setAttribute('src',x)
// document.querySelector('#right').append(n)
let total=0;
let prod=0;
for(let x=0; x<new_add.length; x++){
    document.getElementById('del').innerHTML=null
    document.getElementById('del1').innerHTML=null
   let y = new_add[x].img1
   let z=document.createElement('h1').innerText= new_add[x].price
   let a= document.createElement('h1').innerText= new_add[x].title
   let n= document.createElement('img')
   n.setAttribute('src',y)
   let div = document.createElement('div');
   div.setAttribute('id',x);
   div.setAttribute('class','same')
   document.querySelector('#cont').append(div)
   document.getElementById(x).append(a,n, ('   Price = '+ z))

   total=total+(+z)
   prod=prod+1;

}

document.getElementById('total').append(document.createElement('h1').innerText="Total Cart Amount ="," ", total," ",'||',' ');
document.getElementById('total').append(document.createElement('h1').innerText="Products in Cart ="," ",prod)










