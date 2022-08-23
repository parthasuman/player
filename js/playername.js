const playerArray = [];

function display(listPlayer) {
  console.log(listPlayer);
  const unoderList = document.getElementById("list");
  // console.log(unoderList);
  unoderList.innerHTML = "";
  document.getElementsByClassName("mm").disabled = true;
  for (let i = 0; i < listPlayer.length; i++) {
    if (listPlayer.length > 5) {
      alert("not possible");
    } else {
      const name = playerArray[i].playerName;
      // console.log(name);
      const ul = document.createElement("ul");
      // console.log(ul);
      ul.innerHTML = `
      <li>${name}</li>
      `;
      unoderList.appendChild(ul);
    }
  }
}

function disable(x) {
  x.disable = true;
}

function addToList(element) {
  const playerName = element.parentNode.children[1].innerText;

  const playerObj = {
    playerName: playerName,
  };

  playerArray.push(playerObj);
  // console.log(playerArray);
  // console.log(playerArray.length);
  document.getElementById("total-added-player").innerText = playerArray.length;

  display(playerArray);
}
