// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: githubName => {
            if (githubName) {
                return true;
            } else {
                console.log("Please enter your Github username!");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailAddress => {
            if (emailAddress) {
                return true;
            } else {
                console.log("Please enter your email address!");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleName => {
            if (titleName) {
                return true;
            } else {
                console.log("Please enter a title for your project!");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project descrption?',
        validate: projectDesc => {
            if (projectDesc) {
                return true;
            } else {
                console.log("Please enter a project description!");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps used for installation?',
        validate: installing => {
            if (installing) {
                return true;
            } else {
                console.log("Please provide the steps needed in order to install your project!");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is this being used?',
        validate: using => {
            if (using) {
                return true;
            } else {
                console.log("Please enter how this project will be used!");
                return false;
            }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license needed for your project',
        choices: [
            "Apache 2.0 License",
            "BSD 3-Clause License",
            "BSD 2-Clause License",
            "MIT License",
            "GNU GPLv2",
            "GBU GPLv3",
            "LGPLv3",
            "AGPLv3",
            "None",
            "Other",
        ]
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can other users contribute to this project?',
        validate: contribute => {
            if (contribute) {
                return true;
            } else {
                console.log("Please provide how other users can contribute to this project!");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'What tests are used for your project?',
        validate: testing => {
            if (testing) {
                return true;
            } else {
                console.log("Please enter what tests are used for your project!");
                return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'questions',
        message: 'Are there any questions?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
