// ===============================
// WEBSITE LOADED
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("SOM BHAI LUGA DOKAN Loaded Successfully");

});


// ===============================
// LOGIN PAGE REDIRECT
// ===============================

const loginBtn = document.querySelector(".navbar .btn-warning");

if(loginBtn){

    loginBtn.addEventListener("click",function(e){

        e.preventDefault();

        window.location.href="login.html";

    });

}


// ===============================
// HERO BUTTON
// ===============================

const collectionBtn = document.getElementById("collectionBtn");

if (collectionBtn) {

    collectionBtn.addEventListener("click", function () {

        window.location.href = "product.html";

    });

}




// ===============================
// CONTACT BUTTON
// ===============================

const contactBtn=document.getElementById("contactBtn");

if(contactBtn){

contactBtn.addEventListener("click",function(e){

e.preventDefault();

document.querySelector("#contact").scrollIntoView({

behavior:"smooth"

});

});

}


// ===============================
// VIEW COLLECTION BUTTONS
// ===============================

const viewButtons = document.querySelectorAll(".product-card .btn");

viewButtons.forEach(function(btn){

    btn.addEventListener("click", function(){

        window.location.href = "product.html";

    });

});


// ===============================
// FEATURE COLLECTION BUTTONS
// ===============================


viewButtons.forEach(function(btn){

    btn.addEventListener("click", function(){

        window.location.href = "product.html";

    });

});

// part 2


// ===============================
// STICKY NAVBAR
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.background = "#4b0012";
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "#6d0019";
        navbar.style.padding = "15px 0";
        navbar.style.boxShadow = "none";

    }

});


// ===============================
// SMOOTH SCROLL NAV LINKS
// ===============================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link){

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// ACTIVE MENU
// ===============================

window.addEventListener("scroll",function(){

    let current="";

    document.querySelectorAll("section").forEach(function(section){

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


// ===============================
// SCROLL ANIMATION
// ===============================

const sections=document.querySelectorAll("section");

function revealSections(){

    sections.forEach(function(section){

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            section.style.opacity="1";
            section.style.transform="translateY(0)";
            section.style.transition="0.8s";

        }

    });

}

sections.forEach(function(section){

    section.style.opacity="0";
    section.style.transform="translateY(60px)";

});

window.addEventListener("scroll",revealSections);

revealSections();


// ===============================
// CONTACT NOW BUTTON
// ===============================

function scrollToContact(){

    const contact=document.querySelector("#contact");

    if(contact){

        contact.scrollIntoView({

            behavior:"smooth"

        });

    }

}


// ===============================
// WHATSAPP BUTTON
// ===============================

const whatsapp=document.querySelector(".whatsapp-btn");

if(whatsapp){

    whatsapp.addEventListener("click",function(e){

        e.preventDefault();

        window.open(

            "https://wa.me/918117074843",

            "_blank"

        );

    });

}


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="btn btn-warning";

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="95px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",function(){

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",function(e){

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// PREVENT FORM REFRESH
// ===============================

document.querySelectorAll("form").forEach(function(form){

    form.addEventListener("submit",function(e){

        e.preventDefault();

        alert("Form Submitted Successfully!");

    });

});


// ===============================
// DISABLE EMPTY BUTTON REFRESH
// ===============================

document.querySelectorAll("button").forEach(function(button){

    if(!button.getAttribute("type")){

        button.setAttribute("type","button");

    }

});


// ===============================
// FOOTER YEAR
// ===============================

const footer=document.querySelector(".footer .text-center p");

if(footer){

    footer.innerHTML="© "+new Date().getFullYear()+" SOM BHAI LUGA DOKAN | All Rights Reserved.";

}


// ===============================
// PAGE LOADED
// ===============================

window.onload=function(){

    console.log("Website Ready");

};

function changeImage(img){
    document.getElementById("mainImage").src = img.src;
}



// ================================
// Hero Button
// ================================

const btn = document.getElementById("collectionBtn");

if (btn) {

    btn.addEventListener("click", function () {

        document.getElementById("collection").scrollIntoView({

            behavior: "smooth"

        });

    });

}

