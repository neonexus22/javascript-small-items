const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification(event) {
  const notify = document.createElement("div");
  notify.classList.add("toast");

  notify.innerText = "This is a toast message!";

  container.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 3000);
}
