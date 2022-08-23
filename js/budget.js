document.getElementById("btn-player").addEventListener("click", function () {
  const playerField = document.getElementById("player-field");
  const playerFieldValueString = playerField.value;
  const playerFieldValue = parseInt(playerFieldValueString);

  playerField.value = "";

  const newPlayerFieldValue = playerFieldValue * playerArray.length;
  const playerTotalValue = document.getElementById("player-amount");
  playerTotalValue.innerText = newPlayerFieldValue;
});
