import { Shape } from './shapes.js';

export class Square extends Shape {
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

                rect {
                  fill: ${this.shapeColor};
                  stroke: black;
                  stroke-width: 2;
                }
              </style>

              <rect x="30" y="30" width="240" height="140"/>
              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
            </svg>`;
  }
}
