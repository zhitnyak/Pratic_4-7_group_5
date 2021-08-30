const inputW = document.querySelector(".width");
const inputH = document.querySelector(".height");
const divEl = document.querySelector(".div");

const onChangeWidth = () => {
  if (!inputW.value) {
    divEl.style.width = "100px";
    return;
  }
  divEl.style.width = `${inputW.value}px`;
};
console.dir(divEl.style.width);

const onChangeHeight = () => !inputH.value;
divEl.style.height = "100px";

divEl.style.height = `${inputH.value}px`;

inputW.addEventListener("input", onChangeWidth);
inputH.addEventListener("input", onChangeHeight);
