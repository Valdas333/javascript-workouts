const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

// const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = game.players[0];

const allplayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;
// const { odds: { team1, x: draw, team2 }} = game;

function printGoals(...scoredPlayers) {
  scoredPlayers.forEach((element) => {
    console.log(element);
  });
  console.log(scoredPlayers.length);
}

printGoals(...game.scored);

console.log(
  (game.odds.team1 < game.odds.team2 && game.team1) ||
    (game.odds.team1 > game.odds.team2 && game.team2)
);

// team1 < team2 && console.log(game.team1);
// team1 > team2 && console.log(game.team2);
console.log(players1);
