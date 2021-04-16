const target = document.querySelectorAll("[data-anime]");
const targets = document.querySelectorAll("[data-animetion]");
const animationClass = "animate";

function animationScroll() {
  let windowTop = window.pageYOffset;
  target.forEach((e) => {
    if (windowTop > e.offsetTop) {
      e.classList.add(animationClass);
    } else {
      e.classList.remove(animationClass);
    }
  });
}

animationScroll();

window.addEventListener("scroll", () => {
  animationScroll();
});

// modal
const modal = document.querySelector(".modal");

const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");

openModal.onclick = () => {
  modal.style.display = "block";
};

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.addEventListener("resize", function () {
  let carrosselContainer = document.querySelector(".projetos-container");
  let largura = window.innerWidth;
  if (largura < 1380) {
    carrosselContainer.classList.add("carousel");
  } else {
    carrosselContainer.classList.remove("carousel");
  }
});
