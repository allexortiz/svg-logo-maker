// Inquirer (node package manager) import
const inquirer = require('inquirer');

// File system module (node package manager) import
const fs = require('fs');

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
                name: 'textColor',
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
                name: 'shapeColor'
            },
        ])
        //makes sure the user doesn't input more than 3 characters
        .then((responses) => {
            if (responses.text.length > 3) {
                console.log('Text must be no more than 3 characters');
                promptUser();
            } else {
                //calls to write the file to generate svg file
                writeToFile('logo.svg', responses);
            }
        });
}

function writeToFile(fileName, responses) {
    let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';

    let shapeChoice;
    switch (responses.shape) {
        case 'Triangle':
            shapeChoice = new Triangle();
            break;
        case 'Square':
            shapeChoice = new Square();
            break;
        case 'Circle':
            shapeChoice = new Circle();
            break;
        default:
            throw new Error('Invalid shape choice');
    }

    // Set the color for the shape using the value from the prompt
    shapeChoice.setColor(responses.shapeColor);

    svgString += shapeChoice.render(); // Use the render method from the chosen shape class

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${responses.textColor}">${responses.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}


//calls to start application
promptUser();