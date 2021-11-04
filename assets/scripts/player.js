let GOLD = 10000;
let PLAYER_INVENTORY = [];
const MAX_INVENTORY = 3;

let changeAmount = document.getElementById("gold");
changeAmount.innerHTML = GOLD;


function checkGold(price) {
    return GOLD >= price;
}

function checkBag() {
    return PLAYER_INVENTORY.length < MAX_INVENTORY;
}

function payItem(price) {
    if (checkGold(price)) {
        GOLD -= price;
    }
}

function receiveItem(item) {
    if (checkBag()) {
        PLAYER_INVENTORY.push(item);
    }
}

function receivePayment(price) {
    GOLD += price;
}

function removeItem(itemIndex) {
    PLAYER_INVENTORY.splice(itemIndex, 1);
}

function updateBag() {
    PLAYER_INVENTORY.forEach(item => item.updateNextTurn(CONDITIONS_CURRENT_TURN));
    renderPlayerInventory();
}

function sellButtonClickHandler(event) {
    let itemIndex = event.target.getAttribute("itemIndex");
    let itemFromInventory = PLAYER_INVENTORY[itemIndex];
    receivePayment(itemFromInventory.currentPrice);
    removeItem(itemIndex);
    renderStore();
    renderPlayerInventory();
}


function renderPlayerInventory() {
    bag.innerHTML = '';
    PLAYER_INVENTORY.forEach((item, itemIndex) => {
        const newPlayerItem = document.createElement("li");
        newPlayerItem.setAttribute("itemIndex", itemIndex);
        const sellButton = document.createElement("button");
        sellButton.innerHTML = "Sell";
        sellButton.setAttribute("itemIndex", itemIndex);
        sellButton.addEventListener("click", sellButtonClickHandler);
        newPlayerItem.appendChild(document.createTextNode(item.name + ":" + " " + item.currentPrice + "       "));
        newPlayerItem.classList.add("list-group-item");
        newPlayerItem.classList.add("list-group-item-warning");
        newPlayerItem.appendChild(sellButton);
        bag.appendChild(newPlayerItem);
    });
}

