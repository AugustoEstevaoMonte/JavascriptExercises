#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation"
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms))

const welcome = async (message) => {
  const rainbowTitle = chalkAnimation.rainbow(
    'Olá mundo?'
  );
  await sleep();
  rainbowTitle.stop()
}
await welcome()

const askName = async () => {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: "Qual é o seu nome?",
    default(){
      return 'Player'
    },
  });
  playerName = answers.player_name;
}

await askName()


const question1 = async () => {
  const answer = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: "Quando o Javascript foi criado?",
    choices: [
      '23 de Maio de 1995',
      '4 de Dezembro de 2001',
      '10 de Fevereiro de 2002',
      '15 de Setembro de 2009'
    ]
  });
  return handleAnswer(answer.question_1 == '4 de Dezembro de 2001');
}

const handleAnswer = async (answer) => {
  const spinner = createSpinner('Checando se a resposta está correta.').start()
  await sleep();
  if(answer)
    spinner.success({text: chalk.bgGreen(`Bom trabalho ${playerName}, essa é a resposta correta!`)});
  else
  {
    spinner.error({text: chalk.bgRed(`GAME OVER, você perdeu ${playerName}`)})
    process.exit(1)
  }
}

await question1();