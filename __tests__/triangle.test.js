import { Triangle } from '../lib/triangle.js';

test('Triangle render method should match snapshot', () => {
  const triangle = new Triangle('ABC', 'blue', 'green');
  const svgString = triangle.render();
  expect(svgString).toMatchSnapshot();
});
