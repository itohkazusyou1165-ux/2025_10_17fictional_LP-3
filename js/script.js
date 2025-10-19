//swiper導入部分


const swiper = new Swiper(".assessment-swiper", {
 
  loop: true, 

 
  speed: 1500,
  autoplay: {
    delay: 1500,
  },
  slidesPerView: "auto",
  centeredSlides: true, 
  spaceBetween: 30,

 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

 
  breakpoints: {
  
    768: {
      spaceBetween: 50,
    },
  },
});




//光るボタン設定
document.addEventListener("DOMContentLoaded", () => {

  const targets = document.querySelectorAll("#cta-text-left");

  
  const options = {
   
    threshold: 0.2,
  };

  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
    
      if (entry.isIntersecting) {
      
        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      }
    });
  }, options);


  targets.forEach((target) => {
    observer.observe(target);
  });
});



document.addEventListener("DOMContentLoaded", () => {

  const targets = document.querySelectorAll("#animation-card");

  const options = {
 
    threshold: 0.2,
  };


  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
    
      if (entry.isIntersecting) {
     
        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      }
    });
  }, options);


  targets.forEach((target) => {
    observer.observe(target);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  
  const targets = document.querySelectorAll("#animation-card");

 
  const options = {
   
    threshold: 0.2,
  };


  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
  
      if (entry.isIntersecting) {
      
        entry.target.classList.add("is-visible");

       
        observer.unobserve(entry.target);
      }
    });
  }, options);


  targets.forEach((target) => {
    observer.observe(target);
  });
});



//ハンバーガーメニュー設定

(function () {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (!hamburger || !mobileNav) return;

  function openMenu() {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    const opened = hamburger.classList.contains('active');
    if (opened) closeMenu(); else openMenu();
  });


  mobileNav.addEventListener('click', function (e) {
    const a = e.target.closest('a');
    if (a && a.getAttribute('href') && a.getAttribute('href').startsWith('#')) {
      
      closeMenu();
    }
  });


  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 850 && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
})();

