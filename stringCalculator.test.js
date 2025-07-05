const add = require("./stringCalculator");

test('return 0 for empty input string', () =>{
    expect(add("")).toBe(0);
});

test('return number in case of single length string', () =>{
    expect(add("1")).toBe(1);
});

test('adding two numbers', () =>{
    expect(add("1, 2")).toBe(3);
});

test('adding three numbers', () =>{
    expect(add("16, 4, 31")).toBe(51);
});

test('handling new line', () =>{
    expect(add("5\n, 4, 2\n, 3")).toBe(14);
});