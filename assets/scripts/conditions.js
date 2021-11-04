//Nomes de constantes em escopo global são criados em SNAKE_CASE

let CONDITIONS_NEXT_TURN = [];
let CONDITIONS_CURRENT_TURN = [];

console.log("aqui é o conditions CURRENT" + CONDITIONS_CURRENT_TURN);
console.log("aqui é o conditions NEXT" + CONDITIONS_NEXT_TURN);

//Aqui são criados os fatores que serão randomizados no CONDITIONS

const SPRING = "spring";
const SUMMER = "summer";
const AUTUMN = "autumn";
const WINTER = "winter";
const WAR = "war";
const NONE = "none";
const PLAGUE = "plague";
const PEST = "pest";
const FESTIVAL = "festival";


const SEASONS = [SPRING, SUMMER, AUTUMN, WINTER];
function getCurrentSeason(turnCounter) {
    const seasonIndex = Math.floor((turnCounter % 12) / 3);
    return SEASONS[seasonIndex];

}

const WARSTATUS = [WAR, NONE, NONE];
function getRandomWarStatus() {
    const warStatusIndex = Math.floor((Math.random() * (WARSTATUS.length)) | 0);
    return WARSTATUS[warStatusIndex];
}

const EVENTSTATUS = [PLAGUE, PEST, FESTIVAL, NONE, NONE, NONE];
function getRandomFestivalStatus() {
    const festivalStatusIndex = Math.floor((Math.random() * (EVENTSTATUS.length)) | 0);
    return EVENTSTATUS[festivalStatusIndex];
}

//As condições são colocadas dentro do array CONDITIONS na ordem: SEASON, WAR, EVENT



function buildAllConditions() {
    clearConditionsNextTurn();
    let newCurrentSeason = getCurrentSeason(11);
    let newRandomWarStatus = getRandomWarStatus();
    let newRandomFestivalStatus = getRandomFestivalStatus();
    CONDITIONS_NEXT_TURN.push(newCurrentSeason);
    CONDITIONS_NEXT_TURN.push(newRandomWarStatus);
    CONDITIONS_NEXT_TURN.push(newRandomFestivalStatus);
}

buildAllConditions();

function clearConditionsNextTurn() {
    CONDITIONS_NEXT_TURN = [];
}


document.getElementById('conditionsNextTurn').innerHTML = CONDITIONS_NEXT_TURN;


