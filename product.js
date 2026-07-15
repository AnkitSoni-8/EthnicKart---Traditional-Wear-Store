// =========================================
// EthnicKart Product JavaScript
// Part 1
// =========================================

// URL se product ka naam lena

const params = new URLSearchParams(window.location.search);

const product = params.get("product") || "bridal";


// =========================================
// All Products Data
// =========================================

const products = {

    bridal:{

        name:"Premium Bridal Silk Saree",

        price:"₹1,999",

        oldPrice:"₹3,999",

        offer:"50% OFF",

        rating:"★★★★☆ 4.8 (1245 Ratings)",

        image:"image/pexels-satyampixels-37054322.jpg",

        gallery:[

            "image/pexels-satyampixels-37054322.jpg",

            "image/onlypaithani-wedding-saree-1050932_1920.jpg",

            "image/shades-by-43-Rm9DL9DmGi4-unsplash.jpg",

            "image/pexels-tahir-37523196.jpg"

        ]

    },

    silk:{

        name:"Premium Silk Saree",

        price:"₹2,499",

        oldPrice:"₹4,999",

        offer:"50% OFF",

        rating:"★★★★★ 5.0 (950 Ratings)",

        image:"image/shades-by-43-Rm9DL9DmGi4-unsplash.jpg",

        gallery:[

            "image/shades-by-43-Rm9DL9DmGi4-unsplash.jpg",

            "image/onlypaithani-wedding-saree-1050932_1920.jpg",

            "image/pexels-satyampixels-37054322.jpg",

            "image/pexels-ardyastic-7326221.jpg"

        ]

    },

    cotton:{

        name:"Premium Cotton Saree",

        price:"₹999",

        oldPrice:"₹1,999",

        offer:"50% OFF",

        rating:"★★★★☆ 4.5 (820 Ratings)",

        image:"image/pexels-tahir-37523196.jpg",

        gallery:[

            "image/pexels-tahir-37523196.jpg",

            "image/pexels-ardyastic-7326221.jpg",

            "image/onlypaithani-wedding-saree-1050932_1920.jpg",

            "image/pexels-satyampixels-37054322.jpg"

        ]

    },

    fancy:{

        name:"Designer Fancy Saree",

        price:"₹1,499",

        oldPrice:"₹2,999",

        offer:"50% OFF",

        rating:"★★★★☆ 4.7 (700 Ratings)",

        image:"image/magicalbrushes-wedding-5821117.jpg",

        gallery:[

            "image/magicalbrushes-wedding-5821117.jpg",

            "image/shades-by-43-Rm9DL9DmGi4-unsplash.jpg",

            "image/pexels-satyampixels-37054322.jpg",

            "image/onlypaithani-wedding-saree-1050932_1920.jpg"

        ]

    },

    wedding:{

        name:"Wedding Special Saree",

        price:"₹3,499",

        oldPrice:"₹5,999",

        offer:"42% OFF",

        rating:"★★★★★ 5.0 (1500 Ratings)",

        image:"image/pexels-qpidindia-best-wedding-photographers-in-kolkata-2156015356-34000233.jpg",

        gallery:[

            "image/pexels-qpidindia-best-wedding-photographers-in-kolkata-2156015356-34000233.jpg",

            "image/magicalbrushes-wedding-5821117.jpg",

            "image/onlypaithani-wedding-saree-1050932_1920.jpg",

            "image/shades-by-43-Rm9DL9DmGi4-unsplash.jpg"

        ]

    }

};

const current = products[product] || products.bridal;


// =========================================
// Product Information
// =========================================

const productInfo = {

    bridal:{

        desc:"Beautiful Premium Bridal Silk Saree specially designed for Wedding and Party Wear.",

        details:`

<li>Fabric : Premium Silk</li>
<li>Colour : Red</li>
<li>Occasion : Wedding</li>
<li>Blouse Piece Included</li>
<li>Dry Clean Only</li>

`

    },

    silk:{

        desc:"Premium Silk Saree with luxurious fabric and elegant finish.",

        details:`

<li>Fabric : Pure Silk</li>
<li>Colour : Purple</li>
<li>Occasion : Festival</li>
<li>Blouse Piece Included</li>
<li>Dry Clean Only</li>

`

    },

    cotton:{

        desc:"Soft Cotton Saree for Daily Wear and Summer Collection.",

        details:`

<li>Fabric : Cotton</li>
<li>Colour : Blue</li>
<li>Occasion : Casual</li>
<li>Machine Wash</li>
<li>Comfort Fit</li>

`

    },

    fancy:{

        desc:"Designer Fancy Saree with trendy look for Parties.",

        details:`

<li>Fabric : Georgette</li>
<li>Colour : Pink</li>
<li>Occasion : Party Wear</li>
<li>Light Weight</li>
<li>Dry Clean</li>

`

    },

    wedding:{

        desc:"Premium Wedding Special Saree with Luxury Finish.",

        details:`

<li>Fabric : Premium Silk</li>
<li>Colour : Maroon</li>
<li>Occasion : Wedding</li>
<li>Blouse Piece Included</li>
<li>Dry Clean Only</li>

`

    }

};


// =========================================
// Load Product
// =========================================

document.querySelector("h2").innerHTML=current.name;

document.querySelector(".text-danger").innerHTML=

`${current.price}

<del class="text-muted fs-5">${current.oldPrice}</del>

<span class="badge bg-success">${current.offer}</span>`;

document.querySelector(".text-success").innerHTML=current.rating;


// Description

const desc=document.querySelector(".mt-3");

if(desc){

desc.innerHTML=productInfo[product].desc;

}


// Main Image

document.getElementById("mainImage").src=current.image;


// Gallery Images

const thumbs=document.querySelectorAll(".small-img");

thumbs.forEach((img,index)=>{

if(current.gallery[index]){

img.src=current.gallery[index];

}

});


// =========================================
// Change Main Image
// =========================================

function changeImage(img){

document.getElementById("mainImage").src=img.src;

}

// =========================================
// Add To Bag
// =========================================

function addToBag(){

    let qty = document.getElementById("qty").value;

    if(qty < 1){

        qty = 1;

        document.getElementById("qty").value = 1;

    }

    alert("✅ " + qty + " Product Added to Bag Successfully!");

}


// =========================================
// Wishlist
// =========================================

function addWishlist(){

    alert("❤️ Product Added to Wishlist Successfully!");

}


// =========================================
// Delivery Check
// =========================================

function checkDelivery(){

    let pin = document.getElementById("pincode").value.trim();

    let msg = document.getElementById("deliveryMessage");

    if(pin===""){

        msg.style.color="red";

        msg.innerHTML="❌ Please Enter Pincode";

    }

    else if(pin.length!=6 || isNaN(pin)){

        msg.style.color="red";

        msg.innerHTML="❌ Invalid Pincode";

    }

    else{

        msg.style.color="green";

        msg.innerHTML="✅ Delivery Available in Your Area";

    }

}


// =========================================
// Quantity Validation
// =========================================

const qtyBox=document.getElementById("qty");

if(qtyBox){

    qtyBox.addEventListener("change",function(){

        if(this.value<1){

            this.value=1;

        }

    });

}


// =========================================
// Image Zoom Effect
// =========================================

const mainImage=document.getElementById("mainImage");

if(mainImage){

    mainImage.addEventListener("mousemove",function(){

        this.style.transform="scale(1.08)";

        this.style.transition=".3s";

    });

    mainImage.addEventListener("mouseleave",function(){

        this.style.transform="scale(1)";

    });

}


// =========================================
// Page Loaded
// =========================================

window.addEventListener("load",function(){

    console.log("✅ Product Page Loaded Successfully");

});

// =========================================
// Product Initialization
// =========================================

// Agar gallery images par onclick nahi laga hai
// to automatically laga do.

const galleryImages = document.querySelectorAll(".small-img");

galleryImages.forEach(function(img){

    img.addEventListener("click", function(){

        changeImage(this);

    });

});


// =========================================
// Safety Check
// =========================================

if(!products[product]){

    console.warn("Product Not Found!");

}


// =========================================
// Default Product
// =========================================

if(!window.location.search){

    document.getElementById("mainImage").src = products.bridal.image;

}


// =========================================
// Console Information
// =========================================

console.log("===================================");

console.log("EthnicKart Product Page");

console.log("Selected Product :", product);

console.log("Current Product :", current.name);

console.log("===================================");


// =========================================
// Future Features
// =========================================

// Local Storage Support

// Cart API

// Wishlist API

// Payment Gateway

// Order Summary

// Coupon System

// Related Products

// Customer Reviews

// Recently Viewed

// Product Sharing

// =========================================
// End Of File
// =========================================