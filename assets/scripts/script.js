let turnCounter = -1;

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
        document.getElementById('conditionsCurrentTurn').innerHTML = CONDITIONS_CURRENT_TURN;
        document.getElementById('conditionsNextTurn').innerHTML = CONDITIONS_NEXT_TURN;

}


document.getElementById("donebtn").addEventListener("click", () => {

        clearList();

        turnChange();

        buildAllConditions();

        updateBag();

        fillList();

        updateDisplayValues();


});





