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

test('throws error on negative numbers', () => {
    expect(() => add("-1,-2,3,-4")).toThrow("Negative numbers not allowed: -1,-2,-4");
});

test('supports custom single-character delimiter', () => {
    expect(add("//;\n1;2;3")).toBe(6);
});