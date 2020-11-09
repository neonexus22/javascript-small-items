const popupContainer = document.querySelector(".popup-container");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => {
  popupContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});
