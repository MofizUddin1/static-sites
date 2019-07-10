var boxNumbers = 6;
var colors = generateColorArray(getBoxNumber());
var picked = pickColor();
var squares = document.querySelectorAll(".square");
var guessMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
startGame();
easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  setBoxNumber(3);
  displayMode(true);
  resetGame();
});
hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  setBoxNumber(6);
  displayMode(false);
  resetGame();
});
reset.addEventListener("click", function(){
  resetGame();
});
function resetGame(){
  reset.innerHTML = "New Colours";
  h1.style.backgroundColor = "steelblue";
  guessMessage.textContent = "";
  colors = generateColorArray(getBoxNumber());
  picked = pickColor();
  startGame();
}
function startGame(){
  RGBText.textContent = picked;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //add colours to boxes
    squares[i].addEventListener("click", function(){
      var clicked = this.style.backgroundColor;
      if (picked===clicked) {
        guessMessage.textContent = "correct!";
        changeColor(clicked);
        h1.style.backgroundColor = clicked;
        reset.innerHTML = "Play Again?";
      }else {
        guessMessage.textContent = "Try Again!";
        this.style.backgroundColor = "#232323";
      }
    });//add events to boxes
  }
}
function changeColor(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function generateColorArray(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    //get random colours
    arr.push(generateColors());
  }
  return arr;
}
function generateColors(){
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
  return rgb;
}
function displayMode(easy){
  if (easy){
    for (var i = 3; i < 6; i++) {
      squares[i].style.display = "none";
    }
  }else {
    for (var i = 3; i < 6; i++) {
      squares[i].style.display = "block";
    }
  }
}
function pickColor(){
  var arrNum = Math.floor(Math.random()*boxNumbers);
  return colors[arrNum];
}
function setBoxNumber(num){
  boxNumbers = num;
}
function getBoxNumber(){
  return boxNumbers;
}
