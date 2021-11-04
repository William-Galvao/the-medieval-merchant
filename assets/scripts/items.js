//baseprice fornecerá um valor inicial a ser alterado pelo updateNextTurn
const SWORD_BASEPRICE = 1000;
const LUMBER_BASEPRICE = 500;
const SPICE_BASEPRICE = 800;
const HERB_BASEPRICE = 300;



//Classe abstrata: para que eu saiba quais funções estão obrigatoriamente implementadas nas filhas.
class Item {
    constructor(name, basePrice) {
        this.name = name;
        this.basePrice = basePrice;
        this.currentPrice = 0;


    }
    //Este método atualiza o preço
    updateNextTurn(CONDITIONS) { }

}

class Sword extends Item {
    constructor() {
        super("Sword", SWORD_BASEPRICE);
    }

    updateNextTurn(conditions) {
        let newPrice = this.basePrice;
        let priceModifier = 1.0;
        const isInWar = conditions.includes("war");
        const isInFestival = conditions.includes("festival");
        if (isInWar) {
            priceModifier += 0.5;
        }
        if (isInFestival) {
            priceModifier += 0.25;
        }
        this.currentPrice = newPrice * priceModifier;
    }
}


class Lumber extends Item {
    constructor() {
        super("Lumber", LUMBER_BASEPRICE);
    }

    updateNextTurn(conditions) {
        let newPrice = this.basePrice;
        let priceModifier = 1.0;
        const isSummer = conditions.includes("summer");
        const isWinter = conditions.includes("winter");
        const isInFestival = conditions.includes("festival");
        if (isSummer || isWinter) {
            priceModifier += 0.5;
        }
        if (isInFestival) {
            priceModifier += 0.25;
        }
        this.currentPrice = newPrice * priceModifier;
    }
}


class Spice extends Item {
    constructor() {
        super("Spice", SPICE_BASEPRICE);
    }

    updateNextTurn(conditions) {
        let newPrice = this.basePrice;
        let priceModifier = 1.0;
        const isInPest = conditions.includes("pest");
        const isWinter = conditions.includes("winter");
        const isInFestival = conditions.includes("festival");
        if (isWinter) {
            priceModifier += 0.5;
        }
        if (isInPest || isInFestival) {
            priceModifier += 0.75;
        }
        this.currentPrice = newPrice * priceModifier;
    }
}


class Herb extends Item {
    constructor() {
        super("Herb", HERB_BASEPRICE);
    }

    updateNextTurn(conditions) {
        let newPrice = this.basePrice;
        let priceModifier = 1.0;
        const isInPlague = conditions.includes("plague");
        const isInWar = conditions.includes("war");
        const isWinter = conditions.includes("winter");
        if (isWinter) {
            priceModifier += 0.5;
        }
        if (isInWar) {
            priceModifier += 0.75;
        }
        if (isInPlague) {
            priceModifier += 1;
        }
        this.currentPrice = newPrice * priceModifier;
    }
}


const allPossibleItems = [Sword, Herb, Lumber, Spice];


