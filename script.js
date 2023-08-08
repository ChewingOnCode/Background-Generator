var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = `${body.style.background}` + "";
}
// TODO: Fix this functionality
btn.addEventListener("click", copyColor);
function copyColor() {
  navigator.clipboard.writeText("btn");
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
