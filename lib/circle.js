import { Shape } from './shapes.js';

export class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super();
    this.text = text;
    this.textColor = textColor || 'white'; // Default text color is white if not specified
    this.shapeColor = shapeColor || 'red'; // Default shape color is red if not specified
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <style>
                text {
                  font-family: Arial;
                  font-size: 40px;
                  fill: ${this.textColor};
                }

                circle {
                  fill: ${this.shapeColor};
                  stroke: black;
                  stroke-width: 2;
                }
              </style>

              <circle cx="150" cy="100" r="90"/>
              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
            </svg>`;
  }
}
