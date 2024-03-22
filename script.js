const container = document.querySelector("#container");
container.style.width = "960px";

const btn = document.querySelector("#btn");
btn.addEventListener("click", drawGrid);

const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", clearGrid);

const btnBlack = document.querySelector("#btn-black");
btnBlack.addEventListener("click", blackColor);

const btnSetColor = document.querySelector("#btn-setColor");
btnSetColor.addEventListener("click", changeColorDiv);

function drawGrid() {
  let squaresPerSide = parseInt(
    prompt("How many squares per side do you want?")
  );
  if (squaresPerSide <= 100) {
    clearGrid(); /* clear the grid before draw it. */
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      const div = document.createElement("div");
      div.style.cssText =
        "border: 1px solid black"; /* outer borders are thinner than inner borders */
      div.style.width =
        960 / squaresPerSide - 2 + "px"; /* -2 px of the border */
      container.appendChild(div);
      div.classList.toggle("gridDiv");
    }
  } else {
    alert("Try again. Max squares of 100.");
  }
}

function clearGrid() {
  const gridDiv = document.querySelectorAll(".gridDiv");

  for (const div of gridDiv) {
    div.remove();
  }
}

function blackColor() {
  const divList = document.querySelectorAll(".gridDiv");

  divList.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  });
}

function changeColorDiv() {
  const divList = document.querySelectorAll(".gridDiv");

  divList.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
      event.target.style.opacity = 1;
      console.log(event.target.style.opacity);
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      event.target.style.backgroundColor = "#" + randomColor;
    });
  });
}
