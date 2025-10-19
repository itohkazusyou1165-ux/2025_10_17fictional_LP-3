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



