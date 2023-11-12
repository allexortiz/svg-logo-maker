// Inquirer (node package manager) import
const inquirer = require("inquirer");

// File system module (node package manager) import
const fs = require("fs");

//importing classes from shapes.js
const { Triangle, Square, Circle } = require('./lib/shapes');

function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What text would you like you logo to display? (Enter up to three characters)',
                name: 'text',
            },
            {
                type: 'input',
                message: 'Please choose a text color: (Enter color name or hexidecimal number)',
                name: 'color',
            },
            {
                type: 'list',
                message: 'What shape would you like the logo to be?',
                name: 'shape',
                choices: ['Triangle', 'Square', 'Circle'],
            },
            {
                type: 'input',
                message: 'Choose what color you want the shape to be (Enter color keyword or hexidecimal number)',
                name: shapeColor
            },
        ])
        .then((responses) => {
            if(responses.text.length > 3) {
                console.log('Must be no more than 3 characters');
                promptUser();
            }else{
                writeToFile('logo.svg, responses');
            }
        });
}
promptUser();