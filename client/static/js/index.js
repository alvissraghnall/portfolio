function openNav() {
  document.getElementById("nav").style.height = "100%";
  console.log("open nav");
}

/* Close */
function closeNav() {
  document.getElementById("nav").style.height = "0%";
}

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
  if(window.innerWidth > 767) {
    menu.classList.add("hidden")
  }
});

const moboLinks = document.querySelectorAll(".hover:bg-green-500.text-sm.px-2");

moboLinks.addEventListener("hover", () => {
  moboLinks.forEach(elem => elem.style.color = "#fff");
});