import { Shape } from '../lib/shapes.js';

describe('Shape class', () => {
  test('constructor should initialize color property', () => {
    const shape = new Shape();
    expect(shape.color).toBe('');
  });

  test('setColor method should set the color property', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });

  test('render method should return an empty string', () => {
    const shape = new Shape();
    const result = shape.render();
    expect(result).toBe('');
  });
});
