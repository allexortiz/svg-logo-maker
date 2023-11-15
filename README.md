## SVG Logo Maker

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Table of Contents
- [Description](#description)
- [Recording](#recording)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Testing](#testing)
- [Questions](#questions)

## Description
This application was built to create your own logo without having to pay a graphic designer. It uses inquirer to prompt the user questions in the command line for what they want their logo to look like. You can have up to three characters, choose between a circle, square, or triangle as the shape, what color they want the text and shape to display. Once all the questions are answered, an SVG file is created with their input. This application also uses a test suite that runs three tests.

## Recording
https://drive.google.com/file/d/1nK15l7qGs8cI864TJTF2oB6gCKlot0ZP/view

## Screenshots
![svg-logo-test](../image1.png)
![svg-logo](/image.png)
![example1](./svg-logo-maker/examples/example1.png)
![example2](./svg-logo-maker/examples/example2.png)
![example3](./svg-logo-maker/examples/example3.png)

## Technologies
This application utilizes node.js v16, inquirer v8.2.4, file system module, and jest v29.5.0.

## Installation
1. Clone the repository for this application at https://github.com/allexortiz/svg-logo-maker
2. Install VC Code and open it.
3. Using the intergrated terminal, install node.js v16.
4. Using the intergrated terminal, type the command `npm init -y`.
5. Using the intergrated terminal, type `npm i` to install the dependencies.
6. Using the intergrated terminal, type `npm inquirer@8.2.4` and `npm install --save-dev jest` to install both inquirer and jest.
7. Using the intergrated terminal, type `node index.js` to run the application.

## Features
Features include the ability to quickly generate logos easily through an SVG file inside the command line.

## Usage
To run this application, use the command line to navigate to the directory of the application, install all dependencies (npm i), then type the command node index.js. You will then be taken through a series of questions. Once all questions have been answered properly, a message will display to the command line telling you your logo has been generated. Find your new logo in the newly generated SVG file.

## Testing
To run unit testing, open the terminal, and use the command `npm test`.

## Questions
If you have any addition questions feel free to reach me at either my github or email address.

Github: https://github.com/allexortiz

Email: allexortiz@outlook.com
