const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateHTML = require("./generateHTML");

//might have to change these to inquirer to collect user info and color
//once user name is collected, make axios call to git to collect git info
//Name
//Bio Image
//User Location
//Git Link
//public repositories, followers, GitHub stars and following count.

//all this info stored in user object
//distributed to html variable
//once html is generated, saved into pdf file

const questions = [
  `What is your git ${username}?`,
  `Which ${color} do you prefer?`
];

inquirer
  .prompt({
    message: "What is your GitHub Username?",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(response) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });
      //const repoNamesStr = repoNames.join("\n");
    });
  });

//function will write to "profile.pdf" and be sent the html page generated.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

function init() {
  console.log("Init Test");
  //const html = generateHTML();
  //writeToFile("profile.pdf", html);
}
init();
