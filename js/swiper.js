let menu = document.querySelector("#menu-btn"),
  navbar = document.querySelector(".navbar");
(menu.onclick = () => {
  menu.classList.toggle("fa-times"), navbar.classList.toggle("active");
}),
  (window.onscroll = () => {
    menu.classList.remove("fa-times"), navbar.classList.remove("active");
  }),
  document.querySelectorAll(".image-slider img").forEach((e) => {
    e.onclick = () => {
      var a = e.getAttribute("src");
      document.querySelector(".main-home-image").src = a;
    };
  });
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: { el: ".swiper-pagination", clickable: !0 },
  loop: !0,
  grabCursor: !0,
  autoplay: { delay: 7500, disableOnInteraction: !1 },
  breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } },
});
