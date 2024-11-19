const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const text = document.querySelector("p");

green.addEventListener("click", handleTextGreen);
red.addEventListener("click", handleTextRed);
blue.addEventListener("click", handleTextBlue);

function handleTextGreen(event) {
  if (text.classList.contains("red") || text.classList.contains("blue")) {
    text.classList.remove("red");
    text.classList.remove("blue");
  }
  text.classList.add("green");
}
function handleTextRed(event) {
  if (text.classList.contains("green") || text.classList.contains("blue")) {
    text.classList.remove("green");
    text.classList.remove("blue");
  }

  text.classList.add("red");
}
function handleTextBlue(event) {
  if (text.classList.contains("green") || text.classList.contains("red")) {
    text.classList.remove("green");
    text.classList.remove("red");
  }

  text.classList.add("blue");
}
