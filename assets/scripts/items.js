//baseprice fornecerá um valor inicial a ser alterado pelo updateNextTurn
const SWORD_BASEPRICE = 1000;
const LUMBER_BASEPRICE = 500;
const SPICE_BASEPRICE = 800;
const HERB_BASEPRICE = 300;

//Classe abstrata: para que eu saiba quais funções estão obrigatoriamente implementadas nas filhas.
class Item {
    constructor(name, currentPrice) {
        this.name = name;
        this.currentPrice = currentPrice;

    }
    //Este método atualiza o preço
    updateNextTurn(CONDITIONS) { }

}

class Sword extends Item {
    constructor() {
        super("Sword", SWORD_BASEPRICE)
    }

    updateNextTurn(conditions) {
        let newPrice = this.currentPrice;
        const isInWar = conditions.includes("war");
        const isInFestival = conditions.includes("festival");
        if (isInWar) {
            newPrice = newPrice * 1.5;
        } else if (isInFestival) {
            newPrice = newPrice * 1.25;
        } else if (isInWar && isInFestival) {
            newPrice = newPrice * 1.75;
        }
        this.currentPrice = newPrice;
    }
}


class Lumber extends Item {
    constructor() {
        super("Lumber", LUMBER_BASEPRICE)
    }

    updateNextTurn(conditions) {
        let newPrice = this.currentPrice;
        const isSummer = conditions.includes("summer");
        const isWinter = conditions.includes("winter");
        const isInFestival = conditions.includes("festival");
        if (isSummer || isWinter) {
            newPrice = newPrice * 1.5;
        } else if (isInFestival) {
            newPrice = newPrice * 1.25;
        } else if ((isSummer || isWinter) && isInFestival) {
            newPrice = newPrice * 1.75;
        }
        this.currentPrice = newPrice;
    }
}


class Spice extends Item {
    constructor() {
        super("Spice", SPICE_BASEPRICE)
    }

    updateNextTurn(conditions) {
        let newPrice = this.currentPrice;
        const isInPest = conditions.includes("pest");
        const isWinter = conditions.includes("winter");
        const isInFestival = conditions.includes("festival");
        if (isWinter) {
            newPrice = newPrice * 1.5;
        } else if (isInPest || isInFestival) {
            newPrice = newPrice * 1.75;
        } else if ((isInPest || isInFestival) && isWinter) {
            newPrice = newPrice * 2.25;
        }
        this.currentPrice = newPrice;
    }
}


class Herb extends Item {
    constructor() {
        super("Herb", HERB_BASEPRICE)
    }

    updateNextTurn(conditions) {
        let newPrice = this.currentPrice;
        const isInPlague = conditions.includes("plague");
        const isInWar = conditions.includes("war");
        const isWinter = conditions.includes("winter");
        if (isWinter) {
            newPrice = newPrice * 1.5;
        } else if (isInPlague) {
            newPrice = newPrice * 2;
        } else if (isInWar) {
            newPrice = newPrice * 1.75;
        } else if (isWinter && isInPlague) {
            newPrice = newPrice * 2.5;
        } else if (isWinter && isInWar) {
            newPrice = newPrice * 2.25;
        } else if (isInWar && isInPlague) {
            newPrice = newPrice * 2.75;
        } else if (isInWar && isWinter && isInPlague) {
            newPrice = newPrice * 3.25;
        }
        this.currentPrice = newPrice;
    }
}




//Testes de alteração de valor após updateNextTurn
const testSword = new Sword();
testSword.updateNextTurn(CONDITIONS_CURRENT_TURN);
console.log(testSword.name + " " + testSword.currentPrice);

const testLumber = new Lumber();
testLumber.updateNextTurn(CONDITIONS_CURRENT_TURN);
console.log(testLumber.name + " " + testLumber.currentPrice);

const testSpice = new Spice();
testSpice.updateNextTurn(CONDITIONS_CURRENT_TURN);
console.log(testSpice.name + " " + testSpice.currentPrice);

const testHerb = new Herb();
testHerb.updateNextTurn(CONDITIONS_CURRENT_TURN);
console.log(testHerb.name + " " + testHerb.currentPrice);
