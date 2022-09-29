function navBar() {
  return `
        
    <div id="navbar">
            <div id="logo"> <img src="../inquisitive-toy-7122/Assets_imgs/mainLogo.png" alt="logo">
            </div>
            <span id="line">
                <h6>|</h6>
            </span>
            <div id="location1">
                <span> <img id="voltage" src="../inquisitive-toy-7122/Assets_imgs/icons8-high-voltage-48.png" alt=""> Express delivery to</span>
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
                <span><img src="../inquisitive-toy-7122/Assets_imgs/icons8-user-32.png" alt="">Hello, Log in</span>
                <span><img src="../inquisitive-toy-7122/Assets_imgs/icons8-discount-24.png" alt="">Offer</span>
                <span><img src="../inquisitive-toy-7122/Assets_imgs/icons8-shopping-cart-24.png" alt="">Cart</span>
            </div>
    </div>
    <div id="navpart2">
        <div>Medicine</div>
        <div>Lab Tests</div>
        <div>Healthcare</div>
        <div>Health Blogs</div>
        <div> PLUS</div>
        <div>Offers</div>
        <div>Surgeries</div>
        <div>Value Store</div>
    </div>
    <div id="navpart3">
        <div>Navigate to</div>
        <div>Categories</div>
        <div>Shop by Concerns</div>
        <div>
            Deals of the Day</div>
        <div>Featured Brands</div>
        <div>Lab Tests by Concern</div>
    </div>
    
    `
}

export default navBar