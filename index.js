// Import the 'inquirer' package for handling user prompts
const inquirer = require('inquirer');

// Import the 'fs' (file system) module for file manipulation
const fs = require('fs');

// Import classes from 'shapes.js'
const { Triangle, Square, Circle } = require('./lib/shapes');

// Function to prompt the user for input
function promptUser() {
    inquirer
        .prompt([
            // Prompt for the text to be displayed in the logo
            {
                type: 'input',
                message: 'What text would you like your logo to display? (Enter up to three characters)',
                name: 'text',
            },
            // Prompt for the text color
            {
                type: 'input',
                message: 'Please choose a text color: (Enter color name or hexadecimal number)',
                name: 'textColor',
            },
            // Prompt for the shape of the logo
            {
                type: 'list',
                message: 'What shape would you like the logo to be?',
                name: 'shape',
                choices: ['Triangle', 'Square', 'Circle'],
            },
            // Prompt for the color of the chosen shape
            {
                type: 'input',
                message: 'Choose what color you want the shape to be (Enter color keyword or hexadecimal number)',
                name: 'shapeColor'
            },
        ])
        .then((responses) => {
            // Check if the entered text is more than 3 characters
            if (responses.text.length > 3) {
                console.log('Text must be no more than 3 characters');
                // If so, prompt the user again
                promptUser();
            } else {
                // Call to write the file to generate the SVG file
                writeToFile('logo.svg', responses);
            }
        });
}

// Function to write SVG content to a file
function writeToFile(fileName, responses) {
    // SVG string initialization with basic structure
    let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';

    let shapeChoice;
    // Create an instance of the chosen shape class based on user input
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

    // Append the rendered shape to the SVG string
    svgString += shapeChoice.render();

    // Append the text element to the SVG string with user-specified properties
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${responses.textColor}">${responses.text}</text>`;

    // Close the SVG group and SVG tags
    svgString += "</g>";
    svgString += "</svg>";

    // Write the SVG string to a file
    fs.writeFile(fileName, svgString, (err) => {
        // Check for errors during file writing
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

// Initial call to start the application
promptUser();