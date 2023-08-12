#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let username, techstack;

const sleep = (ms = 200) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
  const msg = "Hello!! Ayush here...";
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
  await sleep();
}
async function connect() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Let's Connect \n Linkedin - https://www.linkedin.com/in/ayuugoyal/\n Twitter - https://www.twitter.com/ayuugoyal/\n"
  );
  await sleep();
  await sleep();
  await sleep();
  await sleep();
  rainbowTitle.stop();
}

async function askName() {
  const answer = await inquirer.prompt({
    name: "user_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "name";
    },
  });
  username = answer.user_name;
}

async function techStack() {
  const answer = await inquirer.prompt({
    name: "tech_stack",
    type: "list",
    message: "Who are you?",
    choices: [
      "Web Developer",
      "Android Developer",
      "Blockchain Developer",
      "Ui/Ux Designer",
    ],
  });
  techstack = answer.tech_stack;
}

async function makeWel() {
  const spinner = createSpinner("Cooking...").start();
  await sleep();
  await sleep();
  await sleep();
  await sleep();
  await sleep();
  await sleep();
  await sleep();
  spinner.success({
    text: `Hello Nice to meet you ${username} - ${techstack}`,
  });
}

await welcome();
await askName();
await techStack();
await makeWel();
await connect();
