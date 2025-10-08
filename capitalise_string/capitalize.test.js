const capitalize = require('./string.js');

test('capitalize the first word', () => {
  expect(capitalize('hello')).toEqual('Hello');
});

test('converts the rest of the string to lowercase', () => {
    expect(capitalize('hELLO')).toEqual('Hello');
});

test('works with entire sentences', () => {
    expect(capitalize('tHis IS a TeSt')).toEqual('This is a test');
});