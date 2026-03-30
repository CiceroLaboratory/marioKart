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
  return Math.floor(Math.random() * 6) + 1
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


async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}


async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`Rodada ${round}`)


    let block = await getRandomBlock()
    console.log(`Bloco ${block}`)


    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()


    let totalTestSkill1 = 0
    let totalTestSkill2 = 0

    if (block === 'RETA') {
      totalTestSkill1 = diceResult1 + character1.speed
      totalTestSkill2 = diceResult2 + character2.speed

      await logRollResult(
        character1.name,
        "speed",
        diceResult1,
        character1.speed
      );

      await logRollResult(
        character1.name,
        "speed",
        diceResult1,
        character1.speed
      )
    }
    if (block === 'CURVA') {
      totalTestSkill1 = diceResult1 + character1.maneuverability
      totalTestSkill2 = diceResult2 + character2.maneuverability

      await logRollResult(
        character1.name,
        "maneuverability",
        diceResult1,
        character1.maneuverability
      );

      await logRollResult(
        character1.name,
        "maneuverability",
        diceResult1,
        character1.maneuverability
      )
    }
    if (block === 'CONFRONTO') {
      let powerResult1 = diceResult1 + character1.power
      let powerResult2 = diceResult1 + character1.power
      console.log(`${character1.name} confrontou ${character2.name}`)

      await logRollResult(
        character1.name,
        "power",
        diceResult1,
        character1.power
      );

      await logRollResult(
        character2.name,
        "power",
        diceResult2,
        character2.power
      );

      if (powerResult1 > powerResult2 && character2.score > 0) {
        console.log(`${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto`)
        character2.score--;
      }

      if (powerResult2 > powerResult2 && character1.score > 0) {
        console.log(`${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto`)

        character1--
      }

      const stringText = "Confronto empatado! Nenhum ponto foi perdido"
      console.log(powerResult2 === powerResult1 ? stringText : "")

    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.name} marcou um ponto`)
      character1.score++
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.name} marcou um ponto`)
      character2.score++
    }


    console.log('------------------------------------')

  }

}

async function declareWinner(character1, character2) {
  console.log("Resultado final:")
  console.log(`${character1.name} : ${character1.score} pontos.`)
  console.log(`${character2.name} : ${character2.score} pontos.`)

  if (character1.score > character2.score) {
    console.log(`\n ${character1.name} venceu a corrida! Parabéns`)
  } else if (character2.score > character1.score) {
    console.log(`\n ${character2.name} venceu a corrida! Parabéns`)
  } else {
    console.log("A corrida terminou em empate.")
  }
}
(async function main() {
  console.log(
    `Corrida entre ${playerOne.name} e ${playerTwo.name} começand... \n`
  )
  await playRaceEngine(playerOne, playerTwo)
  await declareWinner(playerOne, playerTwo)
})()