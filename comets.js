/* import { findCell, allCells } from "./index.js";
import { currentCell } from "./rocket.js";

let cometCell, currentCol, currentRow;

function animateCometCell(rowNr, colNr) {
  cometCell = findCell(rowNr, colNr);
  cometCell.innerHTML = `<i class="fas fa-meteor"></i>`;
}

function moveCometLeft() {
  console.log(currentRow, currentCol);
  if (cometCell.style.transform) {
    cometCell.style.setProperty("transform", "rotate(0deg)");
  }
  currentCol = Number(cometCell.id.substring(7));
  currentRow = Number(cometCell.parentElement.id.substring(4));
  removeAnimation();
  void cometCell.offsetWidth;
  cometCell.classList.add("comet-animation-left");
  endStartAnimation();
}

function moveCometRight() {
  console.log(currentRow, currentCol);
  cometCell.style.setProperty("transform", "rotate(-90deg)");
  currentCol = Number(cometCell.id.substring(7));
  currentRow = Number(cometCell.parentElement.id.substring(4));
  removeAnimation();
  void cometCell.offsetWidth;
  cometCell.classList.add("comet-animation-right");
  endStartAnimation();
}

function endStartAnimation() {
  cometCell.onanimationend = () => {
    cometCell.innerHTML = "";
    if (cometCell.classList.contains("comet-animation-right")) {
      animateCometCell(currentRow - 1, currentCol + 1);
      cometCell.style.setProperty("transform", "rotate(-90deg)");
    } else if (cometCell.classList.contains("comet-animation-left")) {
      animateCometCell(currentRow - 1, currentCol - 1);
    }

    if (currentCol >= 1 && currentCol <= 12 && currentRow > 1) {
      moveComet();
      if (currentCol === 1) {
        moveCometRight();
      } else if (currentCol === 12) {
        moveCometLeft();
      } else if (currentRow === 1) {
        removeAnimation();
      }
    }

    console.log("RAKETA:", currentCell.id);
    console.log("COMETA:", cometCell.id);
    if (
      String(cometCell.classList.value) == String(currentCell.classList.value)
    ) {
      console.log("mai prins");
    }
  };
}

function removeAnimation() {
  Array.from(allCells).forEach((cell) => {
    cell.classList.remove("comet-animation-right", "comet-animation-left");
  });
}

function moveComet() {
  let ran = Math.floor(Math.random() * 2);

  if (ran === 1) {
    moveCometLeft();
  } else {
    moveCometRight();
  }
  console.log(currentRow, currentCol);
}

export {
  animateCometCell,
  moveCometLeft,
  moveCometRight,
  moveComet,
  cometCell,
};
 */

/* 
  manageAnimation() {
    this.cometCell.onanimationend = () => {
      this.removePrevAnimation();
      this.cometCell.innerHTML = "";
      if (this.direction == DIRECTIONS.RIGHT) {
        this.animateCometCell(this.currentRow - 1, this.currentCol + 1);
      } else if (this.direction == DIRECTIONS.LEFT) {
        this.animateCometCell(this.currentRow - 1, this.currentCol - 1);
      } else {
        this.animateCometCell(this.currentRow - 1, this.currentCol);
      }
      if (
        this.currentCol >= 1 &&
        this.currentCol <= 12 &&
        this.currentRow > 1
      ) {
        this.manageCometMove();
        if (this.currentRow === 1) {
          this.removePrevAnimation(); */
/*           this.cometCell.innerHTML = ""; */
/*           console.log(this.id, "i am dead");
        } else if (this.currentCol === 12) {
          this.moveComet(DIRECTIONS.LEFT);
          this.cometCell.classList.remove("comet-animation-right");
        } else if (this.currentCol === 1) {
          this.moveComet(DIRECTIONS.RIGHT);
          this.cometCell.classList.remove("comet-animation-left");
        }
      }
    };
  }
 */
