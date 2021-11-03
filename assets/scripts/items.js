//baseprice fornecerá um valor inicial a ser alterado pelo updateNextTurn
const SWORD_BASEPRICE = 1000;
const LUMBER_BASEPRICE = 500;
const SPICE_BASEPRICE = 800;
const HERB_BASEPRICE = 300;


//Sword special
const MAX_SHARPNESS = 4;
//Lumber special
const MAX_GRADE = 4;
//Spice special
const MAX_PURITY = 4;
//Herb special
const MAX_SCENT = 4;

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
        this.sharpness = MAX_SHARPNESS;
    };

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
        newPrice = newPrice * (this.sharpness / 4);
        this.currentPrice = newPrice;
    }
}


class Lumber extends Item {
    constructor() {
        super("Lumber", LUMBER_BASEPRICE)
        this.grade = MAX_GRADE;
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
        newPrice = newPrice * (this.grade / 4);
        this.currentPrice = newPrice;
    }
}


class Spice extends Item {
    constructor() {
        super("Spice", SPICE_BASEPRICE)
        this.purity = MAX_PURITY;
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
        newPrice = newPrice * (this.purity / 4);
        this.currentPrice = newPrice;
    }
}


class Herb extends Item {
    constructor() {
        super("Herb", HERB_BASEPRICE)
        this.scent = MAX_SCENT;

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
        newPrice = newPrice * (this.scent / 4);
        this.currentPrice = newPrice;
    }
}




//Testes de alteração de valor após updateNextTurn
const testSword = new Sword();
testSword.updateNextTurn(CONDITIONS_NEXT_TURN);
console.log(testSword.name + " " + testSword.currentPrice);

const testLumber = new Lumber();
testLumber.updateNextTurn(CONDITIONS_NEXT_TURN);
console.log(testLumber.name + " " + testLumber.currentPrice);

const testSpice = new Spice();
testSpice.updateNextTurn(CONDITIONS_NEXT_TURN);
console.log(testSpice.name + " " + testSpice.currentPrice);

const testHerb = new Herb();
testHerb.updateNextTurn(CONDITIONS_NEXT_TURN);
console.log(testHerb.name + " " + testHerb.currentPrice);
