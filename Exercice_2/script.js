const show = document.getElementById("show");
const mask = document.getElementById("mask");
const text = document.querySelector("p");

show.addEventListener("click", handleTextShown);
mask.addEventListener("click", handleTextHidden);

function handleTextHidden(event) {
  console.log(text);

  text.classList.add("opacity");
}

function handleTextShown(event) {
  text.classList.remove("opacity");
}
