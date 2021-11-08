let turnCounter = 0;
let tax = 0;

const screengame = document.getElementById("screengame");


function updateTax() {
        tax = 0;
        if (turnCounter >= 2) {
                tax = turnCounter * 25;
        }
}

function upkeep() {
        if (turnCounter >= 2) {
                GOLD -= tax;
        }
}

function gameOver() {
        if (turnCounter >= 3 && GOLD <= 0) {
                alert("Game Over! You have reached " + turnCounter + "º turn but don't have enough gold to afford the next turn tax! Press F5 to restart.");
                return true;

        }
        return false;

}

//Acessei a lista
const tobuy = document.getElementById("tobuy");

let currentInventory = [];


function buyButtonClickHandler(event) {
        let itemIndex = event.target.getAttribute("itemIndex");
        let itemFromStore = currentInventory[itemIndex];
        if (!checkGold(itemFromStore.currentPrice)) {
                alert("Not enough gold!");
                return false;
        }
        if (!checkBag()) {
                alert("Bag is full!");
                return false;
        }
        payItem(itemFromStore.currentPrice);
        receiveItem(itemFromStore);
        currentInventory.splice(itemIndex, 1);
        renderStore();
        renderPlayerInventory();
}




//Função para gerar três itens aleatórios.
function fillList() {
        const quantityProductsPerRound = 3;
        for (i = 0; i < quantityProductsPerRound; i++) {
                //Criei um index random       
                const randomNumber = Math.floor(Math.random() * (allPossibleItems.length) | 0);
                const pickedClass = allPossibleItems[randomNumber];
                const pickedItem = new pickedClass();
                currentInventory[i] = pickedItem;
                pickedItem.updateNextTurn(CONDITIONS_CURRENT_TURN);
        }
        renderStore();
}

function renderStore() {
        clearList();
        currentInventory.forEach((item, itemIndex) => {
                const newli = document.createElement("li");
                newli.setAttribute("itemIndex", itemIndex);
                const buyButton = document.createElement("button");
                buyButton.innerHTML = "Buy";
                buyButton.setAttribute("itemIndex", itemIndex);
                buyButton.addEventListener("click", buyButtonClickHandler);
                newli.appendChild(document.createTextNode(item.name + ":" + " " + item.currentPrice + "       "));
                newli.classList.add("list-group-item");
                newli.classList.add("list-group-item-warning");
                newli.appendChild(buyButton);
                tobuy.appendChild(newli);
        });
        changeAmount.innerHTML = GOLD;
}

function clearList() {
        tobuy.innerHTML = '';
}

function turnChange() {
        CONDITIONS_CURRENT_TURN = CONDITIONS_NEXT_TURN;
}

function updateDisplayValues() {
        document.getElementById('conditionsCurrentTurn').innerHTML = CONDITIONS_CURRENT_TURN[0].toUpperCase() + " " + CONDITIONS_CURRENT_TURN[1].toUpperCase() + " " + CONDITIONS_CURRENT_TURN[2].toUpperCase();
        document.getElementById('conditionsNextTurn').innerHTML = CONDITIONS_NEXT_TURN[0].toUpperCase() + " " + CONDITIONS_NEXT_TURN[1].toUpperCase() + " " + CONDITIONS_NEXT_TURN[2].toUpperCase();

}

let donebtn = document.getElementById("donebtn");
donebtn.innerHTML = "Start!";

function changeTextBtn() {
        updateTax();
        donebtn.innerHTML = `Next Turn: ${tax}`
}



document.getElementById("donebtn").addEventListener("click", () => {

        const isGameOver = gameOver();

        if (isGameOver) return;

        upkeep();

        changeTextBtn();

        clearList();

        turnChange();

        buildAllConditions();

        updateBag();

        fillList();

        updateDisplayValues();

        turnCounter += 1;
        console.log(turnCounter);


});






