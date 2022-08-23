// function getPlayerName(inputId) {
//   const playerName = document.getElementById(inputId);
//   const playerFirst = playerName.innerText;
//   const select = document.getElementById("list");
//   const li = document.createElement("li");
//   li.innerText = playerFirst;
//   select.appendChild(li);
// }

document.getElementById("player1").addEventListener("click", function () {
  // getPlayerName("player-jesus");
  document.getElementById("player1").disabled = true;
});
document.getElementById("player2").addEventListener("click", function () {
  // getPlayerName("player-Martinelli");
  document.getElementById("player2").disabled = true;
});
document.getElementById("player3").addEventListener("click", function () {
  // getPlayerName("player-White");
  document.getElementById("player3").disabled = true;
});
document.getElementById("player4").addEventListener("click", function () {
  // getPlayerName("player-saka");
  document.getElementById("player4").disabled = true;
});
document.getElementById("player5").addEventListener("click", function () {
  // getPlayerName("player-smith");
  document.getElementById("player5").disabled = true;
});
document.getElementById("player6").addEventListener("click", function () {
  // getPlayerName("player-martin");

  document.getElementById("player6").disabled = true;
});

// const totalLi = document.getElementById("list");
// console.log(totalLi);
