const btn = document.getElementById("btn");

btn.addEventListener("click", changeBg);

function changeBg() {
  document.body.style.background = "#" + Math.floor(Math.random() * 1000000);
}
