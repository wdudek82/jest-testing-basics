const functions = require('./functions');

it('Adds 2 + 3 equal 5', () => {
  expect(functions.add(2, 3)).toBe(5);
});

it('Adds 2 + 3 to NOT equals 4', () => {
  expect(functions.add(2, 3)).not.toBe(4);
});

it('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

it('Should be undefined', () => {
  let x;
  expect(functions.checkValue(x)).toBeUndefined();
});

it('Should be truthy', () => {
  const x = 2 + 3 === 5;
  expect(functions.checkValue(x)).toBeTruthy();
});

it('User should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  });
});
