const randomBtn = document.getElementById("random");
const css = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll(".color");
const body = document.querySelector("#gradient");

setGradient = () => {
  body.style.background = _linearGradient();
  css.textContent = `${body.style.background};`;
};

setRandomGradient = () => {
  body.style.background = _randomLinearGradient();
  css.textContent = `${body.style.background};`;
};

_linearGradient = () => {
  return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

_randomLinearGradient = () => {
  return `linear-gradient(to right, ${randomColor()},${randomColor()})`;
};

randomColor = () => {
  const hash = "0123456789abcdef";
  let output = "#";
  while (output.length < 7) {
    output += hash[Math.floor(Math.random() * hash.length)];
  }
  return output;
};

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setRandomGradient);
