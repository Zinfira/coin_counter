import { Counter } from './../src/coin_counter.js';

describe('Counter', () => {
  let countCoin = new Counter();
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;

  test('should return error message if argument is not a number', () => {
    const amount = "hey";
    expect(countCoin.coinCounter(amount, quarter, dime, nickel, penny)).toBe("Invalid input")
  });

  test('should return error message if argument is negative number', () => {
    const amount = -2;
    expect(countCoin.coinCounter(amount, quarter, dime, nickel, penny)).toBe("Invalid input")
  });

  test('should return zeros for all coins', () => {
    const amount = 0;
    expect(countCoin.coinCounter(amount)).toEqual([0, 0, 0, 0])
  });

  test('should return 1 quarter', () => {
    const amount = 0.25;
    expect(countCoin.coinCounter(amount)).toEqual([1, 0, 0, 0])
  });

  test('should return 1 dime', () => {
    const amount = 0.1;
    expect(countCoin.coinCounter(amount)).toEqual([0, 1, 0, 0])
  });

  test('should return 1 nickel', () => {
    const amount = 0.05;
    expect(countCoin.coinCounter(amount)).toEqual([0, 0, 1, 0])
  });

  test('should return 1 penny', () => {
    const amount = 0.01;
    expect(countCoin.coinCounter(amount)).toEqual([0, 0, 0, 1])
  });

  test('should return coins for 4.99', () => {
    const amount = 4.99;
    expect(countCoin.coinCounter(amount)).toEqual([19, 2, 0, 4])
  });
});