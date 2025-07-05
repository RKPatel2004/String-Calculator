const add = require("./stringCalculator");

test('return 0 for empty input string', () =>{
    expect(add("")).toBe(0);
});