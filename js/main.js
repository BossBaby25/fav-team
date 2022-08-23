const nameArr = [];

function display(selectedPlayers) {
    // console.log(selectedPlayers);
    const listBody = document.getElementById('selected-players');
    listBody.innerText = '';

    for (let i = 0; i < selectedPlayers.length; i++) {
        // console.log(selectedPlayers[i]);
        const name = selectedPlayers[i];

        const li = document.createElement('li');
        li.innerText = name;

        listBody.appendChild(li);
    }
}

function selected(element) {
    const playerName = element.parentNode.children[0].innerText;
    nameArr.push(playerName);


    if (nameArr.length < 6) {
        document.getElementById('total-selected-players').innerText = nameArr.length;
        display(nameArr);
    }
    element.disabled = true;
    if (nameArr.length > 5) {
        alert('5 players selected, can not add more')
    }
}

function calculateCost(elementId) {
    const cost = document.getElementById(elementId);
    const costStr = cost.value;
    const costInt = parseInt(costStr);
    return costInt;
}
let perPlayerCostInt;
document.getElementById('calculate').addEventListener('click', function () {

    perPlayerCostInt = calculateCost('per-player');

    if (nameArr.length < 6) {
        document.getElementById('player-expenses').innerText = perPlayerCostInt * nameArr.length;
    }

    else {
        document.getElementById('player-expenses').innerText = perPlayerCostInt * 5;
    }
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCostInt = calculateCost('manager');
    const coachCostInt = calculateCost('coach');

    if (nameArr.length < 6) {
        const total = managerCostInt + coachCostInt + perPlayerCostInt * nameArr.length;
        document.getElementById('total').innerText = total;
    }
    else {
        const total = managerCostInt + coachCostInt + perPlayerCostInt * 5;
        document.getElementById('total').innerText = total;
    }

})