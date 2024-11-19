const border = document.querySelector("img");

border.addEventListener("mouseenter", handleImageBorder);
border.addEventListener("mouseout", handleImageBorder);

function handleImageBorder(event) {
  event.target.classList.add("border-red");
  if (event.type !== "mouseenter") {
    event.target.classList.remove("border-red");
  }
}
