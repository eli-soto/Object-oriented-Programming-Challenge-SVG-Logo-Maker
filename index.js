import inquirer from 'inquirer'; // inquirer package that we are using 
import fs from 'fs';
import { Triangle } from './lib/triangle.js';
import { Circle } from './lib/circle.js';
import { Square } from './lib/square.js';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function (input) {
        return input.length <= 3 ? true : 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal value):',
      default: 'white', // Default text color is white
      validate: function (input) {
        // Regular expression to validate hexadecimal color codes
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
        // List of valid color keywords
        const validColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'white', 'black'];

        if (input.toLowerCase() === 'transparent' || validColors.includes(input.toLowerCase()) || hexRegex.test(input)) {
          return true;
        } else {
          return 'Please enter a valid color (keyword or hexadecimal value).';
        }
      },
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['triangle', 'circle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal value):',
      default: 'red', // Default shape color is red
      validate: function (input) {
        // Regular expression to validate hexadecimal color codes
        const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
        // List of valid color keywords
        const validColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'white', 'black'];

        if (input.toLowerCase() === 'transparent' || validColors.includes(input.toLowerCase()) || hexRegex.test(input)) {
          return true;
        } else {
          return 'Please enter a valid color (keyword or hexadecimal value).';
        }
      },
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    let svgString;

    switch (shape) {
      case 'triangle':
        const triangle = new Triangle(text, textColor, shapeColor);
        svgString = triangle.render();
        break;
      case 'circle':
        const circle = new Circle(text, textColor, shapeColor);
        svgString = circle.render();
        break;
      case 'square':
        const square = new Square(text, textColor, shapeColor);
        svgString = square.render();
        break;
      default:
        console.error('Invalid shape selected.');
        return;
    }

    fs.writeFileSync('./examples/logo.svg', svgString);
    console.log('SVG saved to ./examples/logo.svg');
  })
  .catch((error) => {
    console.error('Something went wrong:', error);
  });
