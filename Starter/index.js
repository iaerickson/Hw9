const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHTML = require("./generateHTML");

// const questions = [
//   `What is your git ${username}?`,
//   `Which ${color} do you prefer?`
// ];

function writeToFile(fileName, data) {
  // fs.writeFile("log.txt", process.argv[2], function (err) {
  // if (err) {
  //     return console.log(err);
  //   }
  //   console.log("Success!");
  // });
}

function init() {
  console.log("Init Test");
  generateHTML();
}
init();
