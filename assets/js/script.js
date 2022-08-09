// navbar toggle
const toggleIcon = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

toggleIcon.addEventListener("click", () => {
   navList.classList.toggle("translate-x-[150%]");
   if (toggleIcon.classList.contains("fa-bars")) {
      toggleIcon.classList.remove("fa-bars");
      toggleIcon.classList.add("fa-xmark");
   } else {
      toggleIcon.classList.add("fa-bars");
      toggleIcon.classList.remove("fa-xmark");
   }
});
// navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
   if (window.scrollY > 50) {
      navbar.classList.add("bg-white", "shadow-md");
   } else {
      navbar.classList.remove("bg-white", "shadow-md");
   }
});
// load more
const btnLoad = document.getElementById("btnLoadMore");
const productRow = document.getElementById("product2");

btnLoad.addEventListener("click", () => {
   productRow.classList.toggle("hidden");
   if (productRow.classList.contains("hidden")) {
      btnLoad.innerText = "load more";
   } else {
      btnLoad.innerText = "show less";
   }
});
// swiper js
const swiper = new Swiper(".mySwiper", {
   slidesPerView: "auto",
});

const swiperProduct = new Swiper(".mySwiper-product1", {
   slidesPerView: "auto",
});

const swiperReview = new Swiper(".mySwiperReview", {
   slidesPerView: "auto",
   spaceBetween: 30,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});
