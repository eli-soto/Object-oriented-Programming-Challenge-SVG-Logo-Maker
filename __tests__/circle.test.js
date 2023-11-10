import { Circle } from '../lib/circle.js';

test('Circle constructor should initialize text, textColor, and shapeColor properties', () => {
  const circle = new Circle('XYZ', 'green', 'blue');
  expect(circle.text).toBe('XYZ');
  expect(circle.textColor).toBe('green');
  expect(circle.shapeColor).toBe('blue');
});

test('Circle render method should return correct SVG string', () => {
  const circle = new Circle('XYZ', 'green', 'blue');
  const svgString = circle.render().trim(); // Trim received SVG string
  expect(svgString).toMatchSnapshot();

});
