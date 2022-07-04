#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import { createSpinner } from "nanospinner";

const sleepAnimation = (ms = 3000) => new Promise((resolve) => setTimeout(resolve,ms))

const initialMessage = async () => {
  const welcomeMessage = chalkAnimation.rainbow(
    "Bem-vindo ao leitor de arquivos!"
  );
  await sleepAnimation();
  welcomeMessage.stop();
}

const askForFilePath = async () => {
    const answer = await inquirer.prompt({
      name: "file_path",
      type: "input",
      message: "Digite aqui o caminho completo para o arquivo...",
    })
  return handleAnswer(answer.file_path);
}

const handleAnswer = async (file_path) => {
  const spinner = createSpinner("Checando o caminho do arquivo...").start();
  await sleepAnimation();
  fs.promises.readFile(file_path,"utf-8")
    .then((response) => {return spinner.success({text: chalk.bgGreen(`${response}`)})})
    .catch((err) => {return spinner.error({text: chalk.bgRed(`${err}`)})})
}

const mainFunction = async () => {
  await initialMessage()
  await askForFilePath();
}

await mainFunction()
