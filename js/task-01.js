const btnIncr = document.querySelector(".increment");
const btnDecr = document.querySelector(".decrement");
const spanEl = document.querySelector("span");

const onIncr = () => {
  let spanPer = Number(spanEl.textContent);
  spanPer += 1;
  spanEl.textContent = spanPer;
  console.log(spanPer);
};

const onDecr = () => {
  let spanPer2 = Number(spanEl.textContent);
  spanPer2 -= 1;
  spanEl.textContent = spanPer2;
  console.log(spanPer2);
};

btnIncr.addEventListener("click", onIncr);
btnDecr.addEventListener("click", onDecr);
