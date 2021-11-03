//Acessei a lista
const tobuy = document.getElementById("tobuy");


const items = [testSword, testLumber, testSpice, testHerb]

console.log(items);

//Função para gerar três itens aleatórios.
function fillList() {
        const quantityProductsPerRound = 3;
        for (i = 0; i < quantityProductsPerRound; i++) {
                //Criei um index random       
                const randomNumber = Math.floor(Math.random() * (items.length) | 0);
                const pickedItem = items[randomNumber];
                //Criei um elemento <li>
                const newli = document.createElement("li");

                //Dei um valor para a <li>
                newli.appendChild(document.createTextNode(pickedItem.name + ":" + " " + pickedItem.currentPrice));
                newli.classList.add("list-group-item");
                newli.classList.add("list-group-item-warning");
                //Inseri a <li> na <ul>
                tobuy.appendChild(newli);
        }
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


document.getElementById("donebtn").addEventListener("click", function () {

        clearList();

        fillList();

        turnChange();

        clearConditionsNextTurn();

        buildAllConditions();

        updateDisplayValues();

});



