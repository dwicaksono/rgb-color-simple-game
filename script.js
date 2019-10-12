var numSquare = 6;
var colors = generatRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var displayColors = document.getElementById("diplay-colors");
var pickedColors = pickColor();
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easybtn");
var hardBtn = document.getElementById("hardbtn");
// console.log(pickedColors);
displayColors.textContent = pickedColors;

easyBtn.addEventListener("click", function() {
  // alert("ok");
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquare = 3;
  colors = generatRandomColors(numSquare);
  pickedColors = pickColor();
  displayColors.textContent = pickedColors;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.background = "none";
    }
  }
});
hardBtn.addEventListener("click", function() {
  // alert("ok");
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquare = 6;
  colors = generatRandomColors(numSquare);
  pickedColors = pickColor();
  displayColors.textContent = pickedColors;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.background = "block";
  }
});

reset.addEventListener("click", function() {
  colors = generatRandomColors(numSquare);
  pickedColors = pickColor();
  displayColors.textContent = pickedColors;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#34495e";
  this.textContent = "New Game";
});

for (var i = 0; i < squares.length; i++) {
  // add initial color to square
  squares[i].style.background = colors[i];
  //add click color to square
  squares[i].addEventListener("click", function() {
    // alert(this.style.background.toUpperCase());
    var clickColor = this.style.background;
    console.log(clickColor, pickedColors);
    if (clickColor === pickedColors) {
      // alert("ok");
      message.textContent = "Correct!";
      correctColors(clickColor);
      h1.style.background = clickColor;
      reset.textContent = "Play Again?";
    } else {
      // alert("wrong");
      message.textContent = "Try Again";
      this.style.background = "#34495e";
    }
  });
}

function correctColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generatRandomColors(num) {
  var arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  console.log(arr);
  return arr;
}
