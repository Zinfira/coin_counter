export class Counter {
  coinCounter(number) {
  if (isNaN(number) || number < 0) {
    return "Invalid input";
  }

    const quarter = 0.25;
    const dime = 0.1;
    const nickel = 0.05;
    const penny = 0.01;
    const result = [0, 0, 0, 0];
    return recurse(result);

    function recurse(result) {
      if (number === 0) {
        return result;
      }
      if (number / quarter >= 1) {
        result[0] = Math.trunc(number / quarter);
        number = (number % quarter).toFixed(2);
        return recurse(result);
      }
      if (number / dime >= 1) {
        result[1] = Math.trunc(number / dime);
        number = (number % dime).toFixed(2);
        return recurse(result);
      }
      if (number / nickel >= 1) {
        result[2] = Math.trunc(number / nickel);
        number = (number % nickel).toFixed(2);
        return recurse(result);
      } else {
        result[3] =Math.trunc(number / penny);
        return result;
      }
    }
  }
}