const FRONT = "front";
const BACK = "back";

let techs = [
  "bootstrap",
  "css",
  "electron",
  "firebase",
  "html",
  "javascript",
  "jquery",
  "mongo",
  "node",
  "react",
];

var cards = null;

startGame();

function startGame() {
  cards = createCardsFromTechs(techs);
  shuffleCards(cards);

  initializeCards(cards);
}

function initializeCards(cards) {
  let gameBoard = document.getElementById("gameBoard");

  cards.forEach((card) => {
    let cardElement = document.createElement("div");
  });
}

function shuffleCards(cards) {
  let currentIndex = cards.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [cards[randomIndex], cards[currentIndex]] = [
      cards[currentIndex],
      cards[randomIndex],
    ];
  }
}

function createCardsFromTechs(techs) {
  let cards = [];

  techs.forEach((tech) => {
    cards.push(createPairFromTech(tech));
  });

  return cards.flatMap((pair) => pair);
}

function createPairFromTech(tech) {
  return [
    {
      id: createIdWithTech(tech),
      icon: tech,
      fliped: false,
    },
    {
      id: createIdWithTech(tech),
      icon: tech,
      fliped: false,
    },
  ];
}

function createIdWithTech(tech) {
  return tech + parseInt(Math.random() * 1000);
}
