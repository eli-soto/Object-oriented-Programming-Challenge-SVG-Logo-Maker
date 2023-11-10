import { Square } from '../lib/square.js';

test('Square constructor should initialize text and color properties', () => {
  const square = new Square('123', 'purple');
  expect(square.text).toBe('123');
  expect(square.textColor).toBe('purple'); // Use textColor instead of color
  expect(square.shapeColor).toBe('red');   // Use shapeColor instead of color
});


test('Square render method should return correct SVG string', () => {
  const square = new Square('123', 'purple');
  const svgString = square.render();
  expect(svgString).toMatchSnapshot();
});
