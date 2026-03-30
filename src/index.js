const playerOne = {
  name: "Mario",
  speed: 4,
  maneuverability: 3,
  power: 3,
  score: 0,
};

const playerTwo = {
  name: "Luigi",
  speed: 3,
  maneuverability: 4,
  power: 4,
  score: 0,
};


function rollDice() {
  return Math, floor(Math.random() * 6) + 1
}

async function getRandomBlock() {
  let random = Math.random()
  let result

  switch (true) {
    case random < .33:
      result = "RETA"
      break
    case random < .66:
      result = "CURVA";
      break
    default:
      result = "CONFRONTO"
      break
  }
  return result
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`Rodada ${round}`)


    let block = await getRandomBlock()
    console.log(`Bloco ${block}`)
  }
}

(async function main() {
  console.log(
    `Corrida entre ${playerOne.name} e ${playerTwo.name} começand... \n`
  )
  await playRaceEngine(playerOne, playerTwo)
})()