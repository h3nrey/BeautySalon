const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    })
}


const links = document.querySelectorAll('nav ul li a');
for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show');
    })
}

//------Scroll-----//

function headerScroll() {
    const header = document.querySelector("#header");
    const navHeight = header.offsetHeight;

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else{
        header.classList.remove('scroll')
    }
}


//------Swiper-----//
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767:{
            slidesPerView: 2,
            setSwiperSize: true,
        },
    },
  });

  //------Scroll Reveal-----//

  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  })

  scrollReveal.reveal(`#home .text, #home .img,
                        #about .text, #about .img, 
                        #services header, #services .card,
                        #testimonials  header, #testimonials .testimonials,
                        #contact .text, #contact .links,
                        footer .brand, footer .social`, {interval: 100});

//------Back to top-----//


function backToTop() {
    const btt = document.querySelector('#back-to-top');

    if (window.scrollY >= 560) {
        btt.classList.add('show')
    } else{
        btt.classList.remove('show')
    }
}


const sections = document.querySelectorAll('main section[id]');

function activateSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8 ) * 4;

    for (const section of sections) {
        const sectionTop = section.offsetTop;  // offsetTop é o topo de um elemento
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointTop = checkpoint >= sectionTop;
        const checkpointBottom = checkpoint <= sectionTop + sectionHeight;

        if (checkpointTop && checkpointBottom) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
        }
    }
}

window.addEventListener('scroll', function (){
    headerScroll();
    backToTop();
    activateSection();
})



