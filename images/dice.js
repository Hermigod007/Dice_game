var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;

console.log(n);

if (n == 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (n == 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (n == 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (n == 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (n == 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if (n == 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}


var num = Math.random();
num = num * 6;
num = Math.floor(num) + 1;

console.log(num);

if (num == 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (num == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (num == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (num == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (num == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if (num == 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (n > num) {
  //player 1 wins
  document.querySelector(".winner").innerHTML = "Player 1 wins";
} else if (n == num) {
  document.querySelector(".winner").innerHTML = "It's a tie";

} else {
  //player 2 wins
  document.querySelector(".winner").innerHTML = "Player 2 wins";
}
