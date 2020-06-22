import { Counter } from './../src/coin_counter.js';

describe('Counter', () => {

  test('should return error message if argument is not a number', () => {
    const counter = Counter("hey");
    expect(counter).toBe("Invalid input")
  });

});