document
  .getElementById("btn-calculate-all")
  .addEventListener("click", function () {
    const manegerField = document.getElementById("manager-field");
    const managerFieldValueString = manegerField.value;
    const managerFieldValue = parseInt(managerFieldValueString);
    manegerField.value = "";

    const coachField = document.getElementById("coach-field");
    const coachFieldValueString = coachField.value;
    const coachFieldValue = parseInt(coachFieldValueString);
    coachField.value = "";

    const totalCal = managerFieldValue + coachFieldValue;

    const playerPrice = document.getElementById("player-amount");
    const playerPriceString = playerPrice.innerText;
    const playerPrice1 = parseInt(playerPriceString);

    const totalAllCal = totalCal + playerPrice1;

    const totalCost = document.getElementById("total-cost");
    totalCost.innerText = totalAllCal;
  });
