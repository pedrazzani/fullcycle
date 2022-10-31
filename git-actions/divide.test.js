const divide = require('./divide');

it('Divide 1 / 2 to be 0.5', () => {
  expect(parseFloat(divide(1, 2))).toBe(0.5);
});


it('Divide 1 / 0 to throw Error', () => {
  expect(() => divide(1, 0)).toThrow();
});


it('Divide 10 / \'2F\' to throw Error', () => {
  expect(() => divide(10, '2F')).toThrow();
});