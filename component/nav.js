function navBar() {
  return `
        
    <div id="navbar">
            <div id="logo"> <img src="mainLogo.png" alt="logo">
            </div>
            <span id="line">
                <h6>|</h6>
            </span>
            <div id="location1">
                <span> <img id="voltage" src="icons8-high-voltage-48.png" alt=""> Express delivery to</span>
                <p id="open-popup">
                </p>
                <div class="popup">
                    <div class="close-btn" id="close-btn">&times;</div>
                    <div class="input">
                        <h2>Choose your location</h2>
                        <input type="search" id="pinSearch" placeholder="Enter Pin Code">
                        <button>Check</button>
                    </div>
                </div>
            </div>
            <div id="ser"> </div>
            <div id="app"><button><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5dC3MhTkxkIEkxhylRri1zbu8NdZocuW8A&usqp=CAU"
                        alt=""> Download App</button></div>
            <div id="img">
                <span id="userMain"><img src="icons8-user-32.png" alt="">Hello, <span id="open-popuptwo"></span></span>
                <div class="popuptwo">
                    <div class="close-btntwo" id="close-btntwo">&times;</div>
                    <div class="inputtwo">
                            <h2>Log in</h2>
                            <form id="form">
                                <input type="text" placeholder="Enter first name" id="fname" />
                                <input type="text" placeholder="Enter last name" id="lname" />
                            
                                <input type="text" placeholder="Email" id="email" />
                                
                                <input type="password" placeholder="Password" id="pass" />
                                
                                <button id="butn">Login Now..!</button>
                            </form>
                        


                    </div>
                </div>
                <span id="forofferpage"><img src="icons8-discount-24.png" alt="" >Offer</span>
                <span id="forcartpage"><img src="icons8-shopping-cart-24.png" alt="">Cart</span>
            </div>
    </div>
    <div id="navpart2">
        <div id="formedicinepage">Medicine</div>
        <div id="forlabtestpage">Lab Tests</div>
        <div id="forhealthcarepage">Healthcare</div>
        <div>Health Blogs</div>
        <div> PLUS</div>
        <div id="forofferspage">Offers</div>
        <div>Surgeries</div>
        <div>Value Store</div>
    </div>
    <div id="navpart3">
        <div id="navigate">Navigate to</div>
        <div id="categories">Categories</div>
        <div id="concern">Shop by Concerns</div>
        <div id="dotd">
            Deals of the Day</div>
        <div id="fb">Featured Brands</div>
        <div id="concerns">Lab Tests by Concern</div>
    </div>
    
    `
}

export default navBar