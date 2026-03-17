// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         const headerOffset = 80; // height of your header
//         const elementPosition = target.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//         window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth"
//         });
//     });
// });

const menuButton = document.querySelector("#header_menu");
const dropdownNav = document.querySelector("#dropdown_nav");

menuButton.addEventListener("click", () => {
    dropdownNav.classList.toggle("show");
})