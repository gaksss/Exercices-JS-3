const verif = document.querySelector("button");
const mot1 = document.getElementById("password");
const mot2 = document.getElementById("confirmPassword");

verif.addEventListener("click", handlePasswordVerif);

function handlePasswordVerif(event) {
  if (mot1.value != mot2.value) {
    console.log("MAUVAIS MDP");
    mot1.classList.add("red");
    mot2.classList.add("red");
    if (mot1.classList.contains("green")) {
      mot1.classList.remove("green");
      mot2.classList.remove("green");
    }
  } else {
    console.log("BON MDP");
    mot1.classList.add("green");
    mot2.classList.add("green");
    if (mot1.classList.contains("red")) {
      mot1.classList.remove("red");
      mot2.classList.remove("red");
    }
  }
}
