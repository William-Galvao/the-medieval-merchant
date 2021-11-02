let turnCounter = 0;

//Acessei a lista
const tobuy = document.getElementById("tobuy");

const herbttt = new herb();
herbttt.updateNextTurn(CONDITIONS);
const items = [new sword(), new lumber(), new spice(), herbttt]

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

document.getElementById("donebtn").addEventListener("click", function () {
        turnCounter +=
                clearList();
        getCurrentSeason(turnCounter);
        getRandomWarStatus();
        getRandomFestivalStatus();

        fillList();
});

console.log(turnCounter);

