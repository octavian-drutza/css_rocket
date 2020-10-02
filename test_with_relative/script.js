let rocket = document.querySelector(".rocket");
let getCoords;
let curPosition = 500;

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    removeAnimation();
    moveRocketLeft();
  } else if (e.code === "ArrowRight") {
    removeAnimation();
    moveRocketRight();
  } else if (e.code === "ArrowDown") {
    /*     rocket.style.setProperty("animation-duration", 20 + "s"); */
    removeAnimation();
  }
});

function moveRocketRight() {
  getCoords = setInterval(() => {
    curPosition = rocket.getBoundingClientRect().x;
    console.log(curPosition);
  }, 100);
  /*   removeAnimation(); */
  rocket.classList.add("rocket-animation-right");
  rocket.onanimationend = () => {
    removeAnimation();
    clearInterval(getCoords);
  };
}
function moveRocketLeft() {
  getCoords = setInterval(() => {
    curPosition = rocket.getBoundingClientRect().x;
    console.log(curPosition);
  }, 100);
  /*   removeAnimation(); */
  rocket.classList.add("rocket-animation-left");
  rocket.onanimationend = () => {
    removeAnimation();
    clearInterval(getCoords);
  };
}

function removeAnimation() {
  clearInterval(getCoords);

  rocket.classList.remove("rocket-animation-right", "rocket-animation-left");
  rocket.style.setProperty("--rocket-start", curPosition + "px");
}
