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

console.log("yhbhy");
const moboLinks = document.querySelectorAll(".mobo-link");
console.log("after");

for (let index = 0; index < moboLinks.length; index++) {
  moboLinks[index].addEventListener("mouseenter", () => {
    console.log("before");
    moboLinks[index].style.color = "#fff";
    console.log("after");
  })

  moboLinks[index].addEventListener("mouseleave", () => {
    moboLinks[index].style.color = "#000";
    if(moboLinks[index].parentElement.classList.contains("active")) {
      moboLinks[index].style.color = "#fff";
    }
  })
  
}