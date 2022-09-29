function search_bar(){
    return ` <!--search_bar starts-->
    <div >
      <!--<img class="s_img" id="search"  src="./img/search.png" alt="search"> -->
      <i class="fa-light fa-magnifying-glass"></i>
     <input  id="query" placeholder="search for : " >
     <button  type="button"  class="btn" onclick="search_product()">Search</button>
  </div>

  <!--search_bar ends-->` 
   }
   export {search_bar};

