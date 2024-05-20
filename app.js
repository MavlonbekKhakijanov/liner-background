const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const getColor = () => {
  let newColor = "#";
  for (let i = 0; i < 6; i++) {
    let ranNum = Math.floor(Math.random() * colors.length);
    newColor += colors[ranNum];
  }
  return newColor;
};

const setColor = () => {
  let color1 = getColor();
  let color2 = getColor();
  let deg = Math.floor(Math.random() * 360);
  let bgColor = `
  linear-gradient( ${deg}deg, ${color1}, ${color2})
  `;
  body.style.background = bgColor;
  text.textContent = bgColor;
};
btn.addEventListener("click", () => {
  setColor();
});
