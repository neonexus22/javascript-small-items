const container = document.getElementById("container");

const text = "With great power, comes great responsibilities ...";

let index = 0;

function writeText() {
  container.innerText = text.slice(0, index);
  index++;
  if (index > text.length - 1) {
    index = 0;
  }
}

setInterval(writeText, 100);
