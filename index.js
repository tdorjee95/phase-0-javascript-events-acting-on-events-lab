const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight(){
     const leftNumbers = dodger.style.left.replace("px","");
     const left = parseInt(leftNumbers, 10);
     const dodgerWidth = dodger.offsetWidth;
     const windowWidth = window.innerWidth;
     const maxRightPosition = windowWidth - dodgerWidth;

     if (left < maxRightPosition) {
        dodger.style.left = `${left + 1}px`;
     }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    });

  