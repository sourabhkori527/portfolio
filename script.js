/*=========================
      Typing Animation
=========================*/

const typingText = document.getElementById("typing");

if(typingText){

    const words = [
        "UI Designer",
        "Frontend Developer",
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;


    function typeEffect(){

        let currentWord = words[wordIndex];


        if(isDeleting){

            typingText.textContent = currentWord.substring(0,charIndex);

            charIndex--;

        }
        else{

            typingText.textContent = currentWord.substring(0,charIndex);

            charIndex++;

        }


        if(!isDeleting && charIndex === currentWord.length){

            setTimeout(()=>{

                isDeleting = true;

            },1000);

        }


        if(isDeleting && charIndex === 0){

            isDeleting = false;

            wordIndex++;


            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }


        let speed = isDeleting ? 60 : 120;

        setTimeout(typeEffect,speed);

    }


    typeEffect();

}





/*=========================
      Header Scroll Effect
=========================*/

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }
    else{

        header.classList.remove("scrolled");

    }


});





/*=========================
      Mobile Menu
=========================*/

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");


if(menuToggle && nav){


    menuToggle.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });



    const navLinks = document.querySelectorAll("nav ul li a");


    navLinks.forEach(link=>{


        link.addEventListener("click",()=>{

            nav.classList.remove("active");

        });


    });


}






/*=========================
      Active Navbar
=========================*/


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");


window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{


        let top = section.offsetTop - 150;


        if(scrollY >= top){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});






/*=========================
      Scroll Progress Bar
=========================*/


const progressBar = document.getElementById("progress-bar");


window.addEventListener("scroll",()=>{


    if(progressBar){


        let scrollTop = document.documentElement.scrollTop;

        let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


        let progress = (scrollTop / height) * 100;


        progressBar.style.width = progress + "%";


    }


});






/*=========================
      Scroll Reveal Animation
=========================*/


const revealItems = document.querySelectorAll(
    ".project-card, .skill-card, .service-card, .stat-card, .contact-card"
);



const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},
{
    threshold:0.15
});



revealItems.forEach(item=>{

    revealObserver.observe(item);

});






/*=========================
      Footer Year Update
=========================*/


const footerText = document.querySelector(".footer-bottom p");


if(footerText){

    footerText.innerHTML =
    `© ${new Date().getFullYear()} Saurabh Kori. All Rights Reserved.`;

}