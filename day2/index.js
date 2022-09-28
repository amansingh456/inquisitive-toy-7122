/*--fw20_0095--*/


//search bar import

    import {search_bar} from './search/searchbar.js';
    document.getElementById("searchdiv").innerHTML=search_bar();



 //search bar end


 import {Launches} from './append.js';

document.getElementById("Launches").innerHTML=Launches();

 import {Deals} from './append.js';
document.getElementById("Deals").innerHTML=Deals();
 

 import {type} from './append.js';
 document.getElementById("type").innerHTML=type();

 
 import {trainding} from './append.js';
 document.getElementById("Trending").innerHTML=trainding();












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
