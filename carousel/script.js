const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const pausePlay = document.getElementById("pauseBtn");
const pause = document.getElementById("pause");
const play = document.getElementById("play");

let interval;

let idx = 0;

checkForPreviousBtn();

function run(value = 1) {
  idx = idx + value;

  if (idx > img.length - 1) {
    idx = 0;
  }
  checkForPreviousBtn();
  checkForNextBtn();
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}
interval = setInterval(run, 3000);

function checkForPreviousBtn() {
  if (idx === 0) {
    prev.setAttribute("disabled", "disabled");
    prev.classList.add("disabled");
  } else {
    prev.removeAttribute("disabled");
    prev.classList.remove("disabled");
  }
}

function checkForNextBtn() {
  if (idx === img.length - 1) {
    next.setAttribute("disabled", "disabled");
    next.classList.add("disabled");
  } else {
    next.removeAttribute("disabled");
    next.classList.remove("disabled");
  }
}

prev.addEventListener("click", () => {
  if (idx !== 0) {
    run(-1);
  }
});

next.addEventListener("click", () => {
  if (idx < img.length) {
    run();
  }
});

pausePlay.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pause.classList.add("hidden");
    play.classList.remove("hidden");
  } else {
    play.classList.add("hidden");
    pause.classList.remove("hidden");
    interval = setInterval(run, 3000);
  }
});
