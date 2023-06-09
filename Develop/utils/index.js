// Include packages needed for this application
const generateMarkdown =require("./utils/generateMarkdown.js");
const inquirer = require(`inquirer`);
const fs = require(`fs`);

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project: ",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information: ",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidlines: ",
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache', 'GPL', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
    // Prompt user for input
    inquirer.prompt(questions).then(function(userInput) {
      // Generate markdown string based on user input
      const markdownString = generateMarkdown(userInput);
  
      // Write markdown string to README.md file
      fs.writeFile('README.md', markdownString, function(err) {
        if (err) {
          // If there's an error, log it
          console.log(err);
        } else {
          // If the file is written successfully, log a success message
          console.log('Look at your spiffy new README!');
        }
      });
    });
  }

// Function call to initialize app
init();
