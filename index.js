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
            "Apache 2.0",
            "MIT",
            "GPL",
            "None",
        ]
      },
      {
        type: 'input',
        name: 'contribution',
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
        message: 'How do you test this project?',
        validate: testing => {
            if (testing) {
                return true;
            } else {
                console.log("Please enter how to test this project!");
                return false;
            }
        }
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log("Success! Your README.md has been created!")
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile("README.md", generateMarkdown(data))
    })
};

// Function call to initialize app
init();
