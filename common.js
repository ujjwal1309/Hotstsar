const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
      dispalyOnInteraction: false,
    },
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

console.log(swiper)